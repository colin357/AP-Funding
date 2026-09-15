import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Call Cash | Cash Advances for Meta Glasses Privacy Claims",
  description:
    "Own Meta smart glasses? There is an arbitration underway over the glasses recording personal video and audio. Call Cash advances up to $300 on your claim after underwriting. Non-recourse: you only pay it back if your claim recovers.",
  keywords: [
    "Meta glasses cash advance",
    "Meta glasses arbitration",
    "Ray-Ban Meta privacy claim",
    "smart glasses privacy lawsuit advance",
    "pre-settlement funding arbitration",
    "Call Cash",
  ],
};

export default function MetaGlassesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
