import React from "react";

export const FooterSection = (): JSX.Element => {
  return (
    <section className="w-full bg-lawvex-dark py-8">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center space-y-4">
          <p className="font-body text-lawvex-light text-sm">
            © Copyright 2026 Lawvex
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://lawvex.com/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-lawvex-light text-sm hover:text-lawvex-accent transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-lawvex-light text-sm">•</span>
            <a
              href="https://lawvex.com/terms-of-service/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-lawvex-light text-sm hover:text-lawvex-accent transition-colors"
            >
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
