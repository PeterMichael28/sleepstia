import React from "react";
import ShopNowBtn from "./ShopNowBtn";
import SlideInComponent from "../animations/SlideIn";

const VisitShopSection = () => {
  return (
    <section className="my-14 md:my-32">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-4">
        <SlideInComponent from={50} damping={7}>
          <h2 className="text-[24px] font-bold leading-[185%] text-primary400 md:text-[36px]">
            Visit Our Shop
          </h2>
        </SlideInComponent>

        <SlideInComponent from={50} damping={7} delay={0.4}>
          <p className="mx-auto mt-4 max-w-[915px] text-center text-base leading-[162%] text-[rgba(33,56,66,0.60)]">
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p>
        </SlideInComponent>

        <SlideInComponent from={50} damping={7} delay={0.7}>
          <div className="mt-6 flex w-full justify-center">
            <ShopNowBtn />
          </div>
        </SlideInComponent>
      </div>
    </section>
  );
};

export default VisitShopSection;
