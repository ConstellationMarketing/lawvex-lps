import React from "react";

export const CriminalDefenseServicesSectionMeta = (): JSX.Element => {
  const practiceAreas = [
    { title: "Remote Estate Planning", description: "Wills, trusts, powers of attorney, healthcare directives, and planning for minor children." },
    { title: "Probate Assistance", description: "Help for executors when a loved one passed away with assets that need court administration." },
    { title: "Trust Administration", description: "Guidance for trustees who need to manage assets, notify beneficiaries, pay expenses, and distribute property." },
    { title: "Asset Protection", description: "Planning for homeowners, business owners, and families with more complex assets." },
  ];

  return (
    <section id="practice-areas" className="w-full bg-lawvex-gray py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-lawvex-dark text-3xl md:text-4xl font-bold mb-4">
            Estate, Trust, and Probate Services We Handle
          </h2>
          <p className="font-body text-lawvex-dark/70 text-base max-w-3xl mx-auto mb-8">
            Our team provides diligent representation across our core areas, utilizing over 110 years of combined experience to protect your assets and your loved ones.
          </p>
          <h3 className="font-heading text-lawvex-dark text-2xl font-bold">
            Services We Provide:
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white border border-lawvex-gray rounded-lg py-6 px-6"
            >
              <h4 className="font-heading text-lawvex-dark text-lg font-bold mb-2">{area.title}:</h4>
              <p className="font-body text-lawvex-dark text-sm leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-lawvex-accent rounded-lg p-12 text-center">
          <h3 className="font-heading text-white text-2xl md:text-3xl font-bold mb-6">
            Ready to Protect Your Legacy?
          </h3>

          <a
            href="tel:5592495237"
            className="inline-block font-heading text-white text-2xl md:text-3xl font-semibold hover:opacity-80 transition-opacity mb-8"
          >
            (559) 249-5237
          </a>

          <div className="flex flex-col items-center gap-4">
            <a
              href="tel:5592495237"
              className="bg-white hover:bg-gray-100 text-lawvex-dark font-inter font-medium text-sm px-8 py-3 rounded-full transition-all duration-150 uppercase tracking-[2px] inline-block"
            >
              Request Your Fee Quote
            </a>

            <div className="font-body text-white text-base space-y-2">
              <p>
                <strong>Request a Professional Fee Quote Today 559-249-5237</strong> <em>Speak directly with our intake team to get a transparent pricing estimate for your specific case.</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
