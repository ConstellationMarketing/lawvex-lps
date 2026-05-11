import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";

export const BadgesSection = (): JSX.Element => {
  const badges = [
    { src: "https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F39c0cb8605f344f7afe971196d3a95a3?format=webp&width=800&height=1200", alt: "Probate Pathway Founding Member 2024" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2Fd220120abe32490aa0383524ef25553f?format=webp&width=800&height=1200", alt: "Santa Barbara County Bar Association" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F58470aea775943f7afc8549c955295f6?format=webp&width=800&height=1200", alt: "Fresno County Bar Association" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F029f62feb8ac470da5dce4a4b5501981?format=webp&width=800&height=1200", alt: "Best Probate Attorneys of Fresno 2020" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2Fe949cf72e78748519e39b96c9c94b209?format=webp&width=800&height=1200", alt: "Santa Inez Valley Best Law Valley 2023" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F26ea081f9f9e44d38b543eb106af3f64?format=webp&width=800&height=1200", alt: "Best of the Valley 2022 Winner" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F3168044bace9403bb47638bf30ea1a7e?format=webp&width=800&height=1200", alt: "Law Firm 500 Winner 2023" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F1c38a3f8fba8499aa843bfed59a6bc80?format=webp&width=800&height=1200", alt: "Law Firm 500 Honoree 2022" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F8a6ac7b5ffbc410aa2219c86471d64de?format=webp&width=800&height=1200", alt: "Lawvex Law Firm 500" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F6e3bd96525e647e6916163a5bac0dee4?format=webp&width=800&height=1200", alt: "California Fresno Probate Lawyers 2020" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F8dd3f52d8f4e477ab894afe306ee8883?format=webp&width=800&height=1200", alt: "Super Lawyers" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F901db191d3454440a9c35fc575dc1e35?format=webp&width=800&height=1200", alt: "Avvo 10.0 Superb Attorney" },
  ];

  return (
    <section className="w-full bg-lawvex-light py-6 md:py-10">
      <div className="container mx-auto max-w-7xl">
        <div className="relative max-w-6xl mx-auto px-16 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {badges.map((badge, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/5">
                  <div className="p-4 flex items-center justify-center h-40 w-full">
                    <img
                      src={badge.src}
                      alt={badge.alt}
                      className="max-h-32 max-w-full object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-lawvex-accent text-lawvex-dark hover:bg-lawvex-accent/80 border-lawvex-accent" />
            <CarouselNext className="bg-lawvex-accent text-lawvex-dark hover:bg-lawvex-accent/80 border-lawvex-accent" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
