import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Star } from "lucide-react";

export const ClientTestimonialsSection = (): JSX.Element => {
  const testimonials = [
    {
      name: "Liz Silva",
      rating: 5,
      timeAgo: "Recent",
      text: "Gary and his team are great to work with. The staff is very proactive and organized. Gary made the whole process easy to understand. I recommend Lawvex to anyone planning their estate.",
      source: "Lawvex"
    },
    {
      name: "Carlos Torres",
      rating: 5,
      timeAgo: "Recent",
      text: "A++ We were lucky to find this attorney's office. They helped us change our small business into an S-Corporation. We continue to partner for future needs. Thank You.",
      source: "Lawvex"
    },
    {
      name: "Kevin Smith",
      rating: 5,
      timeAgo: "Recent",
      text: "Gary Winter and his associates at Lawvex provide outstanding legal assistance at a value for their Clients. The service is positive, professional, friendly and with a sense of urgency.",
      source: "Lawvex"
    },
    {
      name: "Cesar Anaya",
      rating: 5,
      timeAgo: "Recent",
      text: "Lawvex is a professional, trustworthy firm that treats their clients with the utmost respect and integrity. I highly recommend their services to anyone who needs help with a business transaction or estate/trusts. Best wishes to the lawvex team to continue to thrive!",
      source: "Lawvex"
    }
  ];

  return (
    <section className="w-full bg-lawvex-light py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-lawvex-dark text-3xl md:text-4xl font-bold text-center mb-12">
          Client Reviews
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border border-lawvex-gray shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-lawvex-accent rounded-full flex items-center justify-center">
                    <span className="font-body text-white font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-body text-lawvex-dark font-semibold text-sm">
                      {testimonial.name}
                    </h3>
                    <p className="font-body text-lawvex-dark/50 text-xs">
                      {testimonial.timeAgo}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="font-body text-lawvex-dark text-sm leading-relaxed line-clamp-4">
                  {testimonial.text}
                </p>
                <a
                  href="https://www.google.com/search?q=wosnik+law+georgia&sca_esv=aaa09739d5691e40&ei=h5cgafvqEIaN-d8PgayLmQ0&ved=0ahUKEwi7yo-B2YORAxWGRv4FHQHWItMQ4dUDCBE&uact=5&oq=wosnik+law+georgia&gs_lp=Egxnd3Mtd2l6LXNlcnAiEndvc25payBsYXcgZ2VvcmdpYTIFECEYoAEyBRAhGKABMgUQIRigAUjODlCgAljODXABeAGQAQCYAX6gAdMGqgEDMi42uAEDyAEA-AEBmAIJoALwBsICChAAGLADGNYEGEfCAgUQABiABMICBhAAGBYYHsICBRAAGO8FwgIIEAAYgAQYogTCAgsQABiABBiGAxiKBcICBBAhGBXCAgcQIRigARgKmAMAiAYBkAYIkgcDMi43oAeCHLIHAzEuN7gH6wbCBwUxLjYuMsgHEQ&sclient=gws-wiz-serp#lrd=0x88f5d1e30a86d521:0x5c677f5df8116ea0,1,,,,"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-lawvex-accent hover:underline text-sm mt-2 inline-block"
                >
                  Read more
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
