import React from "react";
import { CallToActionMainSectionMeta } from "./Frame/sections/CallToActionMainSectionMeta";
import { ContactSectionMeta } from "./Frame/sections/ContactSectionMeta";
import { FooterSection } from "./Frame/sections/FooterSection";
import { HeroSectionMeta } from "./Frame/sections/HeroSectionMeta";
import { ClientTestimonialsSection } from "./Frame/sections/ClientTestimonialsSection";
import { CriminalDefenseServicesSectionMeta } from "./Frame/sections/CriminalDefenseServicesSectionMeta";
import { WhyChooseUsSection } from "./Frame/sections/WhyChooseUsSection";
import { AboutUsSection } from "./Frame/sections/AboutUsSection";
import { AttorneySectionMeta } from "./Frame/sections/AttorneySectionMeta";
import { BadgesSection } from "./Frame/sections/BadgesSection";
import { StickyCtaButtonMeta } from "../components/ui/StickyCtaButtonMeta";
import { StickyBottomCtaMeta } from "../components/ui/StickyBottomCtaMeta";

export const FrameMeta = (): JSX.Element => {
  return (
    <div className="w-full bg-lawvex-light pb-20 md:pb-24">
      <StickyCtaButtonMeta />
      <StickyBottomCtaMeta />
      <div className="flex flex-col">
        <HeroSectionMeta />
        <BadgesSection />
        <CriminalDefenseServicesSectionMeta />
        <WhyChooseUsSection />
        <AboutUsSection />
        <AttorneySectionMeta />
        <ClientTestimonialsSection />
        <CallToActionMainSectionMeta />
        <ContactSectionMeta />
        <FooterSection />
      </div>
    </div>
  );
};
