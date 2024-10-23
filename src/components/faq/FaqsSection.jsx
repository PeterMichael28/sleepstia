/* eslint-disable react/prop-types */
import FaqTabs from "./FaqTabs";

const FaqsSection = ({ searchValue = "" }) => {
  return (
    <section className="py-16 md:py-[71px]">
      {/* tabs */}
      <FaqTabs searchValue={searchValue} />
    </section>
  );
};

export default FaqsSection;
