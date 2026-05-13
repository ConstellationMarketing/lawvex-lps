import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";

export const StickyCtaButtonMeta = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('[class*="HeroSection"]');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsVisible(heroBottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return <></>;

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden gap-3 md:flex">
      <a
        href="tel:5592495237"
        className="flex items-center gap-2 bg-lawvex-accent hover:bg-lawvex-accent/90 text-white font-body font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-200 whitespace-nowrap"
      >
        <Phone className="w-5 h-5" />
        <span className="hidden sm:inline">(559) 249-5237</span>
      </a>
    </div>
  );
};
