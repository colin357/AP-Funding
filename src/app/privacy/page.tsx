import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { getPrivacyContent, LAST_UPDATED, type BrandConfig } from "@/lib/legalContent";

const cfg: BrandConfig = {
  brand: "Olivia Advances",
  phone: "(954) 320-0708",
  phoneHref: "tel:+19543200708",
  homeHref: "/",
  kind: "funding",
  matter: "your cash advance request",
};

export const metadata: Metadata = {
  title: "Privacy Policy | Olivia Advances",
};

export default function PrivacyPage() {
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
