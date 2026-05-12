import React from "react";
import { CallToActionMainSection } from "./Frame/sections/CallToActionMainSection";
import { ContactSection } from "./Frame/sections/ContactSection";
import { FooterSection } from "./Frame/sections/FooterSection";
import { HeroSectionMeta } from "./Frame/sections/HeroSectionMeta";
import { ClientTestimonialsSection } from "./Frame/sections/ClientTestimonialsSection";
import { CriminalDefenseServicesSectionMeta } from "./Frame/sections/CriminalDefenseServicesSectionMeta";
import { WhyChooseUsSection } from "./Frame/sections/WhyChooseUsSection";
import { AboutUsSection } from "./Frame/sections/AboutUsSection";
import { AttorneySection } from "./Frame/sections/AttorneySection";
import { BadgesSection } from "./Frame/sections/BadgesSection";
import { StickyCtaButton } from "../components/ui/StickyCtaButton";
import { StickyBottomCtaMeta } from "../components/ui/StickyBottomCtaMeta";

export const FrameMeta = (): JSX.Element => {
  return (
    <div className="w-full bg-lawvex-light pb-20 md:pb-24">
      <StickyCtaButton />
      <StickyBottomCtaMeta />
      <div className="flex flex-col">
        <HeroSectionMeta />
        <BadgesSection />
        <CriminalDefenseServicesSectionMeta />
        <WhyChooseUsSection />
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
