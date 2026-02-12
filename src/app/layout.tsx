import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olivia Advances | Car Accident Cash Advances",
  description:
    "Get fast cash advances for your car accident case. No credit check, no monthly payments. Receive $500 to $25,000 within 24 hours.",
  keywords: [
    "car accident cash advance",
    "pre-settlement cash advance",
    "accident cash advance",
    "legal cash advance",
    "Olivia Advances",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
