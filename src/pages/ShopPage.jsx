import TestimonialSection from "@/components/Home/TestimonialSection";
import AboutProductSection from "@/components/shop/AboutProductSection";
import ShopPageHeroSection from "@/components/shop/ShopPageHeroSection";

const ShopPage = () => {
  return (
    <div>
      <ShopPageHeroSection />
      <AboutProductSection />
      {/* divider */}
      <div className="mx-auto mt-10 h-[1px] w-full max-w-[1100px] bg-[rgba(33,56,66,0.10)] md:mt-20" />

      <TestimonialSection />
    </div>
  );
};

export default ShopPage;
