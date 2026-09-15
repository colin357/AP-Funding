"use client";

import { useState } from "react";
import Link from "next/link";
import MetaGlassesChatbot, { META_GLASSES_MAX_ADVANCE } from "@/components/MetaGlassesChatbot";

const PhoneIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function MetaGlassesPage() {
  const [chatOpen, setChatOpen] = useState(false);
  const openChat = () => setChatOpen(true);
  const maxAdvance = `$${META_GLASSES_MAX_ADVANCE.toLocaleString()}`;

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground grid-pattern">
      {/* Ambient glow effects */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-green-500/8 blur-3xl animate-glow" />
        <div className="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-emerald-500/6 blur-3xl animate-glow" />
        <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-green-400/5 blur-3xl animate-glow" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-border/50 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-header.png" alt="Call Cash" className="h-12 w-auto" />
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#how-it-works" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
              How It Works
            </a>
            <a href="#the-case" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
              The Case
            </a>
            <a href="#faq" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
              FAQ
            </a>
            <Link href="/" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
              TCPA Advances
            </Link>
            <a href="tel:+19543200708" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
              (954) 320-0708
            </a>
          </div>
          <button
            onClick={openChat}
            className="rounded-full bg-green-600 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-green-500 hover:shadow-lg hover:shadow-green-600/25 cursor-pointer"
          >
            Get Your Advance
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-32 lg:pt-32 lg:pb-40">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm text-green-600">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Up to {maxAdvance} Advance — Arbitration Already Underway
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Own Meta Glasses?{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Get Cash Now
              </span>{" "}
              on Your Privacy Claim
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-500">
              A case is in advanced arbitration over Meta smart glasses recording
              people&apos;s personal video and audio. If you own a pair, you may
              have a claim. Call Cash advances you up to {maxAdvance} on it today,
              subject to underwriting. It&apos;s non-recourse, so you only pay
              it back if your claim recovers.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={openChat}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-green-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-600/25 transition-all hover:shadow-green-600/40 hover:brightness-110 cursor-pointer"
              >
                See If You Qualify
                <ArrowIcon />
              </button>
              <a
                href="tel:+19543200708"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-8 py-3.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
              >
                <PhoneIcon />
                Call Us: (954) 320-0708
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="text-2xl font-bold text-gray-900">Up to {maxAdvance}</div>
                <div className="text-xs text-gray-400">Per Claim</div>
              </div>
              <div className="h-8 w-px bg-gray-200" />
              <div>
                <div className="text-2xl font-bold text-gray-900">2 min</div>
                <div className="text-xs text-gray-400">To Apply</div>
              </div>
              <div className="h-8 w-px bg-gray-200" />
              <div>
                <div className="text-2xl font-bold text-gray-900">$0</div>
                <div className="text-xs text-gray-400">If Your Claim Loses</div>
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-100 to-emerald-100 blur-xl" />
              <div className="relative rounded-3xl border border-gray-200 bg-white/90 p-8 backdrop-blur-xl shadow-lg">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-700">
                    {/* Glasses icon */}
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 13a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0zm13 0a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0zM9 13h6M2 13l2-6h4m14 6l-2-6h-4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-400">Available Advance</div>
                    <div className="text-2xl font-bold text-gray-900">Up to {maxAdvance}</div>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    ["Credit Check", "None Required"],
                    ["Monthly Payments", "$0"],
                    ["If Your Claim Loses", "You Owe Nothing"],
                    ["Case Status", "Advanced Arbitration"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3">
                      <span className="text-sm text-gray-500">{label}</span>
                      <span className="text-sm font-semibold text-green-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Case */}
      <section id="the-case" className="relative z-10 border-t border-gray-100 bg-gray-50/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                What the Meta Glasses Case Is About
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Meta&apos;s smart glasses have a built-in camera and microphones.
                Claimants allege the glasses captured personal video and audio,
                of owners and of the people around them, in ways that raised
                serious privacy concerns. Those claims are now being pursued in
                arbitration, and the case has reached an advanced stage.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Arbitration can still take months to resolve. Call Cash lets you
                get some of that money now instead of waiting.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Who May Qualify",
                  description: "Anyone who bought or owns Meta smart glasses, including Ray-Ban Meta and Oakley Meta models.",
                  icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                },
                {
                  title: "The Privacy Issue",
                  description: "Claims center on the glasses recording personal video and audio without adequate notice or consent.",
                  icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
                },
                {
                  title: "Where It Stands",
                  description: "The matter is in advanced arbitration. A resolution is closer than it was, but money still isn't in your hands.",
                  icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
                },
                {
                  title: "Already Filed?",
                  description: "Great. Not yet? We can still review your situation and connect you with firms handling these claims.",
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-green-200 hover:shadow-md">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-green-50">
                    <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative z-10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How It Works</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Getting an advance on your Meta glasses claim takes a few minutes. No paperwork mountains, no credit check.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Chat with Callie",
                description: "Tell us which glasses you own, when you got them, and whether you've already filed. It takes under 2 minutes.",
                icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
              },
              {
                step: "02",
                title: "Quick Underwriting",
                description: `Our team confirms your claim details and makes a funding decision for up to ${maxAdvance}.`,
                icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
              },
              {
                step: "03",
                title: "Get Your Cash",
                description: "Once approved, your advance is sent to you. You only repay it out of a successful recovery on your claim.",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group relative rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-green-200 hover:shadow-md"
              >
                <div className="absolute -top-3 left-6 rounded-full bg-green-600 px-3 py-0.5 text-xs font-bold text-white">
                  {item.step}
                </div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600 transition-colors group-hover:bg-green-100">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
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
      <section id="benefits" className="relative z-10 border-t border-gray-100 bg-gray-50/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose Call Cash</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Fast money on your claim, with zero risk to you.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "No Credit Check",
                description: "Your credit score doesn't matter. Approval is based on your claim, not your finances.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              {
                title: `Up to ${maxAdvance}`,
                description: "Get money in hand now instead of waiting for the arbitration to fully resolve.",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "No Monthly Payments",
                description: "Nothing comes out of your pocket. The advance is repaid only from your recovery.",
                icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
              },
              {
                title: "Risk-Free",
                description: "Advances are non-recourse. If your claim doesn't recover, you owe us nothing.",
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-green-200 hover:shadow-md"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-green-50">
                  <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* FAQ */}
      <section id="faq" className="relative z-10 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-12 space-y-4">
            {[
              {
                q: "What is the Meta glasses case?",
                a: "It's an arbitration over Meta's smart glasses recording personal video and audio, raising privacy claims on behalf of glasses owners. The case is at an advanced stage of arbitration.",
              },
              {
                q: "Do I need to have already filed a claim?",
                a: "Owners who have already filed or signed with a law firm are the simplest to underwrite. If you haven't, we can still review your situation and connect you with firms handling these claims.",
              },
              {
                q: "How much can I get?",
                a: `Call Cash advances up to ${maxAdvance} per claim. The exact amount is decided after underwriting and is not guaranteed.`,
              },
              {
                q: "What if my claim doesn't recover?",
                a: "Our advances are non-recourse. If your claim doesn't result in a recovery, you owe us nothing.",
              },
              {
                q: "Is this a loan?",
                a: "No. A cash advance is not a loan. There's no credit check and no monthly payments. It's repaid only out of a successful recovery on your claim.",
              },
              {
                q: "Which glasses count?",
                a: "Meta smart glasses with a camera and microphones, including Ray-Ban Meta, Oakley Meta, and the earlier Ray-Ban Stories. If you're not sure which model you have, Callie can still take your details.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-gray-200 bg-white transition-colors open:border-green-200"
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

      {/* CTA */}
      <section className="relative z-10 border-t border-gray-100 bg-gradient-to-b from-gray-50/50 to-white py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Don&apos;t Wait on the Arbitration. Get Paid Now.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            Chat with Callie to see if you qualify for an advance of up to {maxAdvance} on your Meta glasses claim. It&apos;s fast, free, and comes with zero obligation.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={openChat}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-green-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-600/25 transition-all hover:shadow-green-600/40 hover:brightness-110 cursor-pointer"
            >
              Chat with Callie
              <ArrowIcon />
            </button>
            <a
              href="tel:+19543200708"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-8 py-3.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
            >
              <PhoneIcon />
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
            <div className="flex items-center gap-4">
              <a href="/meta-glasses/terms" className="text-xs text-gray-500 hover:text-gray-900">Terms &amp; Conditions</a>
              <a href="/meta-glasses/privacy" className="text-xs text-gray-500 hover:text-gray-900">Privacy Policy</a>
            </div>
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} Call Cash. All rights reserved. This is not a loan. Cash advances are non-recourse and subject to underwriting. Call Cash is not affiliated with Meta Platforms, Inc., Ray-Ban, or Oakley. Advance amounts are not a guarantee of funding.
            </p>
          </div>
        </div>
      </footer>

      <MetaGlassesChatbot isOpen={chatOpen} setIsOpen={setChatOpen} />
    </div>
  );
}
