import Link from "next/link";

export interface LegalSection {
  heading: string;
  body?: string[];
  bullets?: string[];
}

interface LegalPageProps {
  brand: string;
  phone: string;
  phoneHref: string;
  homeHref: string;
  docTitle: string;
  lastUpdated: string;
  intro: string[];
  sections: LegalSection[];
}

export default function LegalPage({
  brand,
  phone,
  phoneHref,
  homeHref,
  docTitle,
  lastUpdated,
  intro,
  sections,
}: LegalPageProps) {
  return (
    <div className="relative min-h-screen bg-background text-foreground grid-pattern">
      {/* Navigation */}
      <nav className="relative z-10 border-b border-border/50 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link
            href={homeHref}
            className="text-xl font-bold tracking-tight text-gray-900"
          >
            {brand}
          </Link>
          <Link
            href={homeHref}
            className="text-sm text-gray-500 transition-colors hover:text-gray-900"
          >
            &larr; Back to site
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="relative z-10 mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {docTitle}
        </h1>
        <p className="mt-3 text-sm text-gray-400">Last updated: {lastUpdated}</p>

        <div className="mt-8 space-y-4">
          {intro.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed text-gray-600">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-10 space-y-10">
          {sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-lg font-semibold text-gray-900">
                {i + 1}. {section.heading}
              </h2>
              <div className="mt-3 space-y-3">
                {section.body?.map((p, pi) => (
                  <p key={pi} className="text-sm leading-relaxed text-gray-600">
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-2 space-y-2">
                    {section.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        className="flex items-start gap-2 text-sm leading-relaxed text-gray-600"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-400" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-100 py-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-3 px-6 md:flex-row">
          <span className="text-sm font-semibold text-gray-900">{brand}</span>
          <a href={phoneHref} className="text-sm text-gray-500 hover:text-gray-700">
            {phone}
          </a>
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} {brand}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
