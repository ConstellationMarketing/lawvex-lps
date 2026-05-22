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
    description: "Three California offices plus a fully remote option — we work the way you prefer.",
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
      <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 text-center sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <div
              key={stat.value + stat.label}
              className={`flex min-w-0 flex-col items-center px-1 text-center ${index === stats.length - 1 ? 'col-span-2 sm:col-span-1' : ''}`}
            >
              <span className="text-2xl font-bold leading-tight text-lawvex-accent sm:text-[30px] sm:leading-9">{stat.value}</span>
              <span className="mt-1 text-sm leading-5 text-[#555555]">{stat.label}</span>
              <span className="mt-1 text-sm leading-5 text-[#555555]">{stat.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
