"use client";

import { useState } from "react";
import CallCashChatbot from "@/components/CallCashChatbot";

export default function CallCashHome() {
  const [chatOpen, setChatOpen] = useState(false);

  const openChat = () => setChatOpen(true);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground grid-pattern">
      {/* Ambient glow effects */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/8 blur-3xl animate-glow" />
        <div className="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-indigo-500/6 blur-3xl animate-glow" />
        <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-blue-400/5 blur-3xl animate-glow" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-border/50 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Call Cash
          </span>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#how-it-works" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
              How It Works
            </a>
            <a href="#benefits" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
              Benefits
            </a>
            <a href="#faq" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
              FAQ
            </a>
            <a href="tel:+19543200708" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
              (954) 320-0708
            </a>
          </div>
          <button
            onClick={openChat}
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/25 cursor-pointer"
          >
            Get Your Advance
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-32 lg:pt-32 lg:pb-40">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm text-blue-600">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Up to $1,000 Per Violation — Funded in 48 Hours
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Cash Advances on Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                TCPA
              </span>{" "}
              Case
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-500">
              Don&apos;t wait on your spam-text or robocall case to settle. Call
              Cash gets you money now — up to $1,000 per violation after
              underwriting, with funding decisions in as little as 48 hours. It&apos;s
              non-recourse, so you only pay it back if your case wins.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={openChat}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:shadow-blue-600/40 hover:brightness-110 cursor-pointer"
              >
                See What You Qualify For
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <a
                href="tel:+19543200708"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-8 py-3.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us: (954) 320-0708
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="text-2xl font-bold text-gray-900">Up to $1,000</div>
                <div className="text-xs text-gray-400">Per Violation</div>
              </div>
              <div className="h-8 w-px bg-gray-200" />
              <div>
                <div className="text-2xl font-bold text-gray-900">48 hrs</div>
                <div className="text-xs text-gray-400">Underwriting Decision</div>
              </div>
              <div className="h-8 w-px bg-gray-200" />
              <div>
                <div className="text-2xl font-bold text-gray-900">$0</div>
                <div className="text-xs text-gray-400">If Your Case Loses</div>
              </div>
            </div>
          </div>

          {/* Hero visual — abstract card */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100 to-indigo-100 blur-xl" />
              <div className="relative rounded-3xl border border-gray-200 bg-white/90 p-8 backdrop-blur-xl shadow-lg">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-400">Potential Advance</div>
                    <div className="text-2xl font-bold text-gray-900">Up to $1,000 / violation</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3">
                    <span className="text-sm text-gray-500">Credit Check</span>
                    <span className="text-sm font-semibold text-green-600">None Required</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3">
                    <span className="text-sm text-gray-500">Monthly Payments</span>
                    <span className="text-sm font-semibold text-green-600">$0</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3">
                    <span className="text-sm text-gray-500">If Your Case Loses</span>
                    <span className="text-sm font-semibold text-green-600">You Owe Nothing</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3">
                    <span className="text-sm text-gray-500">Underwriting</span>
                    <span className="text-sm font-semibold text-blue-600">Within 48 Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative z-10 border-t border-gray-100 bg-gray-50/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Getting an advance on your TCPA case is simple. Our streamlined process gets money in your hands fast.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Chat with Callie",
                description:
                  "Answer a few quick questions about the spam texts or calls you've been getting. It takes less than 2 minutes.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                ),
              },
              {
                step: "02",
                title: "Quick Underwriting",
                description:
                  "Our team reviews your case and makes a funding decision in as little as 48 hours — up to $1,000 per violation.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                ),
              },
              {
                step: "03",
                title: "Get Your Cash",
                description:
                  "Once approved, receive your advance fast. No credit checks, no monthly payments — and you only repay if your case wins.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group relative rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-md"
              >
                <div className="absolute -top-3 left-6 rounded-full bg-blue-600 px-3 py-0.5 text-xs font-bold text-white">
                  {item.step}
                </div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="relative z-10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose Call Cash
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              We turn your TCPA case into cash in hand — fast, with zero risk to you.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "No Credit Check",
                description: "Your credit score doesn't matter. Approval is based on the strength of your TCPA case.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              {
                title: "Up to $1,000 Per Violation",
                description: "Every illegal text or call can be a violation. After underwriting, you may qualify for up to $1,000 each.",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Funded in 48 Hours",
                description: "Our underwriting team moves fast — funding decisions in as little as 48 hours.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
              },
              {
                title: "Risk-Free",
                description: "Advances are non-recourse. If your case doesn't win, you owe us nothing.",
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-blue-200 hover:shadow-md"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                  <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={benefit.icon} />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 border-t border-gray-100 bg-gray-50/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                quote:
                  "I had a pile of spam texts and bills I couldn't cover while my case played out. Call Cash advanced me money in two days. Total lifesaver.",
                name: "Maria R.",
                location: "Houston, TX",
              },
              {
                quote:
                  "The underwriting was fast and the whole thing was non-recourse, so there was no risk to me. Callie made it painless.",
                name: "James T.",
                location: "Atlanta, GA",
              },
              {
                quote:
                  "I didn't want to wait a year for my TCPA case to settle. Call Cash got me an advance up front and I only repay if I win.",
                name: "Sarah K.",
                location: "Phoenix, AZ",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-2xl border border-gray-200 bg-white p-6"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-4 border-t border-gray-100 pt-4">
                  <div className="text-sm font-medium text-gray-900">{testimonial.name}</div>
                  <div className="text-xs text-gray-400">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-12 space-y-4">
            {[
              {
                q: "What is a TCPA cash advance?",
                a: "It's pre-settlement funding on a Telephone Consumer Protection Act case. If a company illegally spammed your phone, Call Cash can advance you money now against your potential recovery — up to $1,000 per violation, subject to underwriting.",
              },
              {
                q: "How much can I get?",
                a: "After underwriting, you may qualify for up to $1,000 per violation. The total depends on how many illegal messages you received and the strength of your case. It's an estimate, not a guaranteed amount.",
              },
              {
                q: "How fast is funding?",
                a: "Our underwriting team typically makes a funding decision within 48 hours. Once approved, we work to get your cash to you quickly.",
              },
              {
                q: "What if my case doesn't win?",
                a: "Our advances are non-recourse. If your case doesn't result in a recovery, you owe us nothing — there's zero risk to you.",
              },
              {
                q: "Is this a loan?",
                a: "No. A cash advance is not a loan. There's no credit check and no monthly payments. It's repaid only out of a successful recovery on your case.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-gray-200 bg-white transition-colors open:border-blue-200"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-sm font-medium text-gray-900">
                  {faq.q}
                  <svg className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="border-t border-gray-100 px-6 py-4 text-sm leading-relaxed text-gray-500">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 border-t border-gray-100 bg-gradient-to-b from-gray-50/50 to-white py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Need Cash Now? Don&apos;t Wait to Settle.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            Chat with Callie to find out what advance you could qualify for on your TCPA case. It&apos;s fast, free, and comes with zero obligation.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={openChat}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:shadow-blue-600/40 hover:brightness-110 cursor-pointer"
            >
              Chat with Callie
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <a
              href="tel:+19543200708"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-8 py-3.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (954) 320-0708
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-100 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <span className="text-sm font-semibold text-gray-900">Call Cash</span>
            <a href="tel:+19543200708" className="text-sm text-gray-500 hover:text-gray-700">(954) 320-0708</a>
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} Call Cash. All rights reserved. This is not a loan. Cash advances are non-recourse and subject to underwriting. Estimates are not a guarantee of funding.
            </p>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <CallCashChatbot isOpen={chatOpen} setIsOpen={setChatOpen} />
    </div>
  );
}
