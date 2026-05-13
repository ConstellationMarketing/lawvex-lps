const stats = [
  {
    value: "110+",
    label: "Years of Combined Practice",
    description: "Century-deep legal wisdom.",
  },
  {
    value: "5,000+",
    label: "Matters Completed",
    description: "Proven results for California families.",
  },
  {
    value: "7",
    label: "Dedicated Attorneys",
    description: "A full team focused on your protection.",
  },
  {
    value: "100%",
    label: "Remote Process",
    description: "Professional legal support from your home or office.",
  },
  {
    value: "4.7-Star",
    label: "Rating",
    description: "With 235 Google Reviews.",
  },
];

export const StatsSection = (): JSX.Element => {
  return (
    <section className="w-full border-y border-lawvex-gray/50 bg-white py-6 font-body text-base font-normal leading-6">
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-10 text-center">
          {stats.map((stat) => (
            <div key={stat.value + stat.label} className="flex max-w-[190px] flex-col items-center text-center">
              <span className="text-[30px] font-bold leading-9 text-lawvex-accent">{stat.value}</span>
              <span className="mt-1 text-sm leading-5 text-[#555555]">{stat.label}</span>
              <span className="mt-1 text-sm leading-5 text-[#555555]">{stat.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
