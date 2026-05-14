import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";

export const StickyBottomCta = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling more than 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return <></>;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-lawvex-dark shadow-lg md:hidden">
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <a
            href="tel:5594186587"
            className="flex items-center justify-center gap-2 bg-lawvex-accent hover:bg-lawvex-accent/90 text-white font-body font-bold py-3 px-4 rounded-lg transition-all duration-200 text-sm md:text-base"
          >
            <Phone className="w-5 h-5" />
            <span className="hidden sm:inline">Call Now:</span>
            <span>(559) 418-6587</span>
          </a>
          <button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white hover:bg-gray-100 text-lawvex-dark font-body font-bold py-3 px-4 rounded-lg transition-all duration-200 text-sm md:text-base"
          >
            Request Free Quote
          </button>
        </div>
      </div>
    </div>
  );
};
