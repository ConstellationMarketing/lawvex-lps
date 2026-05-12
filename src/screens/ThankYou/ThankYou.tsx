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

          <h1 className="font-heading text-lawvex-dark text-4xl md:text-5xl font-bold mb-4">
            Your Request Has Been Received
          </h1>

          <p className="font-body text-lawvex-dark text-xl font-semibold mb-8">
            A member of our intake team will contact you shortly.
          </p>

          <div className="bg-white border-2 border-lawvex-accent rounded-lg p-8 mb-8 text-left">
            <h3 className="font-heading text-lawvex-dark text-2xl font-bold mb-6">
              Next Steps:
            </h3>
            <ul className="space-y-4">
              <li className="font-body text-lawvex-dark text-base flex items-start">
                <span className="text-lawvex-accent font-bold mr-3 text-lg">✓</span>
                <span>Watch for a call from <strong>559-418-6587</strong> or an email from Lawvex.</span>
              </li>
              <li className="font-body text-lawvex-dark text-base flex items-start">
                <span className="text-lawvex-accent font-bold mr-3 text-lg">✓</span>
                <span>We will provide you with a professional fee quote.</span>
              </li>
              <li className="font-body text-lawvex-dark text-base flex items-start">
                <span className="text-lawvex-accent font-bold mr-3 text-lg">✓</span>
                <span>Once the quote is reviewed, we will schedule your 30-minute attorney consultation.</span>
              </li>
            </ul>
          </div>

          <div className="bg-lawvex-accent/10 border border-lawvex-accent/30 rounded-lg p-6 mb-8">
            <p className="font-body text-lawvex-dark font-semibold mb-2">
              Questions in the Meantime?
            </p>
            <a
              href="tel:5594186587"
              className="font-heading text-lawvex-accent text-2xl font-semibold hover:opacity-80 transition-opacity"
            >
              (559) 418-6587
            </a>
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
