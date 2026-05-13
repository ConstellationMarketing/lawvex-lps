import React from "react";

export const WhyChooseUsSection = (): JSX.Element => {
  const paragraphs = [
    "Legal matters regarding death or incapacity are stressful. We understand the financial and emotional pressure these situations bring, and we are here to provide professional guidance before you face the court alone.",
    "Our firm focuses on effectively representing your interests in local courts and through private administration. We strive to pursue the best possible outcome for each client, whether that means avoiding the 12-to-24-month probate process or ensuring a trust is distributed correctly to heirs.",
    "With combined 110 years of experience in California, our team brings a comprehensive understanding of the legal landscape. We maintain clear communication throughout your case, ensuring you understand the legal process, timelines, and potential outcomes every step of the way."
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
