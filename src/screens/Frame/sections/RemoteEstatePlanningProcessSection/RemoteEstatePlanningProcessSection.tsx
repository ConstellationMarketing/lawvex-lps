const steps = [
  {
    number: "01",
    title: "Book Your Plan Design Meeting",
    description:
      "After you submit, you can book right on the spot to speak with an attorney to start your plan design.",
    imageSrc:
      "https://join.lawvex.com/images/process-1.jpg?dpl=dpl_Cy7f57tS2UnBJBDXcpprRzyPs4dU",
    imageAlt: "Book your plan design meeting",
  },
  {
    number: "02",
    title: "Reserve Your Attorney Plan Design Meeting",
    description:
      "After receiving your fee quote, you can schedule a complimentary 30-minute attorney consultation to walk through your options, ask questions, and design your plan. No deposit required.",
    imageSrc:
      "https://join.lawvex.com/images/process-2.jpg?dpl=dpl_Cy7f57tS2UnBJBDXcpprRzyPs4dU",
    imageAlt: "Attorney reviewing estate plan documents",
  },
  {
    number: "03",
    title: "Sign, Fund, and Secure Your Plan",
    description:
      "We finalize documents and coordinate a remote signing ceremony. Originals are delivered to you, and digital copies are hosted securely through our Client Portal so everything is organized and accessible.",
    imageSrc:
      "https://join.lawvex.com/images/process-3.jpg?dpl=dpl_Cy7f57tS2UnBJBDXcpprRzyPs4dU",
    imageAlt: "Documents being signed with notary present",
  },
];

export const RemoteEstatePlanningProcessSection = (): JSX.Element => {
  return (
    <section className="w-full bg-gradient-to-b from-[#e5e5e5] to-white py-24 font-body text-base font-normal leading-6">
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="mb-5 text-center">
          <h2 className="font-heading text-4xl font-bold leading-10 text-lawvex-dark">
            Our Estate Planning Process — Simple, Fast, and Built Around You
          </h2>
        </div>

        <p className="mx-auto mb-16 max-w-[768px] text-center text-[20px] leading-[32.5px] text-[#555555]">
          A streamlined, attorney led process built for busy California families designed for speed, clarity, and legally enforceable execution.
        </p>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="relative mx-auto mb-6 w-fit text-center">
                <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full shadow-lg transition duration-300">
                  <img
                    alt={step.imageAlt}
                    loading="lazy"
                    decoding="async"
                    src={step.imageSrc}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full border border-white bg-lawvex-accent text-sm font-bold leading-5 text-white shadow-md">
                  {step.number}
                </div>
              </div>

              <h3 className="mb-3 font-heading text-[20px] font-bold leading-7 text-lawvex-dark">
                {step.title}
              </h3>

              <p className="mx-auto max-w-[384px] text-center leading-[26px] text-[#555555]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-xl bg-lawvex-accent px-6 py-2.5 font-semibold text-white shadow-md transition duration-200"
          >
            Book Your Plan Design Meeting Now
          </button>
        </div>
      </div>
    </section>
  );
};
