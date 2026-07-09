import React from "react";
import { useState } from "react";
import { Phone, MapPin } from "lucide-react";

export const ContactSectionMeta = (): JSX.Element => {
  const [smsConsent, setSmsConsent] = useState("not agreed");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;

    const payload = new FormData(form);

    // Trigger WhatConverts lead capture
    if (typeof window !== 'undefined' && (window as any).$wc_leads) {
      (window as any).$wc_leads.formData = Object.fromEntries(payload);
    }

    fetch("/?no-cache=true", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(payload as any).toString(),
    })
      .then(() => {
        // Redirect to thank you page after successful submission
        window.location.href = "/thank-you";
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        alert("There was an issue submitting your form. Please try again or call us at (559) 249-5237.");
      });

    e.preventDefault();
  };

  return (
    <section id="contact" className="w-full bg-lawvex-light py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-lawvex-dark text-3xl md:text-4xl font-bold mb-4">
            Contact Lawvex
          </h2>
          <p className="font-body text-lawvex-dark text-lg">
            Speak with our professional intake team about your case today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="font-heading text-lawvex-dark text-2xl font-bold mb-6">
              Request Your Fee Quote
            </h3>
            <form
              id="contact-form"
              name="estate-lp-form"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="estate-lp-form" />
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="subject" value="New Lawvex Contact Form Submission" />
              <input type="hidden" name="smsConsent" value={smsConsent} />
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full px-4 py-3 border border-lawvex-gray rounded font-body text-sm focus:outline-none focus:border-lawvex-accent"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 border border-lawvex-gray rounded font-body text-sm focus:outline-none focus:border-lawvex-accent"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  required
                  className="w-full px-4 py-3 border border-lawvex-gray rounded font-body text-sm focus:outline-none focus:border-lawvex-accent"
                />
              </div>

              <label className="flex items-start gap-3 text-xs leading-5 text-gray-600">
                <input
                  type="checkbox"
                  checked={smsConsent === "agreed"}
                  onChange={(event) => setSmsConsent(event.target.checked ? "agreed" : "not agreed")}
                  className="mt-0.5 h-4 w-4 rounded border-lawvex-gray text-lawvex-accent focus:ring-lawvex-accent"
                />
                <span>
                  Yes, I would like to receive automated marketing text messages from Lawvex, LLP at the phone number provided above, including review requests and customer feedback requests. Message frequency varies. Message and data rates may apply. Reply STOP to opt out and HELP for assistance.
                  <br />
                  <strong>Message Frequency:</strong> You will receive up to 3 messages per month
                  <br />
                  <strong>Standard Rates:</strong> Message and data rates may apply depending on your mobile phone service plan.
                  <br />
                  <strong>Help &amp; Stop:</strong> Reply HELP for help or STOP to cancel any time. By providing your phone number and checking the box above, you agree to receive text messages from Lawvex, LLP.
                  <br />
                  <a href="/terms-of-service/" className="text-lawvex-accent underline">
                    Terms of Service
                  </a>{" "}
                  |{" "}
                  <a href="/privacy-policy/" className="text-lawvex-accent underline">
                    Privacy Policy
                  </a>
                </span>
              </label>

              <div>
                <select
                  name="serviceNeeded"
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 border border-lawvex-gray rounded font-body text-sm text-lawvex-dark focus:outline-none focus:border-lawvex-accent"
                >
                  <option value="" disabled>Matter Type</option>
                  <option value="Estate Planning">Estate Planning</option>
                  <option value="Probate/Small Estate Affidavit">Probate/Small Estate Affidavit</option>
                  <option value="Trust Administration">Trust Administration</option>
                  <option value="Corporate (Business Formation/Annual Maintenance/Transaction)">Corporate (Business Formation/Annual Maintenance/Transaction)</option>
                  <option value="Real Estate (Deed Transfer/Transaction)">Real Estate (Deed Transfer/Transaction)</option>
                </select>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your estate planning or probate needs"
                  rows={5}
                  className="w-full px-4 py-3 border border-lawvex-gray rounded font-body text-sm focus:outline-none focus:border-lawvex-accent resize-none"
                ></textarea>
              </div>


              <button
                type="submit"
                className="w-full bg-lawvex-accent hover:bg-lawvex-accent/80 text-white font-inter font-medium text-sm px-8 py-3 rounded-full border border-lawvex-accent transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap inline-block"
              >
                Request Free Quote
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-heading text-lawvex-dark text-2xl font-bold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-lawvex-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body text-lawvex-dark font-medium">(559) 249-5237</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-heading text-lawvex-dark text-2xl font-bold mb-6">
                Office Location
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-lawvex-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body text-lawvex-dark font-medium mb-1">Clovis Office:</p>
                    <p className="font-body text-lawvex-dark">2565 Alluvial Ave Suite 202</p>
                    <p className="font-body text-lawvex-dark">Clovis, CA 93611</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-lawvex-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body text-lawvex-dark font-medium mb-1">Madera Office:</p>
                    <p className="font-body text-lawvex-dark">110 N D St.</p>
                    <p className="font-body text-lawvex-dark">Madera, CA 93638</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-lawvex-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body text-lawvex-dark font-medium mb-1">Solvang Office:</p>
                    <p className="font-body text-lawvex-dark">595 Alamo Pintado Rd</p>
                    <p className="font-body text-lawvex-dark">Solvang, CA 93463</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.8305831330804!2d-119.666366!3d36.8465333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945b142f444a53%3A0x57c1775d9af924a0!2sLawvex%2C%20LLP!5e0!3m2!1sen!2srs!4v1778502358786!5m2!1sen!2srs"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lawvex Office Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
