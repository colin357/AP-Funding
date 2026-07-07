import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { getPrivacyContent, LAST_UPDATED, type BrandConfig } from "@/lib/legalContent";

const cfg: BrandConfig = {
  brand: "Lindner Law Firm",
  phone: "(954) 320-0708",
  phoneHref: "tel:+19543200708",
  homeHref: "/tcpa",
  kind: "lawfirm",
  matter: "your TCPA claim",
};

export const metadata: Metadata = {
  title: "Privacy Policy | Lindner Law Firm",
};

export default function TcpaPrivacyPage() {
  const { intro, sections } = getPrivacyContent(cfg);
  return (
    <LegalPage
      brand={cfg.brand}
      phone={cfg.phone}
      phoneHref={cfg.phoneHref}
      homeHref={cfg.homeHref}
      docTitle="Privacy Policy"
      lastUpdated={LAST_UPDATED}
      intro={intro}
      sections={sections}
    />
  );
}
