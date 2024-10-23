import FaqHeroSection from "@/components/faq/FaqHeroSection";
import FaqsSection from "@/components/faq/FaqsSection";
import { useState } from "react";

const FAQPage = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      <FaqHeroSection
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <FaqsSection searchValue={searchValue} />
    </div>
  );
};

export default FAQPage;
