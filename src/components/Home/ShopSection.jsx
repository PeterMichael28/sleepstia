import shopImg from "@/assets/shop.webp";
import ShopNowBtn from "./ShopNowBtn";

const ShopSection = () => {
  return (
    <section className="flex max-w-[1300px] flex-col items-center gap-20 p-4 md:px-0 md:flex-row md:gap-[56px] my-10">
      {/* image */}
      <div className="relative flex w-full max-w-[800px] items-center justify-center">
        <img src={shopImg} alt="shopImg" className="md:h-[600px]" />
        {/* absolute card */}
        <div className="absolute bottom-5 md:bottom-10 right-0 flex w-full max-w-[452px] flex-col rounded-md bg-white p-4 md:p-7 text-sm italic leading-[162%] text-[#4D533C] shadow-[50px_50px_60px_rgba(0,0,0,0.15)] md:text-base">
          <span>😊 Promotes calm and relaxation.</span>
          <span>💤 Inhalation allows for a rapid effect.</span>
          <span>😊 Promotes calm and relaxation.</span>
          <span>✅ 100% drug-free, plant-based ingredients.</span>
          <span> ‍⚕️ 3rd-party lab tested.</span>
        </div>
      </div>
      <div className="w-full max-w-[452px] text-center md:text-left">
        <h2 className="text-primary400 text-[24px] font-bold leading-[133%] md:text-[36px]">
          Shop Now
        </h2>
        <p className="mt-6 text-base leading-[162%] text-[rgba(33,56,66,0.60)]">
          Our Personal Diffuser is an aromatherapy device that contains a blend
          of melatonin, lavender, and chamomile. A few breaths of our
          plant-based essential oil mist will mellow you out, quiet the mind,
          and lull you to bed.
        </p>

        <div className="mt-7 flex justify-center md:justify-start">
          <ShopNowBtn />
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
