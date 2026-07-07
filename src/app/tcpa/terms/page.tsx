import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { getTermsContent, LAST_UPDATED, type BrandConfig } from "@/lib/legalContent";

const cfg: BrandConfig = {
  brand: "Lindner Law Firm",
  phone: "(954) 320-0708",
  phoneHref: "tel:+19543200708",
  homeHref: "/tcpa",
  kind: "lawfirm",
  matter: "your TCPA claim",
  governingState: "Pennsylvania",
};

export const metadata: Metadata = {
  title: "Terms & Conditions | Lindner Law Firm",
};

export default function TcpaTermsPage() {
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
