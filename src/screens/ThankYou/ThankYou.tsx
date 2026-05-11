import React from "react";
import { CheckCircle } from "lucide-react";

export const ThankYou = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-lawvex-light flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-lg shadow-lg p-12">
          <div className="flex justify-center mb-6">
            <div className="bg-lawvex-accent/10 rounded-full p-4">
              <CheckCircle className="w-16 h-16 text-lawvex-accent" />
            </div>
          </div>

          <h1 className="font-heading text-lawvex-dark text-4xl md:text-5xl font-bold mb-6">
            Thank You!
          </h1>

          <p className="font-body text-lawvex-dark text-lg mb-4">
            We've received your message and appreciate you contacting us.
          </p>

          <p className="font-body text-lawvex-dark/70 text-base mb-8">
            Our professional intake team will review your case details and get back to you as soon as possible. We typically respond within 24 hours during business days.
          </p>

          <div className="bg-lawvex-accent/10 border border-lawvex-accent/30 rounded-lg p-6 mb-8">
            <p className="font-body text-lawvex-dark font-semibold mb-2">
              Need Immediate Assistance?
            </p>
            <a
              href="tel:5594186587"
              className="font-heading text-lawvex-accent text-2xl font-semibold hover:opacity-80 transition-opacity"
            >
              (559) 418-6587
            </a>
            <p className="font-body text-lawvex-dark/70 text-sm mt-2">
              Available Monday-Friday
            </p>
          </div>

          <a
            href="/"
            className="inline-block bg-lawvex-accent hover:bg-lawvex-accent/80 text-lawvex-dark font-inter font-medium text-sm px-8 py-3 rounded-full border border-lawvex-accent transition-all duration-150 uppercase tracking-[2px]"
          >
            Return to Homepage
          </a>
        </div>
      </div>
    </div>
  );
};
