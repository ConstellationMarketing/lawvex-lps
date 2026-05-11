import React from "react";

export const AttorneySection = (): JSX.Element => {
  return (
    <section className="w-full bg-lawvex-gray py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-lawvex-dark text-3xl md:text-4xl font-bold text-center mb-12">
          Meet the Lawvex Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="w-full flex items-center justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F76feb3b6af274c2390752223771364dc?format=webp&width=800&height=1200"
              alt="Lawvex Team"
              className="w-full max-w-sm h-auto object-contain rounded-lg"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <p className="font-body text-lawvex-dark text-base leading-relaxed">
              Lawvex is led by a team of accomplished professionals focusing on estate planning, probate, and trust administration. Our firm is recognized for its innovative "Law Firm Redefined" model, which prioritizes client value and technological efficiency.
            </p>

            <p className="font-body text-lawvex-dark text-base leading-relaxed">
              Our team brings a deep understanding of California probate codes and local court procedures to every case. We focus on a solution-oriented approach, ensuring that your estate plan or administration is handled correctly the first time.
            </p>

            <p className="font-body text-lawvex-dark text-base leading-relaxed">
              We utilize a mature intake process that allows us to provide clients with a clear fee quote before they schedule a 30-minute attorney consultation. This ensures that you have all the information you need to make an informed decision about your legal future.
            </p>

            <div className="pt-4">
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-lawvex-accent hover:bg-lawvex-accent/80 text-lawvex-dark font-inter font-medium text-sm px-8 py-3 rounded-full border border-lawvex-accent transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap inline-block"
              >
                Get Started with a Fee Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
