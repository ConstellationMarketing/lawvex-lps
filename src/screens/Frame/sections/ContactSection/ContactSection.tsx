import React from "react";
import { Phone, MapPin } from "lucide-react";

export const ContactSection = (): JSX.Element => {
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
              name="lawvex-contact"
              method="POST"
              data-netlify="true"
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="lawvex-contact" />
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
                className="w-full bg-lawvex-accent hover:bg-lawvex-accent/80 text-lawvex-dark font-inter font-medium text-sm px-8 py-3 rounded-full border border-lawvex-accent transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap inline-block"
              >
                Request Fee Quote
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
                    <p className="font-body text-lawvex-dark font-medium">(559) 418-6587</p>
                    <p className="font-body text-gray-600 text-sm">Monday-Friday, 9am-5pm</p>
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
                    <p className="font-body text-lawvex-dark mb-2">Clovis, CA 93611</p>
                    <p className="font-body text-gray-600 text-sm">tisha@lawvex.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="w-full h-96 bg-lawvex-gray flex items-center justify-center">
            <span className="text-lawvex-dark/50 font-body">Map Placeholder - Office Location</span>
          </div>
        </div>
      </div>
    </section>
  );
};
