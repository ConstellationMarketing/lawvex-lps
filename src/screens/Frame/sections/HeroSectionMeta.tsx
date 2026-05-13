import React from "react";

export const HeroSectionMeta = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[500px] bg-lawvex-dark pt-16">
      {/* Navigation Bar */}
      <div className="fixed inset-x-0 top-0 z-50 w-full border-b border-lawvex-gray/50 bg-white/80 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F85a24e56361d4bb18447aa5f15703e59?format=webp&width=800&height=1200"
              alt="Lawvex Logo"
              className="h-8 w-[120px] object-contain"
            />
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:5592495237"
              className="flex h-10 items-center justify-center whitespace-nowrap rounded-xl border-2 border-lawvex-accent px-4 text-sm font-semibold text-lawvex-accent transition duration-200"
            >
              Call (559) 249-5237
            </a>
            <button
              type="button"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex h-10 items-center justify-center whitespace-nowrap rounded-xl bg-lawvex-accent px-4 text-sm font-semibold text-white shadow-md transition duration-200"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="font-heading text-lawvex-light text-xl md:text-2xl font-bold leading-tight mb-4">
          Professional Estate Planning & Probate in Central California
        </h1>

        <h2 className="font-heading text-lawvex-accent text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Protecting Your Family’s Legacy with 110+ Years of Combined Practice
        </h2>

        <p className="font-body text-lawvex-light text-base max-w-3xl mx-auto leading-relaxed mb-8">
          Lawvex provides a modern, 100% remote legal experience for California families. We have combined over a century of legal wisdom with a streamlined digital process to ensure your assets are protected and your wishes are honored with total transparency.
        </p>

        <button
          className="bg-lawvex-accent hover:bg-lawvex-accent/80 text-white font-inter font-medium text-sm px-8 py-3 rounded-full border border-lawvex-accent transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap inline-block"
          onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get My Fee Quote
        </button>
      </div>
    </section>
  );
};
