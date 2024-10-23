import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import Navdata from "./Navdata";
import MobileNav from "./MobileNav";
import ShopNowBtn from "@/components/Home/ShopNowBtn";

// import MobileNav from "./MobileNav";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 90);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      // Cleanup function to remove event listener on unmount
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-[80] w-full",
        isScrolled ? "bg-white/70 backdrop-blur-md" : "",
      )}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4 md:gap-[171px] md:py-6">
        <Link to="/">
          <img
            src="./logo.webp"
            className="h-[45px] w-[71px] md:h-[51px] md:w-[81px]"
          />
        </Link>

        <div className="hidden md:block">
          <Navdata />
        </div>

        <div className="hidden md:block">
          <ShopNowBtn classNames="w-[125px]" label="Shop Now" />
        </div>
        {/* mobile nav */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
