import React from "react";
import { Scale, Users, Briefcase, Award } from "lucide-react";

export const WhyChooseUsSection = (): JSX.Element => {
  const features = [
    {
      icon: Scale,
      text: "With 20 years of experience in estate planning and probate law, Lawvex has helped hundreds of families protect their assets and streamline the probate process."
    },
    {
      icon: Users,
      text: "We focus on achieving the best possible outcome for each client, providing personalized legal strategies tailored to your family's unique circumstances and goals."
    },
    {
      icon: Briefcase,
      text: "Our firm handles 400+ estate plans annually, combining deep legal expertise with efficient processes to ensure transparency and clarity throughout your matter."
    },
    {
      icon: Award,
      text: "Known for Speed, Efficiency, and Transparency, Lawvex delivers results you can trust with direct communication from experienced attorneys who understand what matters most."
    }
  ];

  return (
    <section className="w-full bg-lawvex-light pt-12 md:pt-20 pb-6 md:pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-heading text-lawvex-dark text-3xl md:text-4xl font-bold text-center mb-3">
          Why Choose Lawvex
        </h2>
        <p className="font-body text-lawvex-dark/70 text-center text-lg mb-12">
          20 years of experience protecting families and managing 400+ estate plans annually
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-lawvex-accent p-6 rounded-lg flex flex-col items-center text-center"
              >
                <IconComponent className="w-12 h-12 text-lawvex-dark mb-4" />
                <p className="font-body text-lawvex-dark text-sm leading-relaxed">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
