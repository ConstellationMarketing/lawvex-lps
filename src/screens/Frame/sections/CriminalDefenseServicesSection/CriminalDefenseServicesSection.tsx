import React from "react";

export const CriminalDefenseServicesSection = (): JSX.Element => {
  const practiceAreas = [
    { title: "Estate Planning", icon: "→" },
    { title: "Probate Administration", icon: "→" },
    { title: "Trust Administration", icon: "→" },
    { title: "Asset Protection", icon: "→" },
  ];

  return (
    <section id="practice-areas" className="w-full bg-lawvex-light py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-lawvex-dark text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Estate & Trust Services
          </h2>
          <p className="font-body text-lawvex-dark/70 text-base max-w-3xl mx-auto mb-8">
            From planning your future to managing complex probate matters, Lawvex provides comprehensive legal services tailored to your family's unique needs.
          </p>
          <h3 className="font-heading text-lawvex-dark text-2xl font-bold">
            Services We Provide
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white border border-lawvex-gray rounded-lg py-4 px-6"
            >
              <span className="font-body text-lawvex-dark text-base font-medium">{area.title}</span>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-lawvex-accent rounded-lg p-12 text-center">
          <h3 className="font-heading text-lawvex-dark text-2xl md:text-3xl font-bold mb-6">
            Ready to Protect Your Legacy?
          </h3>

          <a
            href="tel:5594186587"
            className="inline-block font-heading text-lawvex-dark text-2xl md:text-3xl font-semibold hover:opacity-80 transition-opacity mb-8"
          >
            (559) 418-6587
          </a>

          <div className="flex flex-col items-center gap-4">
            <a
              href="tel:5594186587"
              className="bg-lawvex-dark hover:bg-lawvex-dark/90 text-white font-inter font-medium text-sm px-8 py-3 rounded-full transition-all duration-150 uppercase tracking-[2px] inline-block"
            >
              Request Your Fee Quote
            </a>

            <p className="font-body text-lawvex-dark text-base">
              Speak with our experienced estate planning attorneys today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
