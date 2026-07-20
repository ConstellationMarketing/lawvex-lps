import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "../tailwind.css";
import {
  CheckCircle2,
  Clock3,
  Languages,
  Phone,
  Scale,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

const phoneDisplay = "(559) 418-6587";
const phoneHref = "tel:5594186587";

const benefits = [
  {
    title: "Probate Guidance for California Families",
    description:
      "Probate can feel confusing and slow, especially while you're grieving. We walk executors and heirs through the entire California probate timeline step by step.",
    icon: Scale,
  },
  {
    title: "Serving Clovis, Madera, Solvang, and the Central Valley",
    description:
      "With attorneys across Fresno, Madera, and Santa Barbara Counties, we bring experienced probate guidance close to home.",
    icon: Users,
  },
  {
    title: "Drama Free Inheritance",
    description:
      "Our Probate Pathway approach is built specifically to reduce confusion and disagreement among heirs.",
    icon: ShieldCheck,
  },
  {
    title: "Bilingual, Upfront Support",
    description:
      "We offer services in English and Spanish, and we give upfront fee quotes so you know what to expect financially from the very first conversation.",
    icon: Languages,
  },
];

const reasons = [
  {
    title: "Trust & Transparency",
    description:
      "We give upfront fee quotes and walk you through the California probate timeline clearly.",
    icon: CheckCircle2,
  },
  {
    title: "Responsiveness",
    description:
      "With 7 dedicated estate planning attorneys, we have the capacity to keep your case moving without unnecessary delay.",
    icon: Clock3,
  },
  {
    title: "Experience",
    description:
      "Our team brings 110+ combined years of experience and has completed more than 5,000 estate planning and trust administration matters.",
    icon: Star,
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
    <div className="min-h-screen bg-white pb-16 font-['Lato'] text-[#212934] md:pb-0">
      <header className="bg-[#212934] border-b border-[#65bc7b]/30">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F85a24e56361d4bb18447aa5f15703e59?format=webp&width=800&height=1200"
            alt="Lawvex"
            className="h-10 w-auto object-contain"
          />
          <a
            href={phoneHref}
            className="rounded-full border-2 border-[#65bc7b] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#65bc7b]"
          >
            Call {phoneDisplay}
          </a>
        </div>
      </header>

      <main>
        <section className="bg-[#212934] py-14 text-white md:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="text-center lg:text-left">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#65bc7b]">
                California Probate Guidance
              </p>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                California Probate Attorney Serving Clovis, Madera &amp; the Central Valley
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#f9f9fb] lg:mx-0">
                Get a clear, step-by-step path through probate — from an estate planning firm recognized statewide, with a “Drama Free Inheritance” approach and bilingual support in English and Spanish.
              </p>
              <a
                href={phoneHref}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#5aab32] px-7 py-4 text-base font-bold text-white shadow-lg transition hover:bg-[#65bc7b]"
              >
                <Phone className="h-5 w-5" />
                Call {phoneDisplay} for a Free Consultation
              </a>
            </div>

            <div className="rounded-2xl bg-white p-6 text-[#212934] shadow-2xl md:p-8">
              <h2 className="text-2xl font-bold">Request a Free Consultation</h2>
              <p className="mt-2 text-sm leading-6 text-[#4a4e57]">
                Tell us where you are in the probate process and our team will contact you.
              </p>
              <form
                id="contact-form"
                name="probate-lawyer-lp-form"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="mt-6 space-y-4"
              >
                <input type="hidden" name="form-name" value="probate-lawyer-lp-form" />
                <input type="hidden" name="subject" value="New Probate Lawyer Landing Page Submission" />
                <input type="hidden" name="smsConsent" value={smsConsent} />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full rounded-lg border border-[#d7d7d8] px-4 py-3 outline-none transition focus:border-[#5aab32] focus:ring-1 focus:ring-[#5aab32]"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  required
                  className="w-full rounded-lg border border-[#d7d7d8] px-4 py-3 outline-none transition focus:border-[#5aab32] focus:ring-1 focus:ring-[#5aab32]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full rounded-lg border border-[#d7d7d8] px-4 py-3 outline-none transition focus:border-[#5aab32] focus:ring-1 focus:ring-[#5aab32]"
                />
                <select
                  name="probateProcess"
                  required
                  defaultValue=""
                  className="w-full rounded-lg border border-[#d7d7d8] bg-white px-4 py-3 outline-none transition focus:border-[#5aab32] focus:ring-1 focus:ring-[#5aab32]"
                >
                  <option value="" disabled>
                    Where are you in the probate process?
                  </option>
                  <option value="Just Starting">Just Starting</option>
                  <option value="Already Filed">Already Filed</option>
                  <option value="Not Sure">Not Sure</option>
                  <option value="Other">Other</option>
                </select>
                <label className="flex items-start gap-3 text-xs leading-5 text-[#4a4e57]">
                  <input
                    type="checkbox"
                    checked={smsConsent === "agreed"}
                    onChange={(event) =>
                      setSmsConsent(event.target.checked ? "agreed" : "not agreed")
                    }
                    className="mt-1 h-4 w-4 flex-shrink-0 accent-[#5aab32]"
                  />
                  <span>
                    I agree to receive SMS messages from Lawvex, LLP. Message and data rates may apply. Reply STOP to opt out and HELP for assistance. View our{" "}
                    <a href="/terms-of-service/" className="font-bold text-[#5aab32] underline">
                      Terms of Service
                    </a>{" "}
                    |{" "}
                    <a href="/privacy-policy/" className="font-bold text-[#5aab32] underline">
                      Privacy Policy
                    </a>.
                  </span>
                </label>
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#5aab32] px-6 py-4 font-bold text-white transition hover:bg-[#65bc7b]"
                >
                  Get Probate Guidance
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="border-b border-[#d7d7d8] bg-white py-12">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-center text-2xl font-bold md:text-3xl">Recognized Experience You Can Trust</h2>
            <div className="mt-8 grid grid-cols-2 items-stretch gap-4 md:grid-cols-5">
              <div className="flex flex-col items-center justify-center rounded-xl border border-[#d7d7d8] p-4 text-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F4bce468b0c7e4ec08f5bb2af130dee6e?format=webp&width=800&height=1200"
                  alt="Avvo 10.0 Superb Attorney"
                  className="h-24 w-full object-contain"
                  style={{ height: "96px", maxWidth: "100%", objectFit: "contain" }}
                />
                <p className="mt-3 text-sm font-bold">AVVO 10/10 Superb rating</p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-xl border border-[#d7d7d8] p-4 text-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F9717dca307fe43b1b503d198c2421a34?format=webp&width=800&height=1200"
                  alt="Super Lawyers"
                  className="h-24 w-full object-contain"
                  style={{ height: "96px", maxWidth: "100%", objectFit: "contain" }}
                />
                <p className="mt-3 text-sm font-bold">California's Best Law Firm — Super Lawyers recognition</p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-xl border border-[#d7d7d8] p-4 text-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F393fd68230bf42f28b6b7f430b66321a?format=webp&width=800&height=1200"
                  alt="Law Firm 500 Award"
                  className="h-24 w-full object-contain"
                  style={{ height: "96px", maxWidth: "100%", objectFit: "contain" }}
                />
                <p className="mt-3 text-sm font-bold">Law Firm 500 Award Winner (2022)</p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-xl border border-[#d7d7d8] p-4 text-center">
                <div className="flex gap-1 text-[#5aab32]" aria-hidden="true">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-6 w-6 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-lg font-bold">4.7 stars</p>
                <p className="mt-1 text-sm text-[#4a4e57]">235 Google reviews</p>
              </div>
              <div className="col-span-2 flex flex-col items-center justify-center rounded-xl border border-[#d7d7d8] p-4 text-center md:col-span-1">
                <Languages className="h-12 w-12 text-[#5aab32]" />
                <p className="mt-4 text-sm font-bold">Bilingual</p>
                <p className="mt-1 text-sm text-[#4a4e57]">English and Spanish</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f9f9fb] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#5aab32]">A Clear Path Forward</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Probate Support Built Around Your Family</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {benefits.map(({ title, description, icon: Icon }) => (
                <article key={title} className="rounded-2xl bg-white p-7 shadow-sm">
                  <Icon className="h-10 w-10 text-[#5aab32]" />
                  <h3 className="mt-5 text-xl font-bold">{title}</h3>
                  <p className="mt-3 leading-7 text-[#4a4e57]">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-center text-3xl font-bold md:text-4xl">Why California Families Choose Lawvex</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {reasons.map(({ title, description, icon: Icon }) => (
                <article key={title} className="rounded-2xl border border-[#d7d7d8] p-7 text-center">
                  <Icon className="mx-auto h-10 w-10 text-[#5aab32]" />
                  <h3 className="mt-5 text-xl font-bold">{title}</h3>
                  <p className="mt-3 leading-7 text-[#4a4e57]">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f9f9fb] py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-center text-3xl font-bold md:text-4xl">California Probate FAQ</h2>
            <div className="mt-10 space-y-4">
              {faqs.map(({ question, answer }) => (
                <article key={question} className="rounded-xl border border-[#d7d7d8] bg-white p-6">
                  <h3 className="text-lg font-bold">{question}</h3>
                  <p className="mt-2 leading-7 text-[#4a4e57]">{answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#212934] py-16 text-center text-white">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-3xl font-bold md:text-4xl">Have questions about California probate?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#f9f9fb]">
              Call {phoneDisplay} or fill out the form above for a free consultation.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={phoneHref} className="rounded-full bg-[#5aab32] px-7 py-4 font-bold text-white transition hover:bg-[#65bc7b]">
                Call {phoneDisplay}
              </a>
              <button
                type="button"
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-full border-2 border-[#65bc7b] px-7 py-3.5 font-bold text-white transition hover:bg-[#65bc7b]"
              >
                Fill Out the Form
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#212934] border-t border-white/15 py-8 text-center text-sm text-[#f9f9fb]">
        <div className="mx-auto max-w-7xl px-4">
          <p>Lawvex | Clovis, CA | Serving Fresno, Madera, San Luis Obispo, Kings, Monterey, San Benito &amp; Merced Counties.</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <span>© Copyright 2026 Lawvex</span>
            <span>•</span>
            <a href="/privacy-policy/" className="hover:text-[#65bc7b]">Privacy Policy</a>
            <span>•</span>
            <a href="/terms-of-service/" className="hover:text-[#65bc7b]">Terms of Service</a>
          </div>
        </div>
      </footer>

      <a
        href={phoneHref}
        className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-2 bg-[#5aab32] px-4 py-4 font-bold text-white shadow-lg md:hidden"
      >
        <Phone className="h-5 w-5" />
        Call {phoneDisplay} — Free Consultation
      </a>
    </div>
  );
};

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ProbateLawyerPage />
  </StrictMode>,
);
