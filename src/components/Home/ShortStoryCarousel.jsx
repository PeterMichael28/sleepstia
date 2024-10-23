/* eslint-disable react/prop-types */
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import dpImg from "@/assets/dp.png";
import { cn } from "@/lib/utils";

const ShortStoryCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 7000, stopOnInteraction: true }));

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
    <div className="w-full">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="group relative w-full pb-8"
        setApi={setApi}
      >
        <CarouselContent className="m-0 h-full w-full p-0">
          {Array.from({ length: 3 }).map((d, i) => (
            <CarouselItem
              className="h-full w-full overflow-hidden p-0 md:p-10"
              key={i}
            >
              <p className="text-lg italic leading-[166%] text-[#4d533c] md:text-[24px]">
                I’m a very anxious person but use this and feel so relaxed and
                sleep way better now with the aid of sleepstiq.{" "}
              </p>

              <div className="mt-[80px] flex items-center gap-6 md:mt-10">
                <img
                  src={dpImg}
                  alt="dpImg"
                  className="size-[60px] rounded-full md:size-[84px]"
                />
                <div>
                  <h3 className="text-[18px] font-bold text-[#4d533c] md:text-[22px]">
                    James Miller
                  </h3>

                  <p className="mt-[6px] text-sm text-[#152934] md:text-base">
                    CEO, Techbias
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* navigations */}
        <div className="absolute top-1/2 flex w-full -translate-y-1/2 items-center justify-between px-1 py-0 transition-all duration-300 md:opacity-0 md:group-hover:opacity-100">
          <div className="flex w-full items-center justify-between gap-4">
            <CarouselPrevious className="!relative left-0 right-0 translate-y-0 border-none bg-transparent py-0 outline-none">
              <div className="flex size-7 items-center justify-center rounded-full bg-[rgba(2,7,9,0.30)] p-1 backdrop-blur-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M12 15L7 10L12 5"
                    stroke="#C0C3C4"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </CarouselPrevious>
            <CarouselNext className="!relative left-0 right-0 translate-y-0 border-none bg-transparent py-0 outline-none">
              <div className="flex size-7 items-center justify-center rounded-full bg-[rgba(2,7,9,0.30)] p-1 backdrop-blur-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M7 5L12 10L7 15"
                    stroke="white"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </CarouselNext>
          </div>
        </div>

        {/* dots */}
        {/* carousel dots */}
        <div className="absolute bottom-5 left-1/2 flex w-full -translate-x-1/2 items-center justify-center">
          <CarouselDots current={current} count={count} small={true} />
        </div>
      </Carousel>
    </div>
  );
};

export default ShortStoryCarousel;

function CarouselDots({ current, count, small }) {
  const visibleDots = 6;
  const halfVisible = Math.floor(visibleDots / 2);

  let start = Math.max(current - halfVisible, 1);
  const end = Math.min(start + visibleDots - 1, count);

  if (end - start + 1 < visibleDots) {
    start = Math.max(end - visibleDots + 1, 1);
  }

  const dots = Array.from({ length: visibleDots }, (_, i) => start + i);

  const activeDotSize = small ? "w-[6.5px] h-[6.5px]" : "w-[8px] h-[8px]";
  const dotSize = small ? "w-[4.5px] h-[4.5px]" : "w-[7px] h-[7px]";
  return (
    <div
      className={cn(
        "mt-4 flex items-center justify-center gap-1.5",
        small ? "gap-2" : "gap-2.5",
      )}
    >
      {dots.map((dot) => {
        if (dot > count) return null;
        const isActive = dot === current;
        const distanceFromActive = Math.abs(dot - current);

        return (
          <div
            key={dot}
            className={cn(
              "rounded-full transition-all duration-300 ease-in-out",
              isActive
                ? `bg-[#C4C4C4] ${activeDotSize}`
                : distanceFromActive <= 1
                  ? `bg-[#D6D5D5] ${activeDotSize}`
                  : `bg-[#D6D5D5] ${dotSize}`,
              dot < start || dot > end ? "opacity-0" : "opacity-100",
            )}
          />
        );
      })}
    </div>
  );
}
