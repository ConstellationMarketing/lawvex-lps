import React from "react";

export const WhyChooseUsSection = (): JSX.Element => {
  const paragraphs = [
    "You Get Help From a Team That Does This Every Day: We bring institutional-level experience to individual families, backed by 5,000+ matters completed and 110+ collective years of legal practice.",
    "You Can Handle the Process Remotely: Serving all of California since 2009 with a proven virtual-first model. Our process is handled via secure video conference for your convenience.",
    "You Know the Cost Before You Start: We provide upfront, flat-fee quotes based on the complexity of your estate. You know your costs before the work begins.",
    "You Work With an Attorney-Led Team: Every plan is attorney-led, fully customized, and built to work when you need it most, ensuring your assets are protected and your wishes are secured."
  ];

  return (
    <section className="w-full bg-lawvex-light pt-12 md:pt-20 pb-12 md:pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-heading text-lawvex-dark text-3xl md:text-4xl font-bold text-center mb-3">
          Why Families Choose Lawvex for Estate Planning and Probate
        </h2>
        <p className="font-body text-lawvex-dark/70 text-center text-lg mb-12 max-w-3xl mx-auto">
          Combined 110 years of experience protecting your family and your assets.
        </p>

        <div className="max-w-3xl mx-auto space-y-6 text-center">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="font-body text-lawvex-dark text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
