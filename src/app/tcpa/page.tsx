"use client";

import { useState } from "react";
import TcpaChatbot from "@/components/TcpaChatbot";

export default function TcpaHome() {
  const [chatOpen, setChatOpen] = useState(false);

  const openChat = () => setChatOpen(true);

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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/lindner-law-group.svg"
            alt="Lindner Law Group"
            className="h-10 w-auto"
          />
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
            className="rounded-full bg-green-600 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-green-500 hover:shadow-lg hover:shadow-green-600/25 cursor-pointer"
          >
            Check Your Claim
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-32 lg:pt-32 lg:pb-40">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm text-green-600">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Up to $1,500 Possible Per Illegal Text or Robocall
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Get Paid for{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Spam Texts
              </span>{" "}
              &amp; Robocalls
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-500">
              If a company keeps blowing up your phone with texts or calls you
              never agreed to, the law is on your side. Under the TCPA you may be
              owed up to $500 to $1,500 for every illegal message — actual amounts
              vary by case and aren&apos;t guaranteed, and we only get paid if you do.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={openChat}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-green-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-600/25 transition-all hover:shadow-green-600/40 hover:brightness-110 cursor-pointer"
              >
                See What Your Claim Is Worth
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
                <div className="text-2xl font-bold text-gray-900">Up to $1,500</div>
                <div className="text-xs text-gray-400">Possible Per Message</div>
              </div>
              <div className="h-8 w-px bg-gray-200" />
              <div>
                <div className="text-2xl font-bold text-gray-900">$0</div>
                <div className="text-xs text-gray-400">Upfront Cost to You</div>
              </div>
              <div className="h-8 w-px bg-gray-200" />
              <div>
                <div className="text-2xl font-bold text-gray-900">2 min</div>
                <div className="text-xs text-gray-400">To Check Your Claim</div>
              </div>
            </div>
          </div>

          {/* Hero visual — abstract card */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-100 to-emerald-100 blur-xl" />
              <div className="relative rounded-3xl border border-gray-200 bg-white/90 p-8 backdrop-blur-xl shadow-lg">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-700">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-400">Potential Claim Value</div>
                    <div className="text-2xl font-bold text-gray-900">$500 — $1,500 / msg</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3">
                    <span className="text-sm text-gray-500">Cost to Start</span>
                    <span className="text-sm font-semibold text-green-600">$0</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3">
                    <span className="text-sm text-gray-500">Credit Check</span>
                    <span className="text-sm font-semibold text-green-600">None Required</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3">
                    <span className="text-sm text-gray-500">If We Don&apos;t Win</span>
                    <span className="text-sm font-semibold text-green-600">You Owe Nothing</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3">
                    <span className="text-sm text-gray-500">Time to Check</span>
                    <span className="text-sm font-semibold text-green-600">Under 2 Minutes</span>
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
              Turning those annoying spam messages into a payout is simple. Our streamlined process does the heavy lifting for you.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Chat with Olivia",
                description:
                  "Answer a few quick questions about the spam texts or calls you've been getting. It takes less than 2 minutes.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                ),
              },
              {
                step: "02",
                title: "Get Your Estimate",
                description:
                  "Receive an instant estimate of what your claim could be worth — potentially up to $500 to $1,500 for each illegal message, depending on your case.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                ),
              },
              {
                step: "03",
                title: "We Pursue Your Claim",
                description:
                  "Our team takes it from here — building your case and going after the company that wouldn't stop texting you.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
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
              Why Choose Lindner Law Group
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              We hold spammers accountable and put money back in your pocket — with zero risk to you.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "No Upfront Cost",
                description: "It costs nothing to start. We only get paid if you do — there's zero risk to you.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              {
                title: "Up to $1,500 Per Message",
                description: "The TCPA sets potential statutory damages of $500 to $1,500 for each illegal text or call you may recover — not guaranteed, but they can add up fast.",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "We Do the Work",
                description: "You just share the details. Our team builds the case and deals with the company for you.",
                icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
              },
              {
                title: "Stop the Spam",
                description: "Beyond compensation, pursuing a claim is one of the most effective ways to make it stop.",
                icon: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636",
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
                  "I was getting 5 spam texts a day from a company I'd never even heard of. Lindner Law Group got me a settlement I never expected. Took me two minutes to start.",
                name: "Maria R.",
                location: "Houston, TX",
              },
              {
                quote:
                  "I told them to stop and they kept texting. Turns out that made my case even stronger. The whole process was easy and cost me nothing.",
                name: "James T.",
                location: "Atlanta, GA",
              },
              {
                quote:
                  "I had no idea those robocalls were worth anything. Olivia walked me through it and her team handled everything from there.",
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
                q: "What is the TCPA?",
                a: "The Telephone Consumer Protection Act (TCPA) is a federal law that restricts unsolicited telemarketing texts, robocalls, and autodialed messages. Companies that violate it may owe $500 to $1,500 for each illegal message — though the exact amount, if any, depends on the specifics of your case and is never guaranteed.",
              },
              {
                q: "How much can my claim be worth?",
                a: "It depends on how many messages you received and the details of your situation. Each illegal message may be worth up to $500 to $1,500, so they can add up quickly — but this is a potential range, not a guaranteed payout. Chat with Olivia for an instant estimate.",
              },
              {
                q: "What do I need to qualify?",
                a: "Generally, you need to have received unwanted texts or calls from a company you didn't give clear permission to contact you. Screenshots of the messages and any 'STOP' requests you sent are especially helpful.",
              },
              {
                q: "What does it cost me?",
                a: "Nothing upfront. We work on a contingency basis, which means we only get paid if you do. If there's no recovery, you owe us nothing.",
              },
              {
                q: "Do I need to keep the messages?",
                a: "Yes — please don't delete them. Screenshots of the spam texts, the sender's number, and any replies asking them to stop are valuable evidence for your claim.",
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

      {/* CTA Section */}
      <section className="relative z-10 border-t border-gray-100 bg-gradient-to-b from-gray-50/50 to-white py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Tired of the Spam? Make Them Pay.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            Chat with Olivia now to find out what your TCPA claim could be worth. It&apos;s fast, free, and comes with zero obligation.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={openChat}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-green-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-600/25 transition-all hover:shadow-green-600/40 hover:brightness-110 cursor-pointer"
            >
              Chat with Olivia
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
            <span className="text-sm font-semibold text-gray-900">Lindner Law Group</span>
            <a href="tel:+19543200708" className="text-sm text-gray-500 hover:text-gray-700">(954) 320-0708</a>
            <div className="flex items-center gap-4">
              <a href="/tcpa/terms" className="text-xs text-gray-500 hover:text-gray-900">Terms &amp; Conditions</a>
              <a href="/tcpa/privacy" className="text-xs text-gray-500 hover:text-gray-900">Privacy Policy</a>
            </div>
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} Lindner Law Group. All rights reserved. This is attorney advertising and not legal advice. Estimates are not a guarantee of recovery.
            </p>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <TcpaChatbot isOpen={chatOpen} setIsOpen={setChatOpen} />
    </div>
  );
}
