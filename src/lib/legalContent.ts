import type { LegalSection } from "@/components/LegalPage";

export interface BrandConfig {
  brand: string;
  phone: string;
  phoneHref: string;
  homeHref: string;
  // "lawfirm" = provides legal services; "funding" = provides cash advances;
  // "leadgen" = connects people with attorneys / funding.
  kind: "lawfirm" | "funding";
  // Short description of what the client is seeking (used in copy).
  matter: string; // e.g. "your TCPA claim", "your case", "a cash advance"
}

export const LAST_UPDATED = "July 7, 2026";

export function getPrivacyContent(cfg: BrandConfig): {
  intro: string[];
  sections: LegalSection[];
} {
  const shareBullets =
    cfg.kind === "lawfirm"
      ? [
          "With the attorneys and staff of our firm who review and handle your matter.",
          "With service providers that help us operate our website and communicate with you, such as hosting, analytics, and text/email messaging providers.",
          "With co-counsel or other professionals where appropriate to evaluate or pursue your matter.",
          "When required by law, subpoena, or to protect our legal rights.",
        ]
      : [
          "With law firms, attorneys, and funding partners who may evaluate, underwrite, or pursue your case.",
          "With service providers that help us operate our website and communicate with you, such as hosting, analytics, and text/email messaging providers.",
          "With affiliates and business partners involved in providing the services you requested.",
          "When required by law, subpoena, or to protect our legal rights.",
        ];

  return {
    intro: [
      `${cfg.brand} ("we," "us," or "our") respects your privacy. This Privacy Policy explains what information we collect through our website and services, how we use it, and the choices you have.`,
      `By using our website or submitting your information to us, you agree to the practices described in this Privacy Policy.`,
    ],
    sections: [
      {
        heading: "Information We Collect",
        body: [
          "We collect information you provide directly to us, including through our on-site chat assistant and any forms or phone calls. This may include:",
        ],
        bullets: [
          "Contact details such as your name, email address, and phone number.",
          "Details about your situation that you choose to share, such as the phone number that received messages, how long you have had it, your city/state/county, the company involved, the time frame and estimated number of messages, and related facts.",
          "Information collected automatically when you visit our site, such as IP address, device and browser type, pages viewed, and interactions, using cookies and similar technologies.",
        ],
      },
      {
        heading: "How We Use Your Information",
        bullets: [
          `To evaluate and follow up on ${cfg.matter}.`,
          "To contact you by phone call, text message, and email in response to your inquiry.",
          "To provide, maintain, and improve our website and services.",
          "To measure and improve our advertising and marketing.",
          "To comply with legal obligations and enforce our terms.",
        ],
      },
      {
        heading: "How We Share Your Information",
        body: ["We do not sell your personal information. We may share it:"],
        bullets: shareBullets,
      },
      {
        heading: "Text Messaging and Calls",
        body: [
          "If you provide your phone number, you consent to receive calls and text messages from us and our partners regarding your inquiry, including through automated technology. Consent is not a condition of any purchase or service. Message and data rates may apply, and message frequency varies. You can opt out of text messages at any time by replying STOP, or ask us to stop calling by telling our representative.",
        ],
      },
      {
        heading: "Cookies and Tracking Technologies",
        body: [
          "We and third parties use cookies, web beacons, and similar technologies to operate our site, remember your preferences, and measure the performance of our advertising. This site uses the Meta (Facebook) Pixel to understand how visitors interact with our ads and pages. You can control cookies through your browser settings, though some features may not function properly if you disable them.",
        ],
      },
      {
        heading: "Data Retention",
        body: [
          "We retain your information for as long as needed to provide our services, follow up on your inquiry, comply with our legal obligations, resolve disputes, and enforce our agreements.",
        ],
      },
      {
        heading: "Your Choices and Rights",
        body: [
          "Depending on where you live, you may have the right to access, correct, or delete the personal information we hold about you, and to opt out of certain uses. To make a request, contact us using the information below. You may also opt out of marketing communications at any time.",
        ],
      },
      {
        heading: "Children's Privacy",
        body: [
          "Our website and services are intended for adults 18 and older. We do not knowingly collect personal information from children.",
        ],
      },
      {
        heading: "Changes to This Policy",
        body: [
          "We may update this Privacy Policy from time to time. When we do, we will revise the “Last updated” date above. Your continued use of our website after changes are posted constitutes your acceptance of the updated policy.",
        ],
      },
      {
        heading: "Contact Us",
        body: [
          `If you have questions about this Privacy Policy or how we handle your information, contact ${cfg.brand} at ${cfg.phone}.`,
        ],
      },
    ],
  };
}

export function getTermsContent(cfg: BrandConfig): {
  intro: string[];
  sections: LegalSection[];
} {
  const aboutSection: LegalSection =
    cfg.kind === "lawfirm"
      ? {
          heading: "About Our Services",
          body: [
            `${cfg.brand} is a law firm that assists individuals with claims under the Telephone Consumer Protection Act (TCPA) and related matters. The information on this website is provided for general informational purposes and does not constitute legal advice.`,
          ],
        }
      : {
          heading: "About Our Services",
          body: [
            `${cfg.brand} offers non-recourse cash advances (also called pre-settlement funding) on eligible legal claims. A cash advance is not a loan. All advances are subject to review and underwriting, and approval and amounts are not guaranteed.`,
            `${cfg.brand} is not a law firm and does not provide legal advice or legal representation. Nothing on this website should be interpreted as legal advice.`,
          ],
        };

  const relationshipSection: LegalSection =
    cfg.kind === "lawfirm"
      ? {
          heading: "No Attorney-Client Relationship",
          body: [
            "Submitting information through this website or our chat assistant does not create an attorney-client relationship. An attorney-client relationship is formed only when you and the firm sign a written representation agreement. Please do not send confidential or time-sensitive information until such a relationship has been established.",
            "This website may be considered attorney advertising in some jurisdictions. Prior results do not guarantee a similar outcome.",
          ],
        }
      : {
          heading: "Not Legal Advice",
          body: [
            "We are not a law firm and do not provide legal advice. The estimates, tools, and information on this website are for general informational purposes only and are not a substitute for advice from a licensed attorney. You are encouraged to consult an attorney about your legal rights.",
          ],
        };

  const noGuaranteeSection: LegalSection = {
    heading: "Estimates and No Guarantee of Outcome",
    body: [
      cfg.kind === "funding"
        ? "Any figures generated by our chat assistant or shown on this site are illustrative estimates only, based on the information you provide. They are not offers of funding, and final advance amounts are determined only after underwriting. Approval, timing, and amounts are not guaranteed."
        : "Any figures generated by our chat assistant or shown on this site are illustrative estimates only, based on the information you provide. They are not a promise, guarantee, or prediction of any recovery. The value and outcome of any claim depend on facts and circumstances that vary case by case.",
    ],
  };

  const consentSection: LegalSection = {
    heading: "Consent to Be Contacted",
    body: [
      "By submitting your information, you authorize us and our partners to contact you at the phone number and email address you provide, including by phone call, text message, and prerecorded or automated means, regarding your inquiry. Consent is not a condition of any purchase or service. Message and data rates may apply. You may opt out of text messages at any time by replying STOP.",
    ],
  };

  return {
    intro: [
      `These Terms and Conditions ("Terms") govern your access to and use of the ${cfg.brand} website and services. By using this website or submitting your information, you agree to these Terms. If you do not agree, please do not use the site.`,
    ],
    sections: [
      aboutSection,
      relationshipSection,
      noGuaranteeSection,
      {
        heading: "Eligibility",
        body: [
          "You must be at least 18 years old and a resident of the United States to use our services. By using this website, you represent that you meet these requirements.",
        ],
      },
      consentSection,
      {
        heading: "Accuracy of Information",
        body: [
          "You agree that the information you provide to us is true, accurate, and complete to the best of your knowledge. Providing false or misleading information may result in denial of services.",
        ],
      },
      {
        heading: "Intellectual Property",
        body: [
          `All content on this website, including text, graphics, logos, and design, is owned by or licensed to ${cfg.brand} and is protected by applicable intellectual property laws. You may not reproduce or distribute it without our permission.`,
        ],
      },
      {
        heading: "Disclaimers",
        body: [
          'This website and its content are provided "as is" and "as available" without warranties of any kind, whether express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the site will be uninterrupted, error-free, or secure.',
        ],
      },
      {
        heading: "Limitation of Liability",
        body: [
          `To the fullest extent permitted by law, ${cfg.brand} and its owners, employees, and partners will not be liable for any indirect, incidental, consequential, or punitive damages arising out of or related to your use of this website or our services.`,
        ],
      },
      {
        heading: "Governing Law",
        body: [
          "These Terms are governed by the laws of the State of Florida, without regard to its conflict-of-laws principles. Any dispute arising under these Terms will be subject to the exclusive jurisdiction of the state and federal courts located in Florida.",
        ],
      },
      {
        heading: "Changes to These Terms",
        body: [
          "We may update these Terms from time to time. When we do, we will revise the “Last updated” date above. Your continued use of the website after changes are posted constitutes your acceptance of the updated Terms.",
        ],
      },
      {
        heading: "Contact Us",
        body: [
          `If you have questions about these Terms, contact ${cfg.brand} at ${cfg.phone}.`,
        ],
      },
    ],
  };
}
