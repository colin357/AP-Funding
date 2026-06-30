import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Olivia Claims | Get Paid for Spam Texts & Robocalls (TCPA)",
  description:
    "Getting spam texts or robocalls from a company you never agreed to hear from? Under the TCPA you may be owed up to $500 to $1,500 per message — amounts vary by case and aren't guaranteed. Find out what your claim could be worth — free, no obligation.",
  keywords: [
    "TCPA claim",
    "spam text lawsuit",
    "robocall compensation",
    "Do Not Call Registry violation",
    "unwanted text messages settlement",
    "Olivia Claims",
  ],
};

export default function TcpaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
