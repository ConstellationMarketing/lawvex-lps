import React from "react";

export const AttorneySection = (): JSX.Element => {
  return (
    <section className="w-full bg-lawvex-gray py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-lawvex-dark text-3xl md:text-4xl font-bold text-center mb-12">
          Meet Our Attorneys
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="w-full h-full min-h-[400px]">
            <div className="w-full h-full min-h-[400px] bg-lawvex-gray rounded-lg flex items-center justify-center">
              <span className="text-lawvex-dark/50 font-body">Attorney Photo Placeholder</span>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <p className="font-body text-lawvex-dark text-base leading-relaxed">
              With 20 years of experience in estate planning and probate law, our attorneys at Lawvex are dedicated to protecting your family's legacy. Our team has successfully guided hundreds of families through comprehensive estate planning, probate administration, and trust management.
            </p>

            <p className="font-body text-lawvex-dark text-base leading-relaxed">
              Our attorneys combine deep legal expertise with a client-focused approach. We understand that every family's situation is unique, which is why we tailor our strategies to meet your specific needs and goals.
            </p>

            <p className="font-body text-lawvex-dark text-base leading-relaxed">
              Known for Speed, Efficiency, and Transparency, we manage 400+ estate plans annually. Our commitment to clear communication and efficient processes ensures you always understand where your matter stands.
            </p>

            <p className="font-body text-lawvex-dark text-base leading-relaxed">
              Whether you're planning for the future or navigating the complexities of probate, our attorneys bring compassion, expertise, and a results-oriented approach to every engagement.
            </p>

            <div className="pt-4">
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-lawvex-accent hover:bg-lawvex-accent/80 text-lawvex-dark font-inter font-medium text-sm px-8 py-3 rounded-full border border-lawvex-accent transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap inline-block"
              >
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
