import { DollarSign, Gavel, Globe, Lock } from "lucide-react";

const cards = [
  {
    title: "You Get Help From a Team That Does This Every Day",
    description:
      "We bring institutional-level experience to individual families, backed by 5,000+ matters completed and 110+ collective years of legal practice.",
    Icon: Gavel,
  },
  {
    title: "You Can Handle the Process Remotely",
    description:
      "Serving all of California since 2009 with a proven virtual-first model. Our process is handled via secure video conference for your convenience.",
    Icon: Globe,
  },
  {
    title: "You Know the Cost Before You Start",
    description:
      "We provide upfront, flat-fee quotes based on the complexity of your estate. You know your costs before the work begins.",
    Icon: DollarSign,
  },
  {
    title: "You Work With an Attorney-Led Team",
    description:
      "Every plan is attorney-led, fully customized, and built to work when you need it most, ensuring your assets are protected and your wishes are secured.",
    Icon: Lock,
  },
];

export const WhyChooseUsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-lawvex-light py-24 font-body text-base font-normal leading-6">
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="mb-14 text-center">
          <h2 className="mb-4 font-heading text-4xl font-bold leading-10 text-lawvex-dark">
            Why Families Choose Lawvex for Estate Planning and Probate
          </h2>
          <p className="mx-auto max-w-3xl font-body text-lg leading-8 text-[#555555]">
            Combined 110 years of experience protecting your family and your assets.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="h-full rounded-2xl border border-lawvex-gray/50 bg-white px-8 py-8 shadow-sm"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-lawvex-accent/10 text-lawvex-accent">
                <Icon strokeWidth={1.5} className="h-7 w-7" />
              </div>
              <h3 className="mb-3 font-heading text-[20px] font-bold leading-7 text-lawvex-dark">
                {title}
              </h3>
              <p className="text-[#555555] leading-[26px]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
