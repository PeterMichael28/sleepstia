import Marquee from "react-fast-marquee";
import googleLogo from "@/assets/logo/googleLogo.webp";
import forbesLogo from "@/assets/logo/forbesLogo.webp";
import bloombergLogo from "@/assets/logo/bloombergLogo.webp";
import sleepLogo from "@/assets/logo/sleepLogo.webp";
import influenceLogo from "@/assets/logo/influenceLogo.webp";

const logos = [
  { src: googleLogo, alt: "Google Logo", className: "h-[51px] w-[146px]" },
  { src: forbesLogo, alt: "Forbes Logo", className: "h-[32px] w-auto" },
  { src: bloombergLogo, alt: "Bloomberg Logo", className: "h-[44px] w-auto" },
  { src: sleepLogo, alt: "Sleep Logo", className: "h-[48px] w-auto" },
  { src: influenceLogo, alt: "Influence Logo", className: "h-[48px] w-auto" },
];

export default function LogosSection2() {
  return (
    <div className="relative ml-auto flex h-[110px] max-w-7xl items-center overflow-hidden rounded-lg bg-white shadow-[50px_50px_100px_0px_rgba(0,0,0,0.15)]">
      <div className="px-0  lg:px-8">
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          className="flex items-center"
        >
          {logos.concat(logos).map((logo, index) => (
            <div
              key={index}
              className="mx-4 flex items-center justify-center md:mx-8"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`${logo.className} object-contain`}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
