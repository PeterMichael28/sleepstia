import LogosSection2 from "@/components/Home/LogoSection2";
import heroBg from "@/assets/heroBg.webp";
import ShopNowBtn from "./ShopNowBtn";
import SlideInComponent from "../animations/SlideIn";

const HomeHeroSection = () => {
  return (
    <section className="overflow-hidden">
      <div className="relative h-[550px] w-full overflow-hidden pt-[90px] md:h-[calc(100vh-80px)]">
        <div>
          <img
            src={heroBg}
            alt=""
            className="absolute -right-[280px] top-0 h-full w-full min-w-[1200px] md:inset-0"
          />
          <div className="relative mx-auto max-w-[1200px] px-4">
            {/* text */}
            <div className="pt-12 md:pt-20">
              <SlideInComponent from={50} damping={7}>
                <p className="text-primary400 md:text-lg">
                  We&apos;re here to help you
                </p>
              </SlideInComponent>
              <SlideInComponent from={50} damping={7} delay={0.4}>
                <h1 className="mt-4 text-[32px] font-bold leading-[123%] text-primary400 md:text-[60px]">
                  Relax & Rest
                </h1>
              </SlideInComponent>

              <SlideInComponent from={50} damping={7} delay={0.7}>
                <p className="mt-4 max-w-[581px] leading-[162%] text-primary400">
                  With the aid of our Melatonin Sleepstiq, we can assure you
                  that you can get quality sleep.
                </p>
              </SlideInComponent>

              <SlideInComponent from={50} damping={7} delay={1}>
                <div className="mt-6">
                  <ShopNowBtn />
                </div>
              </SlideInComponent>
            </div>
          </div>
        </div>
      </div>

      {/* large screen logos */}
      <div className="relative hidden h-[180px] w-full bg-white md:block">
        <div className="absolute -top-14 right-0 z-50">
          <LogosSection2 />
        </div>
      </div>

      {/* small logos */}
      <div className="relative h-[100px] w-full bg-white md:hidden ">
        <LogosSection2 />
      </div>
    </section>
  );
};

export default HomeHeroSection;
