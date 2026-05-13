import React from "react";
import { CheckCircle } from "lucide-react";

export const AboutUsSection = (): JSX.Element => {
  const highlights = [
    "Combined 110 Years Of Legal Practice",
    "400+ estate plans managed annually",
    "Probate & trust administration",
    "Speed, efficiency & transparency",
    "5,000+ Estate planning & trust administration matters completed"
  ];

  return (
    <section id="about-us" className="w-full bg-lawvex-light pt-6 md:pt-8 pb-12 md:pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-lawvex-dark text-3xl md:text-4xl font-bold text-center mb-12">
          Experienced Estate Planning Without Hourly Billing Confusion
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
          {/* Image Column */}
          <div className="w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F69251c209ca14fafadd9fd4265a25160?format=webp&width=800&height=1200"
              alt="Lawvex Team"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Text Column */}
          <div className="flex flex-col space-y-6">
            <p className="font-body text-lawvex-dark text-base leading-relaxed">
              Lawvex is not your typical law firm. We carry over 110 years of combined practice and have successfully completed over 5,000 matters for clients across California. We took that massive foundation of experience and used it to redefine the legal experience for the modern age.
            </p>

            <p className="font-body text-lawvex-dark text-base leading-relaxed">
              We believe you deserve speed, clarity, and legally enforceable execution without the "hourly mystery" of traditional firms. Whether you are in Clovis, Madera, or working with us remotely from anywhere in the state, our team of 7 dedicated attorneys is focused on one thing: providing the professional support you need to secure your legacy.
            </p>
          </div>
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
                <CheckCircle className="w-10 h-10 text-white mb-3" />
                <p className="font-body text-white text-sm font-medium leading-relaxed">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
