/* eslint-disable react/prop-types */
import { cn } from "@/lib/utils";
import { childVariants, staggerContainer } from "@/lib/variants";
import { motion } from "framer-motion";
import { useState } from "react";

// Utility function to highlight text
const highlightText = (text, searchTerm) => {
  if (!searchTerm || !text) return text;

  const parts = text.split(new RegExp(`(${searchTerm})`, "gi"));

  return parts.map((part, index) =>
    part.toLowerCase() === searchTerm.toLowerCase() ? (
      <span key={index} className="bg-yellow-100 font-medium text-primary400">
        {part}
      </span>
    ) : (
      part
    ),
  );
};

const AllFaqs = ({ faqData, searchValue = "" }) => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      //  animate="show"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className="mx-auto mt-5 space-y-4 text-left"
    >
      {faqData.map((faq) => (
        <SingleFAQ
          toggleTab={(tab) => toggleTab(tab)}
          activeTab={activeTab}
          num={faq.id}
          key={faq.id}
          question={faq.question}
          answer={faq.answer}
          searchValue={searchValue}
        />
      ))}
    </motion.div>
  );
};

export default AllFaqs;

export function SingleFAQ({
  toggleTab,
  activeTab,
  num,
  answer,
  question,
  searchValue,
}) {
  const active = activeTab === num;

  return (
    <motion.div
      variants={childVariants}
      className="border-t border-[#BDBDBD] px-3 pt-[18px]"
    >
      <button
        className="flex w-full items-center justify-between"
        onClick={() => toggleTab(num)}
      >
        <span
          className={cn(
            "text-left font-normal text-primary400 md:text-[18px]",
            active && "font-semibold",
          )}
        >
          <span>Q{num}:</span>{" "}
          <span>{highlightText(question, searchValue)}</span>
        </span>
      </button>

      <div
        className={`mt-4 h-0 transition-all duration-500 ${
          active && "h-[170px] md:h-[110px]"
        } overflow-hidden`}
      >
        <p className="pr-4 text-[.9rem] text-black md:text-base">
          {highlightText(answer, searchValue)}
        </p>
      </div>
    </motion.div>
  );
}
