import type { Metadata } from "next";
import Script from "next/script";

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
  return (
    <>
      {children}
      {/* Meta Pixel Code (Meta glasses campaign) */}
      <Script id="meta-pixel-meta-glasses" strategy="afterInteractive">{`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window,document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '720948125834211');
        fbq('trackSingle', '720948125834211', 'PageView');
      `}</Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=720948125834211&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
      {/* End Meta Pixel Code */}
    </>
  );
}
