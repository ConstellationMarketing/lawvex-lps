import React from "react";

export const CallToActionMainSectionMeta = (): JSX.Element => {
  return (
    <section className="w-full bg-lawvex-accent py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="font-heading text-white text-3xl md:text-4xl font-bold mb-6">
          Protect Your Family's Legacy Today
        </h2>
        <p className="font-body text-white text-lg mb-8 max-w-2xl mx-auto">
          Don't delay estate planning or probate matters. Contact our experienced attorneys today to discuss your needs and receive a fee quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:5592495237"
            className="bg-lawvex-dark text-white font-body font-semibold px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all"
          >
            Call Now: (559) 249-5237
          </a>
          <button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-lawvex-dark border-2 border-lawvex-dark font-body font-semibold px-8 py-4 rounded-lg hover:bg-lawvex-dark hover:text-white transition-all"
          >
            Request Free Quote
          </button>
        </div>
      </div>
    </section>
  );
};
