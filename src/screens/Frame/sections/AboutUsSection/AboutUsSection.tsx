import React from "react";
import { CheckCircle } from "lucide-react";

export const AboutUsSection = (): JSX.Element => {
  const highlights = [
    "20+ years of experience",
    "400+ estate plans managed annually",
    "Probate & trust administration",
    "Speed, efficiency & transparency",
    "Central Valley serving"
  ];

  return (
    <section id="about-us" className="w-full bg-lawvex-light pt-6 md:pt-8 pb-12 md:pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-lawvex-dark text-3xl md:text-4xl font-bold text-center mb-12">
          About Lawvex
        </h2>

        <div className="flex flex-col items-center">
          <div className="w-full mb-12 max-w-4xl">
            <div className="w-full h-64 bg-lawvex-gray rounded-lg flex items-center justify-center">
              <span className="text-lawvex-dark/50 font-body">Logo & Team Image Placeholder</span>
            </div>
          </div>

          <div className="flex flex-col space-y-6 text-center max-w-3xl mb-12">
            <p className="font-body text-lawvex-dark text-base leading-relaxed">
              Lawvex is a California-based law firm specializing in estate planning, probate, and trust administration. With 20 years of experience, we help families throughout the Central Valley protect their assets and plan for their future with confidence.
            </p>

            <p className="font-body text-lawvex-dark text-base leading-relaxed">
              Our firm manages over 400 estate plans annually, combining deep legal expertise with streamlined processes to ensure clarity and efficiency. We understand that estate planning involves complex decisions, and we guide our clients through every step with transparency and care.
            </p>

            <p className="font-body text-lawvex-dark text-base leading-relaxed">
              Whether you're planning your estate, navigating the probate process, or managing trust administration, Lawvex is committed to protecting your family's legacy. Our attorneys combine technical expertise with a client-focused approach to deliver results you can trust.
            </p>

            <p className="font-body text-lawvex-dark text-base leading-relaxed">
              At Lawvex, we believe that Speed, Efficiency, and Transparency are the cornerstones of excellent legal service. Let us help you build a secure future for your family.
            </p>
          </div>

          <div className="w-full">
            <h3 className="font-heading text-lawvex-dark text-2xl font-bold text-center mb-8">
              Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-lawvex-accent rounded-lg p-6 flex flex-col items-center text-center"
                >
                  <CheckCircle className="w-10 h-10 text-lawvex-dark mb-3" />
                  <p className="font-body text-lawvex-dark text-sm font-medium leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
