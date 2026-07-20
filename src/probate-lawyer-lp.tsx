import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { Clock, DollarSign, Gavel, Languages, Phone, ShieldCheck } from "lucide-react";
import { AttorneySectionMeta } from "./screens/Frame/sections/AttorneySectionMeta";
import { ClientTestimonialsSection } from "./screens/Frame/sections/ClientTestimonialsSection";
import "../tailwind.css";

const phoneDisplay = "(559) 418-6587";
const phoneHref = "tel:5594186587";

const coreBenefits = [
  {
    title: "Probate Guidance for California Families",
    description:
      "Probate can feel confusing and slow, especially while you're grieving. We walk executors and heirs through the entire California probate timeline step by step.",
  },
  {
    title: "Serving Clovis, Madera, Solvang, and the Central Valley",
    description:
      "With attorneys across Fresno, Madera, and Santa Barbara Counties, we bring experienced probate guidance close to home.",
  },
  {
    title: "Drama Free Inheritance",
    description:
      "Our Probate Pathway approach is built specifically to reduce confusion and disagreement among heirs.",
  },
  {
    title: "Bilingual, Upfront Support",
    description:
      "We offer services in English and Spanish, and we give upfront fee quotes so you know what to expect financially from the very first conversation.",
  },
];

const reasons = [
  {
    title: "Trust & Transparency",
    description:
      "We give upfront fee quotes and walk you through the California probate timeline clearly.",
    Icon: DollarSign,
  },
  {
    title: "Responsiveness",
    description:
      "With 7 dedicated estate planning attorneys, we have the capacity to keep your case moving without unnecessary delay.",
    Icon: Clock,
  },
  {
    title: "Experience",
    description:
      "Our team brings 110+ combined years of experience and has completed more than 5,000 estate planning and trust administration matters.",
    Icon: Gavel,
  },
  {
    title: "Bilingual Support",
    description:
      "Our team supports California families in both English and Spanish throughout the probate process.",
    Icon: Languages,
  },
];

const faqs = [
  {
    question: "Do I need a lawyer for probate in California?",
    answer:
      "California law doesn't always require an attorney, but the process involves strict court deadlines and paperwork.",
  },
  {
    question: "How long does the California probate process take?",
    answer: "Timelines vary significantly by county and estate complexity.",
  },
  {
    question: "What does probate cost in California?",
    answer:
      "Costs depend on the size and complexity of the estate — we provide upfront fee quotes.",
  },
];

const ProbateLawyerPage = (): JSX.Element => {
  const [smsConsent, setSmsConsent] = useState("not agreed");

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = new FormData(event.currentTarget);

    if (typeof window !== "undefined" && (window as any).$wc_leads) {
      (window as any).$wc_leads.formData = Object.fromEntries(payload);
    }

    fetch("/?no-cache=true", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(payload as any).toString(),
    })
      .then(() => {
        window.location.href = "/thank-you";
      })
      .catch(() => {
        alert(`There was an issue submitting your form. Please try again or call us at ${phoneDisplay}.`);
      });
  };

  return (
    <div className="w-full bg-lawvex-light pb-20 md:pb-0">
      <div className="flex flex-col">
        <section className="relative w-full min-h-[500px] bg-lawvex-dark md:pt-[72px]">
          <div className="w-full bg-lawvex-dark border-b border-lawvex-accent/20 md:fixed md:inset-x-0 md:top-0 md:z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-center px-4 py-4 md:justify-start">
              <div className="flex items-center justify-center md:flex-1 md:justify-start">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F85a24e56361d4bb18447aa5f15703e59?format=webp&width=800&height=1200"
                  alt="Lawvex Logo"
                  className="h-10 w-auto object-contain mx-auto md:mx-0"
                />
              </div>
              <div className="hidden items-center gap-3 md:flex">
                <a
                  href={phoneHref}
                  className="flex h-10 items-center justify-center whitespace-nowrap rounded-xl border-2 border-lawvex-accent px-4 text-sm font-semibold text-lawvex-accent transition duration-200"
                >
                  Call {phoneDisplay}
                </a>
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="flex h-10 items-center justify-center whitespace-nowrap rounded-xl bg-lawvex-accent px-4 text-sm font-semibold text-white shadow-md transition duration-200"
                >
                  Free Consultation
                </button>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
            <h1 className="font-heading text-lawvex-light text-xl md:text-2xl font-bold leading-tight mb-4">
              California Probate Attorney Serving Clovis, Madera &amp; the Central Valley
            </h1>
            <h2 className="font-heading text-lawvex-accent text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              A Clear, Step-by-Step Path Through Probate
            </h2>
            <p className="font-body text-lawvex-light text-base max-w-3xl mx-auto leading-relaxed mb-8">
              From an estate planning firm recognized statewide, with a “Drama Free Inheritance” approach and bilingual support in English and Spanish.
            </p>
            <a
              href={phoneHref}
              className="bg-lawvex-accent hover:bg-lawvex-accent/80 text-white font-inter font-medium text-sm px-8 py-3 rounded-full border border-lawvex-accent transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap inline-block"
            >
              Call {phoneDisplay} for a Free Consultation
            </a>
          </div>
        </section>

        <section className="w-full border-y border-lawvex-gray/50 bg-white py-6 font-body text-base font-normal leading-6">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 text-center sm:grid-cols-3 lg:grid-cols-5">
              <div className="flex min-w-0 flex-col items-center px-1 text-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F4bce468b0c7e4ec08f5bb2af130dee6e?format=webp&width=800&height=1200"
                  alt="Avvo 10.0 Superb Attorney"
                  className="h-20 w-full object-contain"
                  style={{ height: "80px", maxWidth: "120px", objectFit: "contain" }}
                />
                <span className="mt-2 text-sm leading-5 text-[#555555]">AVVO 10/10 Superb rating</span>
              </div>
              <div className="flex min-w-0 flex-col items-center px-1 text-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F9717dca307fe43b1b503d198c2421a34?format=webp&width=800&height=1200"
                  alt="Super Lawyers recognition"
                  className="h-20 w-full object-contain"
                  style={{ height: "80px", maxWidth: "140px", objectFit: "contain" }}
                />
                <span className="mt-2 text-sm leading-5 text-[#555555]">California's Best Law Firm — Super Lawyers recognition</span>
              </div>
              <div className="flex min-w-0 flex-col items-center px-1 text-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F393fd68230bf42f28b6b7f430b66321a?format=webp&width=800&height=1200"
                  alt="Law Firm 500 Award"
                  className="h-20 w-full object-contain"
                  style={{ height: "80px", maxWidth: "120px", objectFit: "contain" }}
                />
                <span className="mt-2 text-sm leading-5 text-[#555555]">Law Firm 500 Award Winner (2022)</span>
              </div>
              <div className="flex min-w-0 flex-col items-center px-1 text-center">
                <span className="text-2xl font-bold leading-tight text-lawvex-accent sm:text-[30px] sm:leading-9">4.7-Star</span>
                <span className="mt-1 text-sm leading-5 text-[#555555]">Google Rating</span>
                <span className="mt-1 text-sm leading-5 text-[#555555]">With 235 Google Reviews.</span>
              </div>
              <div className="col-span-2 flex min-w-0 flex-col items-center px-1 text-center sm:col-span-1">
                <Languages className="h-10 w-10 text-lawvex-accent" />
                <span className="mt-2 text-sm leading-5 text-[#555555]">Bilingual</span>
                <span className="mt-1 text-sm leading-5 text-[#555555]">English and Spanish</span>
              </div>
            </div>
          </div>
        </section>

        <section id="practice-areas" className="w-full bg-lawvex-gray py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-lawvex-dark text-3xl md:text-4xl font-bold mb-4">
                Probate Guidance for California Families
              </h2>
              <p className="font-body text-lawvex-dark/70 text-base max-w-3xl mx-auto mb-8">
                Probate can feel confusing and slow, especially while you're grieving. We guide executors and heirs through the California probate timeline step by step.
              </p>
              <h3 className="font-heading text-lawvex-dark text-2xl font-bold">How We Help:</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {coreBenefits.map((benefit) => (
                <div key={benefit.title} className="bg-white border border-lawvex-gray rounded-lg py-6 px-6">
                  <h4 className="font-heading text-lawvex-dark text-lg font-bold mb-2">{benefit.title}:</h4>
                  <p className="font-body text-lawvex-dark text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 bg-lawvex-accent rounded-lg p-12 text-center">
              <h3 className="font-heading text-white text-2xl md:text-3xl font-bold mb-6">
                Get a Clear Path Through Probate
              </h3>
              <a
                href={phoneHref}
                className="inline-block font-heading text-white text-2xl md:text-3xl font-semibold hover:opacity-80 transition-opacity mb-8"
              >
                {phoneDisplay}
              </a>
              <div className="flex flex-col items-center gap-4">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="bg-white hover:bg-gray-100 text-lawvex-dark font-inter font-medium text-sm px-8 py-3 rounded-full transition-all duration-150 uppercase tracking-[2px] inline-block"
                >
                  Free Consultation
                </button>
                <p className="font-body text-white text-base">
                  Speak with our intake team about where you are in the probate process.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-lawvex-light py-24 font-body text-base font-normal leading-6">
          <div className="mx-auto max-w-[1200px] px-8">
            <div className="mb-14 text-center">
              <h2 className="mb-4 font-heading text-4xl font-bold leading-10 text-lawvex-dark">
                Why California Families Choose Lawvex for Probate
              </h2>
              <p className="mx-auto max-w-3xl font-body text-lg leading-8 text-[#555555]">
                Clear guidance, responsive support, and experienced attorneys focused on your family.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {reasons.map(({ title, description, Icon }) => (
                <div key={title} className="h-full rounded-2xl border border-lawvex-gray/50 bg-white px-8 py-8 shadow-sm">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-lawvex-accent/10 text-lawvex-accent">
                    <Icon strokeWidth={1.5} className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 font-heading text-[20px] font-bold leading-7 text-lawvex-dark">{title}</h3>
                  <p className="text-[#555555] leading-[26px]">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-lawvex-gray py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-lawvex-dark text-3xl md:text-4xl font-bold mb-4">California Probate FAQ</h2>
            </div>
            <div className="space-y-6">
              {faqs.map(({ question, answer }) => (
                <div key={question} className="bg-white border border-lawvex-gray rounded-lg py-6 px-6">
                  <h3 className="font-heading text-lawvex-dark text-lg font-bold mb-2">{question}</h3>
                  <p className="font-body text-lawvex-dark text-sm leading-relaxed">{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <AttorneySectionMeta />
        <ClientTestimonialsSection />

        <section className="w-full bg-lawvex-accent py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="font-heading text-white text-3xl md:text-4xl font-bold mb-6">
              Have Questions About California Probate?
            </h2>
            <p className="font-body text-white text-lg mb-8 max-w-2xl mx-auto">
              Call {phoneDisplay} or fill out the form below for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={phoneHref} className="bg-lawvex-dark text-white font-body font-semibold px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all">
                Call Now: {phoneDisplay}
              </a>
              <button
                type="button"
                onClick={scrollToForm}
                className="bg-white text-lawvex-dark border-2 border-lawvex-dark font-body font-semibold px-8 py-4 rounded-lg hover:bg-lawvex-dark hover:text-white transition-all"
              >
                Free Consultation
              </button>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full bg-lawvex-light py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-lawvex-dark text-3xl md:text-4xl font-bold mb-4">Contact Lawvex</h2>
              <p className="font-body text-lawvex-dark text-lg">Speak with our professional intake team about probate today.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-heading text-lawvex-dark text-2xl font-bold mb-6">Request a Free Consultation</h3>
                <form
                  id="contact-form"
                  name="probate-lawyer-lp-form"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="probate-lawyer-lp-form" />
                  <input type="hidden" name="subject" value="New Probate Lawyer Landing Page Submission" />
                  <input type="hidden" name="smsConsent" value={smsConsent} />
                  <input type="text" name="name" placeholder="Name" required className="w-full px-4 py-3 border border-lawvex-gray rounded font-body text-sm focus:outline-none focus:border-lawvex-accent" />
                  <input type="tel" name="phone" placeholder="Phone" required className="w-full px-4 py-3 border border-lawvex-gray rounded font-body text-sm focus:outline-none focus:border-lawvex-accent" />
                  <input type="email" name="email" placeholder="Email" required className="w-full px-4 py-3 border border-lawvex-gray rounded font-body text-sm focus:outline-none focus:border-lawvex-accent" />
                  <select name="probateProcess" required defaultValue="" className="w-full px-4 py-3 border border-lawvex-gray rounded font-body text-sm text-lawvex-dark focus:outline-none focus:border-lawvex-accent">
                    <option value="" disabled>Where are you in the probate process?</option>
                    <option value="Just Starting">Just Starting</option>
                    <option value="Already Filed">Already Filed</option>
                    <option value="Not Sure">Not Sure</option>
                    <option value="Other">Other</option>
                  </select>
                  <label className="flex items-start gap-3 text-xs leading-5 text-gray-600">
                    <input
                      type="checkbox"
                      checked={smsConsent === "agreed"}
                      onChange={(event) => setSmsConsent(event.target.checked ? "agreed" : "not agreed")}
                      className="mt-0.5 h-4 w-4 rounded border-lawvex-gray text-lawvex-accent focus:ring-lawvex-accent"
                    />
                    <span>
                      I agree to receive SMS messages from Lawvex, LLP. Message and data rates may apply. Reply STOP to opt out and HELP for assistance.
                      <br />
                      <a href="/terms-of-service/" className="text-lawvex-accent underline">Terms of Service</a>{" | "}
                      <a href="/privacy-policy/" className="text-lawvex-accent underline">Privacy Policy</a>
                    </span>
                  </label>
                  <button type="submit" className="w-full bg-lawvex-accent hover:bg-lawvex-accent/80 text-white font-inter font-medium text-sm px-8 py-3 rounded-full border border-lawvex-accent transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap inline-block">
                    Get Probate Guidance
                  </button>
                </form>
              </div>
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="font-heading text-lawvex-dark text-2xl font-bold mb-6">Contact Information</h3>
                  <a href={phoneHref} className="flex items-center font-body text-lawvex-dark font-medium">
                    <Phone className="w-5 h-5 text-lawvex-accent mr-3 flex-shrink-0" />
                    {phoneDisplay}
                  </a>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="font-heading text-lawvex-dark text-2xl font-bold mb-6">Serving California Families</h3>
                  <div className="flex items-start">
                    <ShieldCheck className="w-5 h-5 text-lawvex-accent mr-3 mt-1 flex-shrink-0" />
                    <p className="font-body text-lawvex-dark leading-relaxed">
                      Lawvex | Clovis, CA | Serving Fresno, Madera, San Luis Obispo, Kings, Monterey, San Benito &amp; Merced Counties.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="w-full bg-lawvex-dark py-8">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center">
              <div className="flex flex-wrap justify-center items-center gap-4">
                <p className="font-body text-lawvex-light text-sm m-0">© Copyright 2026 Lawvex</p>
                <span className="text-lawvex-light text-sm">•</span>
                <a href="/privacy-policy/" className="font-body text-lawvex-light text-sm hover:text-lawvex-accent transition-colors">Privacy Policy</a>
                <span className="text-lawvex-light text-sm">•</span>
                <a href="/terms-of-service/" className="font-body text-lawvex-light text-sm hover:text-lawvex-accent transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div className="fixed bottom-6 right-6 z-50 hidden gap-3 md:flex">
        <a href={phoneHref} className="flex items-center gap-2 bg-lawvex-accent hover:bg-lawvex-accent/90 text-white font-body font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-200 whitespace-nowrap">
          <Phone className="w-5 h-5" />
          {phoneDisplay}
        </a>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-lawvex-dark shadow-lg md:hidden">
        <div className="grid grid-cols-2 gap-3 px-4 py-3">
          <a href={phoneHref} className="flex items-center justify-center gap-2 bg-lawvex-accent text-white font-body font-bold py-3 px-3 rounded-lg text-sm">
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <button type="button" onClick={scrollToForm} className="bg-white text-lawvex-dark font-body font-bold py-3 px-3 rounded-lg text-sm">
            Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ProbateLawyerPage />
  </StrictMode>,
);
