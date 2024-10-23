import HomeHeroSection from "@/components/Home/HomeHeroSection";
import MissionSection from "@/components/Home/MissionSection";
import ProductReviewSection from "@/components/Home/ProductReviewSection";
import ShopSection from "@/components/Home/ShopSection";
import ShortStory from "@/components/Home/ShortStory";
import TestimonialSection from "@/components/Home/TestimonialSection";
import VisitShopSection from "@/components/Home/VisitShopSection";

const HomePage = () => {
  return (
    <div>
      <HomeHeroSection />
      <ShortStory />
      <TestimonialSection />
      {/* divider */}
      <div className="mx-auto h-[1px] w-full max-w-[1100px] bg-[rgba(33,56,66,0.10)]" />
      <ShopSection />
      <MissionSection />
      <VisitShopSection />

      {/* divider */}
      <div className="mx-auto my-10 h-[1px] w-full max-w-[1100px] bg-[rgba(33,56,66,0.10)] md:my-20" />

      <ProductReviewSection />
    </div>
  );
};

export default HomePage;
