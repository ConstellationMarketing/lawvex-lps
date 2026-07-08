import React from "react";
export const AboutUsSection = (): JSX.Element => {
  return (
    <section id="about-us" className="w-full bg-lawvex-light pt-6 md:pt-8 pb-12 md:pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-lawvex-dark text-3xl md:text-4xl font-bold text-center mb-12">
          Experienced Estate Planning for All California Residents without Hourly Billing Confusion
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
              We believe you deserve speed, clarity, and legally enforceable execution without the "hourly mystery" of traditional firms. Whether you are in Clovis, Madera, Solvang, Santa Barbara, or anywhere in California, our team of 7 dedicated attorneys is focused on one thing: providing the professional support you need to secure your legacy.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
