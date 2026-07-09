import React from "react";
import { Check } from "lucide-react";

export const EstateProtectionSection = (): JSX.Element => {
  const points = [
    "You want a law firm your family can turn to first if something unexpected happens, including death, incapacity, illness, or an urgent legal decision. We help your loved ones understand what needs to happen and what steps to take next.",
    "You also want an estate plan that is simple to understand and easy to follow. We explain everything in plain language, clarify each person’s role, and create practical solutions based on your family, assets, goals, and concerns.",
    "You want the process to be easy, organized, and stress-free while helping you maximize value and minimize unnecessary cost. If you are ready to protect your loved ones, we are here to help you take the next step.",
    "Most importantly, you want a plan that works when it is needed. We build thoughtful, customized estate plans designed to protect your family, reduce confusion, avoid unnecessary conflict, and give everyone involved greater confidence. When the time comes, your plan works and your family is protected.",
  ];

  return (
    <section className="w-full bg-lawvex-light py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-heading text-lawvex-dark text-3xl md:text-4xl font-bold text-center mb-8">
          Estate Planning Designed to Protect California Families When It Matters Most
        </h2>

        <div className="space-y-6 text-center">
          <p className="font-body text-lawvex-dark text-base leading-relaxed">
            After helping thousands of California families plan for the future, we know estate planning is about protecting the people you love with clear guidance, trusted support, and a plan that works when life becomes uncertain.
          </p>

          <p className="font-body text-lawvex-dark text-base leading-relaxed">
            We know these 4 things about the families we help:
          </p>

          <div className="space-y-4 max-w-3xl mx-auto">
            {points.map((point) => (
              <div key={point} className="flex items-start gap-3 text-left">
                <Check className="w-5 h-5 text-lawvex-accent mt-1 flex-shrink-0" />
                <p className="font-body text-lawvex-dark text-base leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
