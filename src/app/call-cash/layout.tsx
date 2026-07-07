import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Call Cash | Cash Advances on Your TCPA Case",
  description:
    "Have a TCPA case from spam texts or robocalls? Call Cash gets you a pre-settlement cash advance — up to $1,000 per violation after underwriting, with funding decisions in 48 hours. Non-recourse: you only pay it back if your case wins.",
  keywords: [
    "TCPA cash advance",
    "pre-settlement funding TCPA",
    "lawsuit cash advance",
    "spam text lawsuit funding",
    "robocall settlement advance",
    "Call Cash",
  ],
};

export default function CallCashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
