
import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import penImg from "@/assets/pen.png";

const ProductReviewSection = () => {
  return (
    <section className="my-10 w-full md:my-20 md:mb-[100px]">
      <div className="ml-auto max-w-[1300px] px-4">
        <h2 className="text-[24px] font-bold leading-[127%] text-[#4d533c] md:text-[36px]">
          Product Reviews
        </h2>

        {/* carousel */}
        <div className="">
          <ProductReviewCarousel />
        </div>
      </div>
    </section>
  );
};

export default ProductReviewSection;

const ProductReviewCarousel = () => {
 

  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto w-full">
      <Carousel
        
        className="group relative w-full"
        setApi={setApi}
      >
        <CarouselContent className="m-0 h-full w-full gap-[53px] pt-16 pb-[150px] md:pt-[72px] md:pl-8">
          {Array.from({ length: 12 }).map((d, i) => (
            <CarouselItem
              className="h-full w-full max-w-[306px] overflow-hidden rounded-md bg-white p-0 shadow-[10px_10px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 hover:shadow-[20px_20px_60px_rgba(0,0,0,0.15)]"
              key={i}
            >
              <img src={penImg} alt="penImg" className="h-[210px] w-full" />
              <div className="p-5 md:p-8">
                <p className="italic leading-[162%] text-[#4d533c]">
                  Works great! Just use it and then relax, I fall asleep with no
                  problem every time I use it.
                </p>

                <div className="mt-8">
                  <h3 className="text-base font-bold text-[#4d533c]">
                    Rachel Dill
                  </h3>

                  <div className="mt-[9px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="12"
                      viewBox="0 0 100 12"
                      fill="none"
                    >
                      <path
                        d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                        fill="#27AE60"
                      />
                      <path
                        d="M50 0L51.3471 4.1459H55.7063L52.1796 6.7082L53.5267 10.8541L50 8.2918L46.4733 10.8541L47.8204 6.7082L44.2937 4.1459H48.6529L50 0Z"
                        fill="#27AE60"
                      />
                      <path
                        d="M28 0L29.3471 4.1459H33.7063L30.1796 6.7082L31.5267 10.8541L28 8.2918L24.4733 10.8541L25.8204 6.7082L22.2937 4.1459H26.6529L28 0Z"
                        fill="#27AE60"
                      />
                      <path
                        d="M94 0L95.3471 4.1459H99.7063L96.1796 6.7082L97.5267 10.8541L94 8.2918L90.4733 10.8541L91.8204 6.7082L88.2937 4.1459H92.6529L94 0Z"
                        fill="#27AE60"
                      />
                      <path
                        d="M72 0L73.3471 4.1459H77.7063L74.1796 6.7082L75.5267 10.8541L72 8.2918L68.4733 10.8541L69.8204 6.7082L66.2937 4.1459H70.6529L72 0Z"
                        fill="#27AE60"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
