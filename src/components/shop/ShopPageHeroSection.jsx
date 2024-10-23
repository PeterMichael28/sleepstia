import shopBg from "@/assets/shop/shopBg.webp";
import { useTypewriter } from "react-simple-typewriter";

const ShopPageHeroSection = () => {
  const [text, count] = useTypewriter({
    words: ["Open to work"],
    loop: true,
    delaySpeed: 3000,
  });
  return (
    <section>
      <div className="relative h-[450px] w-full overflow-hidden pt-[90px] md:h-[calc(100vh-80px)]">
        <div>
          <img
            src={shopBg}
            alt=""
            className="absolute -right-[580px] top-0 h-[500px] md:h-full w-full max-md:min-w-[1200px] md:inset-0"
          />
          <div className="relative mx-auto max-w-[1200px] px-4">
            {/* text */}
            <div className="pt-24 md:pt-36">
              <p className="text-primary400 text-lg">
                We&apos;re here to help you
              </p>
              <h1 className="text-primary400 mt-4 text-[42px] font-bold leading-[123%] md:text-[60px]">
                Relax & Rest
              </h1>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopPageHeroSection;
