import React from "react";
import { CallToActionMainSection } from "./sections/CallToActionMainSection";
import { ContactSection } from "./sections/ContactSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { ClientTestimonialsSection } from "./sections/ClientTestimonialsSection";
import { CriminalDefenseServicesSection } from "./sections/CriminalDefenseServicesSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";
import { AboutUsSection } from "./sections/AboutUsSection";
import { AttorneySection } from "./sections/AttorneySection";
import { StickyCtaButton } from "../../components/ui/StickyCtaButton";
import { StatsSection } from "./sections/StatsSection";
import { RemoteEstatePlanningProcessSection } from "./sections/RemoteEstatePlanningProcessSection";

export const Frame = (): JSX.Element => {
  return (
    <div className="w-full bg-lawvex-light">
      <StickyCtaButton />
      <div className="flex flex-col">
        <HeroSection />
        <StatsSection />
        <CriminalDefenseServicesSection />
        <WhyChooseUsSection />
        <RemoteEstatePlanningProcessSection />
        <AboutUsSection />
        <AttorneySection />
        <ClientTestimonialsSection />
        <CallToActionMainSection />
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  );
};
