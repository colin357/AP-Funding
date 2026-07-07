import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { getTermsContent, LAST_UPDATED, type BrandConfig } from "@/lib/legalContent";

const cfg: BrandConfig = {
  brand: "Olivia Advances",
  phone: "(954) 320-0708",
  phoneHref: "tel:+19543200708",
  homeHref: "/",
  kind: "funding",
  matter: "your cash advance request",
};

export const metadata: Metadata = {
  title: "Terms & Conditions | Olivia Advances",
};

export default function TermsPage() {
  const { intro, sections } = getTermsContent(cfg);
  return (
    <LegalPage
      brand={cfg.brand}
      phone={cfg.phone}
      phoneHref={cfg.phoneHref}
      homeHref={cfg.homeHref}
      docTitle="Terms & Conditions"
      lastUpdated={LAST_UPDATED}
      intro={intro}
      sections={sections}
    />
  );
}
