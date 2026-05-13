import React from "react";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[500px] bg-lawvex-dark pt-[128px] sm:pt-[72px]">
      {/* Navigation Bar */}
      <div className="fixed inset-x-0 top-0 z-50 w-full bg-lawvex-dark border-b border-lawvex-accent/20">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between md:justify-start">
          <div className="flex items-center justify-center sm:flex-1 sm:justify-start md:flex-none md:mr-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F85a24e56361d4bb18447aa5f15703e59?format=webp&width=800&height=1200"
              alt="Lawvex Logo"
              className="h-10 w-auto object-contain mx-auto md:mx-0"
            />
          </div>

          <div className="flex w-full items-center justify-center gap-2 sm:w-auto sm:gap-3">
            <a
              href="tel:5594186587"
              className="flex h-10 flex-1 items-center justify-center whitespace-nowrap rounded-xl border-2 border-lawvex-accent px-3 text-xs font-semibold text-lawvex-accent transition duration-200 sm:flex-none sm:px-4 sm:text-sm"
            >
              Call (559) 418-6587
            </a>
            <button
              type="button"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex h-10 flex-1 items-center justify-center whitespace-nowrap rounded-xl bg-lawvex-accent px-3 text-xs font-semibold text-white shadow-md transition duration-200 sm:flex-none sm:px-4 sm:text-sm"
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
