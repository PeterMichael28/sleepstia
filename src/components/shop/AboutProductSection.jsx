import productImg from "@/assets/shop/productImg.webp";
import { useState } from "react";
import ShopNowBtn from "../Home/ShopNowBtn";

const AboutProductSection = () => {
  const [units, setUnits] = useState(1);

  const handleChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setUnits(value);
  };

  return (
    <section className="w-full py-16 md:py-28">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col-reverse items-center gap-8 px-4 md:flex-row md:justify-between">
        {/* image */}
        <div className="relative flex w-full max-w-[477px] items-center justify-center">
          <img src={productImg} alt="productImg" className="md:h-[500px]" />
        </div>

        {/* text */}
        <div className="w-full max-w-[452px] text-center md:text-left">
          <h2 className="text-[32px] font-bold leading-[133%] text-primary400 md:text-[36px]">
            About Product
          </h2>
          <p className="mt-6 text-base leading-[162%] text-[rgba(33,56,66,0.60)]">
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p>

          <div className="max-md:mx-auto mt-4 flex w-fit flex-col items-start gap-1 text-sm italic leading-[162%] text-[#4D533C] md:text-base">
            <span>😊 Promotes calm and relaxation.</span>
            <span>💤 Inhalation allows for a rapid effect.</span>
            <span>😊 Promotes calm and relaxation.</span>
            <span>✅ 100% drug-free, plant-based ingredients.</span>
            <span> ‍⚕️ 3rd-party lab tested.</span>
          </div>

          {/* unit and price */}
          <div className="mt-10 md:mt-5 flex gap-8 w-fit max-md:mx-auto ">
            {/* price */}
            <div className="flex min-w-[90px] flex-col">
              <span className="leading-[162%] text-black">Price</span>
              <span className="mt-4 font-semibold leading-[162%] text-black">
                USD {units * 50}
              </span>
            </div>

            {/* unit */}
            <div className="flex flex-col">
              <span className="leading-[162%] text-black">Unit</span>

              <input
                type="number"
                name="unit"
                id="unit"
                className="mt-4 flex h-[33px] w-[63px] items-center justify-center rounded-[5px] border border-primary400 px-4 font-semibold leading-[162%] text-black outline-none"
                value={units < 1 ? 1 : units}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* cta */}
          <div className="mt-8 flex items-center justify-center md:justify-start">
            <ShopNowBtn label="Buy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProductSection;
