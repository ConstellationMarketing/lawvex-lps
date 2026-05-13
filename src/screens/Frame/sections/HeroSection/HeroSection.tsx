import React from "react";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[500px] bg-lawvex-dark">
      {/* Navigation Bar */}
      <div className="relative w-full bg-lawvex-dark border-b border-lawvex-accent/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between md:justify-start">
          <div className="flex items-center flex-1 md:flex-none md:mr-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F85a24e56361d4bb18447aa5f15703e59?format=webp&width=800&height=1200"
              alt="Lawvex Logo"
              className="h-10 w-auto object-contain mx-auto md:mx-0"
            />
          </div>

          <div className="hidden md:flex flex-col items-end">
            <p className="font-body text-lawvex-accent text-xs uppercase tracking-wider">Call Today</p>
            <a
              href="tel:5594186587"
              className="font-body text-lawvex-light hover:text-lawvex-accent transition-colors text-lg font-semibold"
            >
              (559) 418-6587
            </a>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="font-heading text-lawvex-light text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Professional Estate Planning & Probate in Central California
        </h1>

        <h2 className="font-body text-lawvex-accent text-xl md:text-2xl font-semibold mb-6">
          Protecting Your Family's Legacy With Combined 110 Years Of Legal Practice
        </h2>

        <p className="font-body text-lawvex-light text-base max-w-3xl mx-auto leading-relaxed mb-8">
          Whether you are planning for the future or navigating the loss of a loved one, Lawvex provides the steady guidance you need to protect your family's legacy with transparency and care.
        </p>

        <button
          className="bg-lawvex-accent hover:bg-lawvex-accent/80 text-white font-inter font-medium text-sm px-8 py-3 rounded-full border border-lawvex-accent transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap inline-block"
          onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Request Your Fee Quote
        </button>
      </div>
    </section>
  );
};
