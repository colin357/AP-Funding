"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { calculateEstimate, LeadData, EstimateResult } from "@/lib/estimateCalculator";

type Step =
  | "greeting"
  | "name"
  | "email"
  | "phone"
  | "accidentDate"
  | "injuries"
  | "hasLawyer"
  | "calculating"
  | "estimate"
  | "done";

interface Message {
  role: "bot" | "user";
  text: string;
  isEstimate?: boolean;
  estimateData?: EstimateResult;
}

interface ChatbotProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Chatbot({ isOpen, setIsOpen }: ChatbotProps) {
  const [step, setStep] = useState<Step>("greeting");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [leadData, setLeadData] = useState<Partial<LeadData>>({});
  const [isTyping, setIsTyping] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setHasGreeted(true);
      addBotMessage(
        "Hi there! I'm Olivia, your cash advance assistant at Olivia Advances. I'm here to help you find out how much cash you could receive for your car accident case. It only takes a minute! Let's start \u2014 what's your name?",
        "name"
      );
    }
  }, [isOpen, hasGreeted]);

  useEffect(() => {
    if (isOpen && inputRef.current && step !== "hasLawyer" && step !== "calculating" && step !== "estimate" && step !== "done") {
      inputRef.current.focus();
    }
  }, [isOpen, step, isTyping]);

  const addBotMessage = (text: string, nextStep: Step) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text }]);
      setStep(nextStep);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  const addBotEstimate = (text: string, estimateData: EstimateResult) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text, isEstimate: true, estimateData },
      ]);
      setStep("done");
      setIsTyping(false);
    }, 2000);
  };

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string) => {
    // Accept international formats (e.g. +44 20 7946 0958, +91 98765-43210):
    // strip everything but digits and check against the E.164 length range.
    const digits = phone.replace(/[^\d]/g, "");
    return digits.length >= 7 && digits.length <= 15;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userInput = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userInput }]);
    setInput("");

    switch (step) {
      case "name":
        setLeadData((prev) => ({ ...prev, name: userInput }));
        addBotMessage(
          `Nice to meet you, ${userInput}! To keep you updated on your cash advance options, what's your email address?`,
          "email"
        );
        break;

      case "email":
        if (!validateEmail(userInput)) {
          addBotMessage(
            "Hmm, that doesn't look like a valid email. Could you double-check and try again?",
            "email"
          );
          return;
        }
        setLeadData((prev) => ({ ...prev, email: userInput }));
        addBotMessage(
          "Got it! And what's the best phone number to reach you at?",
          "phone"
        );
        break;

      case "phone":
        if (!validatePhone(userInput)) {
          addBotMessage(
            "That doesn't look like a valid phone number. Could you try again with your full number?",
            "phone"
          );
          return;
        }
        setLeadData((prev) => ({ ...prev, phone: userInput }));
        addBotMessage(
          "Perfect! Now, when did the car accident happen? You can type the date in any format (e.g., 01/15/2025 or January 15, 2025).",
          "accidentDate"
        );
        break;

      case "accidentDate": {
        const parsed = new Date(userInput);
        if (isNaN(parsed.getTime())) {
          addBotMessage(
            "I couldn't quite understand that date. Could you try again? Something like MM/DD/YYYY works great.",
            "accidentDate"
          );
          return;
        }
        setLeadData((prev) => ({
          ...prev,
          accidentDate: parsed.toISOString().split("T")[0],
        }));
        addBotMessage(
          "Thank you. Could you briefly describe the injuries you sustained from the accident? The more detail you provide, the more accurate your estimate will be.",
          "injuries"
        );
        break;
      }

      case "injuries":
        if (userInput.length < 5) {
          addBotMessage(
            "Could you provide a bit more detail about your injuries? Even a sentence or two helps me give you a better estimate.",
            "injuries"
          );
          return;
        }
        setLeadData((prev) => ({ ...prev, injuries: userInput }));
        addBotMessage(
          "Almost done! One last question \u2014 do you currently have an attorney representing you for this case?",
          "hasLawyer"
        );
        break;

      default:
        break;
    }
  };

  const handleLawyerResponse = (hasLawyer: boolean) => {
    if (isTyping) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", text: hasLawyer ? "Yes, I have an attorney" : "No, not yet" },
    ]);

    const finalData: LeadData = {
      name: leadData.name || "",
      email: leadData.email || "",
      phone: leadData.phone || "",
      accidentDate: leadData.accidentDate || "",
      injuries: leadData.injuries || "",
      hasLawyer,
    };

    setLeadData(finalData);
    setStep("calculating");

    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: `Thanks for sharing all of that with me, ${leadData.name}! Let me crunch the numbers for you...`,
        },
      ]);
      setIsTyping(false);

      const estimate = calculateEstimate(finalData);

      // Send lead to API
      fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...finalData,
          estimateLow: estimate.low,
          estimateHigh: estimate.high,
        }),
      }).catch(console.error);

      // Meta Pixel Lead event
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead");
      }

      addBotEstimate(
        `Based on the details you've shared, here's your estimated cash advance:`,
        estimate
      );
    }, 1000);
  };

  const resetChat = () => {
    setMessages([]);
    setStep("greeting");
    setLeadData({});
    setInput("");
    setHasGreeted(false);
    setTimeout(() => {
      setHasGreeted(true);
      addBotMessage(
        "Hi there! I'm Olivia, your cash advance assistant at Olivia Advances. I'm here to help you find out how much cash you could receive for your car accident case. It only takes a minute! Let's start \u2014 what's your name?",
        "name"
      );
    }, 300);
  };

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-600 to-green-500 shadow-lg shadow-green-500/25 transition-all hover:scale-105 hover:shadow-green-500/40 cursor-pointer"
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-5 w-5 rounded-full bg-green-500" />
          </span>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[550px] w-[400px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-black/10 animate-fade-in-up">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-gray-100 bg-gradient-to-r from-green-600 to-green-500 px-5 py-4">
            <div className="relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
                O
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-green-500 bg-green-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-white">Olivia</h3>
              <p className="text-xs text-green-100">Olivia Advances Assistant</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages flex-1 overflow-y-auto bg-gray-50 px-4 py-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex animate-fade-in-up ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-green-600 text-white rounded-br-md"
                      : "bg-white text-gray-700 rounded-bl-md shadow-sm border border-gray-100"
                  }`}
                >
                  {msg.text}
                  {msg.isEstimate && msg.estimateData && (
                    <div className="mt-3 rounded-xl border border-green-200 bg-green-50 p-4">
                      <div className="mb-1 text-xs font-medium uppercase tracking-wider text-green-600">
                        Estimated Cash Advance
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        ${msg.estimateData.low.toLocaleString()} &mdash; ${msg.estimateData.high.toLocaleString()}
                      </div>
                      <div className="mt-2 space-y-1">
                        {msg.estimateData.factors.map((f, fi) => (
                          <div key={fi} className="flex items-start gap-1.5 text-xs text-green-700">
                            <span className="mt-0.5">&#10003;</span>
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 rounded-lg bg-amber-50 border border-amber-200 px-3 py-2 text-xs text-amber-700">
                        This is only an estimate based on the information provided. Actual cash advance amounts may vary based on case review and documentation.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start animate-fade-in-up">
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm border border-gray-100">
                  <div className="typing-dot h-2 w-2 rounded-full bg-green-400" />
                  <div className="typing-dot h-2 w-2 rounded-full bg-green-400" />
                  <div className="typing-dot h-2 w-2 rounded-full bg-green-400" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="border-t border-gray-200 bg-white px-4 py-3">
            {step === "hasLawyer" ? (
              <div className="flex gap-2">
                <button
                  onClick={() => handleLawyerResponse(true)}
                  className="flex-1 rounded-xl bg-green-600 py-2.5 text-sm font-medium text-white transition-colors hover:bg-green-500 cursor-pointer"
                >
                  Yes, I have an attorney
                </button>
                <button
                  onClick={() => handleLawyerResponse(false)}
                  className="flex-1 rounded-xl border border-gray-200 bg-gray-50 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 cursor-pointer"
                >
                  No, not yet
                </button>
              </div>
            ) : step === "done" ? (
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+19543200708"
                  className="flex items-center justify-center gap-2 rounded-xl bg-green-600 py-2.5 text-sm font-medium text-white transition-colors hover:bg-green-500"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us: (954) 320-0708
                </a>
                <button
                  onClick={resetChat}
                  className="rounded-xl border border-gray-200 py-2 text-xs text-gray-500 transition-colors hover:bg-gray-50 cursor-pointer"
                >
                  Start a new conversation
                </button>
              </div>
            ) : step === "calculating" ? (
              <div className="py-2 text-center text-sm text-gray-400">
                Calculating your estimate...
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  ref={inputRef}
                  type={step === "email" ? "email" : step === "phone" ? "tel" : "text"}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={
                    step === "name"
                      ? "Type your name..."
                      : step === "email"
                        ? "your@email.com"
                        : step === "phone"
                          ? "(555) 123-4567"
                          : step === "accidentDate"
                            ? "MM/DD/YYYY"
                            : step === "injuries"
                              ? "Describe your injuries..."
                              : "Type a message..."
                  }
                  className="flex-1 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-green-400 focus:bg-white"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={isTyping || !input.trim()}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white transition-colors hover:bg-green-500 disabled:opacity-30 cursor-pointer"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
