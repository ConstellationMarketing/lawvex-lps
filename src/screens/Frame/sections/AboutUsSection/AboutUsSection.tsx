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
              Lawvex is a California-based law firm redefined by three core values: Speed, Efficiency, and Transparency. With over 20 years of experience, our team has helped thousands of families throughout the Central Valley navigate the complexities of estate law and probate.
            </p>

            <p className="font-body text-lawvex-dark text-base leading-relaxed">
              Our approach is different. We have moved away from the "hourly mystery" of traditional legal services. By creating over 400 estate plans every year, we have developed a mature, technology-driven process that ensures your legal matters are handled with precision without the traditional wait times.
            </p>

            <p className="font-body text-lawvex-dark text-base leading-relaxed">
              Located in Clovis, we serve families and individuals throughout Fresno, Madera, and San Luis Obispo Counties. When your family's legacy, your home, or your livelihood is at stake, our experienced team provides the skilled representation you need to move forward.
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
