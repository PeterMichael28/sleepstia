import SlideInComponent from "../animations/SlideIn";

/* eslint-disable react/prop-types */
const FaqHeroSection = ({ searchValue = "", setSearchValue = () => {} }) => {
  return (
    <section>
      <div className="bg-butterColor relative h-[450px] max-h-[596px] w-full overflow-hidden pt-[90px] md:h-screen">
        <div className="relative mx-auto max-w-[1116px] px-4">
          {/* text */}
          <div className="pt-24 md:pt-36">
            <SlideInComponent from={50} damping={7} direction="right">
              <p className="text-lg text-primary400">
                We&apos;re here to help you
              </p>
            </SlideInComponent>

            <SlideInComponent
              from={50}
              damping={7}
              direction="right"
              delay={0.4}
            >
              <h1 className="mt-4 text-[32px] font-bold leading-[123%] text-primary400 md:text-[60px]">
                How can we assist?
              </h1>
            </SlideInComponent>

            {/* search input */}
            <SlideInComponent
              from={50}
              damping={7}
              direction="right"
              delay={0.7}
            >
              <div className="mt-5 flex h-[75px] w-full max-w-[859px] items-center gap-4 rounded-[10px] bg-white px-4 sm:px-7 md:gap-6 md:px-10 lg:px-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_1791)">
                    <path
                      d="M13.3333 22.6667C18.488 22.6667 22.6667 18.488 22.6667 13.3333C22.6667 8.17868 18.488 4 13.3333 4C8.17868 4 4 8.17868 4 13.3333C4 18.488 8.17868 22.6667 13.3333 22.6667Z"
                      stroke="#2C3E50"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M28 28L20 20"
                      stroke="#2C3E50"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1791">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <input
                  type="text"
                  className="flex h-full w-full items-center border-none outline-none placeholder:text-primary400 md:text-lg md:placeholder:text-lg"
                  placeholder="Search FAQs here"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
            </SlideInComponent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqHeroSection;
