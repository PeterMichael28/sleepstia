import missionImg from "@/assets/mssionImg.webp";

const MissionSection = () => {
  return (
    <section className="my-10 flex max-w-[1300px] flex-col items-center gap-7 p-4 max-md:mx-auto md:my-28 md:ml-auto md:flex-row-reverse md:gap-[86px] md:px-0">
      {/* image */}
      <div className="relative flex w-full max-w-[700px] items-center justify-center border">
        <img
          src={missionImg}
          alt="missionImg"
          className="w-full transition-all duration-300 hover:grayscale md:h-[500px]"
        />
      </div>
      <div className="w-full max-w-[452px] text-center md:text-left">
        <h2 className="text-primary400 text-[24px] font-bold leading-[133%] md:text-[36px]">
          Our Mission
        </h2>
        <p className="mt-7 text-base leading-[162%] text-[rgba(33,56,66,0.60)]">
          We started Sleepstiq with 1 simple goal: to be your best friend at
          bedtime. We, just like you, deal with stress, unease, and trouble
          sleeping from a number of silly things like school, work, screens,
          numbers, and people. That&apos;s why we created products that aim to
        </p>

        <ul className="mt-7">
          {[
            "Promote Calm",
            "Support Sleep",
            "Reduce Stress",
            "Aid Relaxation",
          ].map((li, i) => (
            <li
              key={i}
              className="text-base leading-[162%] text-[rgba(33,56,66,0.60)]"
            >
              <span>✓</span> <span>{li}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MissionSection;
