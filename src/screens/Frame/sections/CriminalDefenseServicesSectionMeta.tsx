import React from "react";

export const CriminalDefenseServicesSectionMeta = (): JSX.Element => {
  const practiceAreas = [
    { title: "Estate Planning", description: "Comprehensive Wills, Trusts, and Powers of Attorney." },
    { title: "Probate", description: "Efficiently navigating the court process to settle a loved one's estate." },
    { title: "Trust Administration", description: "Clear guidance for Successor Trustees to manage legal duties." },
    { title: "Asset Protection", description: "Strategic planning for homeowners and business owners in the Central Valley." },
  ];

  return (
    <section id="practice-areas" className="w-full bg-lawvex-gray py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-lawvex-dark text-3xl md:text-4xl font-bold mb-4">
            Strategic Legal Support for Your Family & Assets
          </h2>
          <p className="font-body text-lawvex-dark/70 text-base max-w-3xl mx-auto mb-8">
            We understand that legal matters involving family and inheritance are time-sensitive and personal. Our team provides diligent representation to help you avoid court delays and protect your livelihood.
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
              <p className="font-body text-lawvex-dark/80 text-sm leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-lawvex-accent rounded-lg p-12 text-center">
          <h3 className="font-heading text-lawvex-dark text-2xl md:text-3xl font-bold mb-6">
            Ready to Protect Your Legacy?
          </h3>

          <a
            href="tel:5592495237"
            className="inline-block font-heading text-lawvex-dark text-2xl md:text-3xl font-semibold hover:opacity-80 transition-opacity mb-8"
          >
            (559) 249-5237
          </a>

          <div className="flex flex-col items-center gap-4">
            <a
              href="tel:5592495237"
              className="bg-lawvex-dark hover:bg-lawvex-dark/90 text-white font-inter font-medium text-sm px-8 py-3 rounded-full transition-all duration-150 uppercase tracking-[2px] inline-block"
            >
              Request Your Fee Quote
            </a>

            <div className="font-body text-lawvex-dark text-base space-y-2">
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
