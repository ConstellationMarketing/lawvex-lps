import React from "react";
import { CheckCircle } from "lucide-react";

export const WhyChooseUsSection = (): JSX.Element => {
  const highlights = [
    "Legal matters regarding death or incapacity are stressful. We understand the financial and emotional pressure these situations bring, and we are here to provide professional guidance before you face the court alone.",
    "Our firm focuses on effectively representing your interests in local courts and through private administration. We strive to pursue the best possible outcome for each client, whether that means avoiding the 12-to-24-month probate process or ensuring a trust is distributed correctly to heirs.",
    "With 20 years of experience in California, our team brings a comprehensive understanding of the legal landscape. We maintain clear communication throughout your case, ensuring you understand the legal process, timelines, and potential outcomes every step of the way."
  ];

  return (
    <section className="w-full bg-lawvex-light pt-12 md:pt-20 pb-12 md:pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-heading text-lawvex-dark text-3xl md:text-4xl font-bold text-center mb-3">
          Why Us
        </h2>
        <p className="font-body text-lawvex-dark/70 text-center text-lg mb-8 max-w-3xl mx-auto">
          Over 20 years of experience protecting your family and your assets.
        </p>

        <h3 className="font-heading text-lawvex-dark text-2xl font-bold text-center mb-8">
          Our Approach
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-lawvex-accent rounded-lg p-8 flex flex-col items-center text-center"
            >
              <CheckCircle className="w-10 h-10 text-lawvex-dark mb-4" />
              <p className="font-body text-lawvex-dark text-sm leading-relaxed">
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
