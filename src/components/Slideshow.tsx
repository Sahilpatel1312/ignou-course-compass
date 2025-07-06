
import { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState } from "react";

const Slideshow = () => {
  const [api, setApi] = useState<CarouselApi>();

  const images = [
    {
      src: "/lovable-uploads/05dd41bd-8041-4ea2-8018-1b68c6703afb.png",
      alt: "IGNOU Ranked #1 in Open University Category - NIRF 2024"
    },
    {
      src: "/lovable-uploads/9437959f-3fc0-4892-8c57-e5888e1886a1.png",
      alt: "IGNOU Ministry of Education Award Recognition"
    },
    {
      src: "/lovable-uploads/fe5a0ed1-72a3-4d9d-b809-4277e2eb58ad.png",
      alt: "IGNOU UG New Admission for January 2025 session"
    }
  ];

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 7000); // 7 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="bg-white py-8 border-b">
      <div className="container mx-auto px-4">
        <Carousel
          setApi={setApi}
          className="w-full max-w-6xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg bg-gray-100">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default Slideshow;
