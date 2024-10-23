import FadeInComponent from "../animations/FadeInComponentProps";
import SlideInComponent from "../animations/SlideIn";
import ShortStoryCarousel from "./ShortStoryCarousel";
import { IoMdArrowDropright } from "react-icons/io";
const ShortStory = () => {
  return (
    <section className="my-10 mb-20 md:my-5">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-x-8 gap-y-16 px-4 py-10 md:flex-row md:justify-between">
        {/* text */}
        <div className="max-w-[457px]">
          <SlideInComponent from={50}>
            <span className="text-sm text-primary400">Our Amazing Story</span>
          </SlideInComponent>

          <SlideInComponent from={50} delay={0.4}>
            <h2 className="relative mt-[29px] text-[24px] font-bold leading-[127%] text-primary400 md:text-[36px]">
              <span className="relative">10k+Happy Customers</span>
              <span className="absolute right-5 top-3 hidden h-[47px] w-full max-w-[247px] bg-[rgba(255,215,35,0.10)] md:block"></span>
            </h2>
          </SlideInComponent>

          <SlideInComponent from={50} delay={0.7}>
            <p className="mt-7 leading-[162%] text-[rgba(33,56,66,0.60)] md:mt-[56px]">
              There’s no secret sauce, no wizard behind the curtain. What makes
              Aerolab tick is an interdisciplinary team with a framework that
              fosters candid collaboration.
            </p>
          </SlideInComponent>

          <SlideInComponent from={50} damping={7} delay={1}>
            <p className="mt-6 flex items-center gap-1 font-bold text-primary400 underline underline-offset-4">
              <IoMdArrowDropright className="text-primary400" />
              <span>More know About us</span>
            </p>
          </SlideInComponent>
        </div>

        {/* carousel */}
        <FadeInComponent delay={1.2}>
          <div className="w-full max-w-[474px] bg-[#FBF9F2] shadow-[0px_100px_60px_0px_rgba(0,0,0,0.15)] transition-shadow duration-300 hover:shadow-[0px_100px_110px_5px_rgba(0,0,0,0.20)]">
            <ShortStoryCarousel />
          </div>
        </FadeInComponent>
      </div>
    </section>
  );
};

export default ShortStory;
