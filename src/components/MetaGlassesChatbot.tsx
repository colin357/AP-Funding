"use client";

import { useState, useRef, useEffect, FormEvent } from "react";

export const META_GLASSES_MAX_ADVANCE = 300;

type Step =
  | "greeting"
  | "glassesModel"
  | "purchaseTimeframe"
  | "stillOwn"
  | "arbitrationStatus"
  | "lawFirm"
  | "location"
  | "name"
  | "email"
  | "phone"
  | "consent"
  | "submitting"
  | "done";

interface Message {
  role: "bot" | "user";
  text: string;
  isResult?: boolean;
}

interface MetaGlassesLeadData {
  name: string;
  email: string;
  phone: string;
  glassesModel: string;
  purchaseTimeframe: string;
  stillOwn: string;
  arbitrationStatus: string;
  lawFirm: string;
  location: string;
  consent: boolean;
}

interface MetaGlassesChatbotProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const GREETING =
  "Hi there! I'm Callie, your advance assistant at Call Cash.\n\nIf you own Meta smart glasses, you may be part of the arbitration over the glasses recording personal video and audio without proper consent. Call Cash can advance you up to $300 on your claim now, subject to underwriting.\n\nI'll ask a few quick questions. First, which Meta glasses do you own?";

const NO_INPUT_STEPS: Step[] = [
  "glassesModel",
  "stillOwn",
  "arbitrationStatus",
  "consent",
  "submitting",
  "done",
  "greeting",
];

const MODEL_OPTIONS = ["Ray-Ban Meta", "Oakley Meta", "Ray-Ban Stories", "Not sure"];
const STILL_OWN_OPTIONS = ["Yes, I still have them", "No, not anymore"];
const ARBITRATION_OPTIONS = [
  "Yes, I've already filed",
  "I've signed with a law firm",
  "Not yet",
];

export default function MetaGlassesChatbot({
  isOpen,
  setIsOpen,
}: MetaGlassesChatbotProps) {
  const [step, setStep] = useState<Step>("greeting");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [leadData, setLeadData] = useState<Partial<MetaGlassesLeadData>>({});
  const [isTyping, setIsTyping] = useState(false);
  const greetedRef = useRef(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const addBotMessage = (text: string, nextStep: Step) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text }]);
      setStep(nextStep);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && !greetedRef.current) {
      greetedRef.current = true;
      // Defer so the greeting animates in after the window mounts.
      setTimeout(() => addBotMessage(GREETING, "glassesModel"), 0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current && !NO_INPUT_STEPS.includes(step)) {
      inputRef.current.focus();
    }
  }, [isOpen, step, isTyping]);

  const addUserMessage = (text: string) =>
    setMessages((prev) => [...prev, { role: "user", text }]);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string) => {
    const digits = phone.replace(/[^\d]/g, "");
    return digits.length >= 7 && digits.length <= 15;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userInput = input.trim();
    addUserMessage(userInput);
    setInput("");

    switch (step) {
      case "purchaseTimeframe":
        setLeadData((prev) => ({ ...prev, purchaseTimeframe: userInput }));
        addBotMessage("Got it. Do you still own the glasses?", "stillOwn");
        break;

      case "lawFirm":
        setLeadData((prev) => ({ ...prev, lawFirm: userInput }));
        addBotMessage("Thanks. What city and state do you live in?", "location");
        break;

      case "location":
        setLeadData((prev) => ({ ...prev, location: userInput }));
        addBotMessage(
          "Almost done. A few details so we can follow up. What's your name?",
          "name"
        );
        break;

      case "name":
        setLeadData((prev) => ({ ...prev, name: userInput }));
        addBotMessage(
          `Nice to meet you, ${userInput}! What's the best email address to send your advance details to?`,
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
        addBotMessage("And the best phone number to reach you at?", "phone");
        break;

      case "phone":
        if (!validatePhone(userInput)) {
          addBotMessage(
            "That doesn't look like a valid phone number. Could you try again with the full number?",
            "phone"
          );
          return;
        }
        setLeadData((prev) => ({ ...prev, phone: userInput }));
        addBotMessage(
          "Last thing: do you agree to be contacted by Call Cash about your advance — by phone, text, and email, including through automated or AI-assisted systems? Message and data rates may apply, and you can reply STOP at any time to opt out.",
          "consent"
        );
        break;

      default:
        break;
    }
  };

  const handleGlassesModel = (value: string) => {
    if (isTyping) return;
    addUserMessage(value);
    setLeadData((prev) => ({ ...prev, glassesModel: value }));
    addBotMessage(
      "Thanks. Roughly when did you buy them? A month and year is fine.",
      "purchaseTimeframe"
    );
  };

  const handleStillOwn = (value: string) => {
    if (isTyping) return;
    addUserMessage(value);
    setLeadData((prev) => ({ ...prev, stillOwn: value }));
    addBotMessage(
      "Have you already filed an arbitration claim against Meta, or signed up with a law firm to handle one?",
      "arbitrationStatus"
    );
  };

  const handleArbitrationStatus = (value: string) => {
    if (isTyping) return;
    addUserMessage(value);
    setLeadData((prev) => ({ ...prev, arbitrationStatus: value }));
    if (value === "Not yet") {
      setLeadData((prev) => ({ ...prev, lawFirm: "None yet" }));
      addBotMessage(
        "No problem. We can still review your situation, and we work with firms that are handling these claims. What city and state do you live in?",
        "location"
      );
    } else {
      addBotMessage(
        "Great. Which law firm is representing you? If you're not sure, just type 'not sure'.",
        "lawFirm"
      );
    }
  };

  const handleConsent = (consent: boolean) => {
    if (isTyping) return;
    addUserMessage(consent ? "Yes, I consent" : "No, I don't consent");

    const finalData: MetaGlassesLeadData = {
      name: leadData.name || "",
      email: leadData.email || "",
      phone: leadData.phone || "",
      glassesModel: leadData.glassesModel || "",
      purchaseTimeframe: leadData.purchaseTimeframe || "",
      stillOwn: leadData.stillOwn || "",
      arbitrationStatus: leadData.arbitrationStatus || "",
      lawFirm: leadData.lawFirm || "",
      location: leadData.location || "",
      consent,
    };

    setLeadData(finalData);
    setStep("submitting");

    fetch("/api/meta-glasses-leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...finalData, maxAdvance: META_GLASSES_MAX_ADVANCE }),
    }).catch(console.error);

    // Meta Pixel Lead event
    const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;
    if (typeof fbq === "function") {
      fbq("track", "Lead");
    }

    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: `Thanks, ${finalData.name}! Here's where things stand:`,
          isResult: true,
        },
      ]);
      setStep("done");
      setIsTyping(false);
    }, 1500);
  };

  const resetChat = () => {
    setMessages([]);
    setStep("greeting");
    setLeadData({});
    setInput("");
    setTimeout(() => addBotMessage(GREETING, "glassesModel"), 300);
  };

  const placeholderFor = (s: Step) => {
    switch (s) {
      case "purchaseTimeframe":
        return "e.g. March 2025";
      case "lawFirm":
        return "Law firm name";
      case "location":
        return "City, State";
      case "name":
        return "Type your name...";
      case "email":
        return "your@email.com";
      case "phone":
        return "(555) 123-4567";
      default:
        return "Type a message...";
    }
  };

  const renderOptions = (options: string[], onPick: (v: string) => void) => (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onPick(option)}
          className="flex-1 min-w-[45%] rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:border-green-200 hover:bg-green-50 hover:text-green-700 cursor-pointer"
        >
          {option}
        </button>
      ))}
    </div>
  );

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
                C
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-green-500 bg-green-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-white">Callie</h3>
              <p className="text-xs text-green-100">Call Cash Assistant</p>
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
                  className={`max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-green-600 text-white rounded-br-md"
                      : "bg-white text-gray-700 rounded-bl-md shadow-sm border border-gray-100"
                  }`}
                >
                  {msg.text}
                  {msg.isResult && (
                    <div className="mt-3 rounded-xl border border-green-200 bg-green-50 p-4">
                      <div className="mb-1 text-xs font-medium uppercase tracking-wider text-green-600">
                        Available Advance
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        Up to ${META_GLASSES_MAX_ADVANCE.toLocaleString()}
                      </div>
                      <div className="mt-2 space-y-1">
                        {[
                          "Advance on your Meta glasses privacy claim",
                          "No credit check and no monthly payments",
                          "Non-recourse: you owe nothing if your claim doesn't recover",
                          "Our team will reach out to confirm your details",
                        ].map((f) => (
                          <div key={f} className="flex items-start gap-1.5 text-xs text-green-700">
                            <span className="mt-0.5">&#10003;</span>
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 rounded-lg bg-amber-50 border border-amber-200 px-3 py-2 text-xs text-amber-700">
                        This is not an offer of funding. Final advance amounts are decided after underwriting and are not guaranteed.
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
            {step === "glassesModel" ? (
              renderOptions(MODEL_OPTIONS, handleGlassesModel)
            ) : step === "stillOwn" ? (
              renderOptions(STILL_OWN_OPTIONS, handleStillOwn)
            ) : step === "arbitrationStatus" ? (
              renderOptions(ARBITRATION_OPTIONS, handleArbitrationStatus)
            ) : step === "consent" ? (
              <div className="flex gap-2">
                <button
                  onClick={() => handleConsent(true)}
                  className="flex-1 rounded-xl bg-green-600 py-2.5 text-sm font-medium text-white transition-colors hover:bg-green-500 cursor-pointer"
                >
                  Yes, I consent
                </button>
                <button
                  onClick={() => handleConsent(false)}
                  className="flex-1 rounded-xl border border-gray-200 bg-gray-50 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 cursor-pointer"
                >
                  No
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
            ) : step === "submitting" || step === "greeting" ? (
              <div className="py-2 text-center text-sm text-gray-400">
                {step === "submitting" ? "Submitting your details..." : "One moment..."}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  ref={inputRef}
                  type={step === "email" ? "email" : step === "phone" ? "tel" : "text"}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={placeholderFor(step)}
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
