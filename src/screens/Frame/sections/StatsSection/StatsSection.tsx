const stats = [
  { value: "5,000+", label: "Matters Completed" },
  { value: "7", label: "Dedicated Attorneys" },
  { value: "110+", label: "Years of Practice" },
  { value: "100%", label: "Refundable Deposit" },
];

export const StatsSection = (): JSX.Element => {
  return (
    <section className="w-full border-y border-lawvex-gray/50 bg-white py-6 font-body text-base font-normal leading-6">
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="flex flex-wrap justify-center gap-16 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <span className="text-[30px] font-bold leading-9 text-lawvex-accent">{stat.value}</span>
              <span className="mt-1 text-sm leading-5 text-[#555555]">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
