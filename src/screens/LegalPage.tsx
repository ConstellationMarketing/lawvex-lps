import React from "react";

type LegalSection = {
  title?: string;
  paragraphs?: React.ReactNode[];
  items?: React.ReactNode[];
};

type LegalPageProps = {
  title: string;
  description?: string;
  sections: LegalSection[];
};

export const LegalPage = ({ title, description, sections }: LegalPageProps): JSX.Element => {
  return (
    <div className="min-h-screen bg-lawvex-light font-body text-lawvex-dark">
      <header className="bg-lawvex-dark py-6">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4">
          <a href="/" className="inline-flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F85a24e56361d4bb18447aa5f15703e59?format=webp&width=800&height=1200"
              alt="Lawvex Logo"
              className="h-10 w-auto object-contain"
            />
          </a>
          <a
            href="/"
            className="rounded-xl border-2 border-lawvex-accent px-4 py-2 text-sm font-semibold text-lawvex-accent transition hover:bg-lawvex-accent hover:text-white"
          >
            Back to Home
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        <div className="rounded-2xl bg-white p-6 shadow-md md:p-10">
          <h1 className="mb-4 font-heading text-4xl font-bold text-lawvex-dark md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mb-10 text-lg leading-8 text-[#555555]">{description}</p>
          )}

          <div className="space-y-10">
            {sections.map((section, index) => (
              <section key={section.title || index} className="space-y-4">
                {section.title && (
                  <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-lawvex-dark">
                    {section.title}
                  </h2>
                )}
                {section.paragraphs?.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex} className="text-base leading-8 text-[#555555]">
                    {paragraph}
                  </p>
                ))}
                {section.items && (
                  <ul className="list-disc space-y-3 pl-6 text-base leading-8 text-[#555555]">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
