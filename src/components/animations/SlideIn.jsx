/* eslint-disable react/prop-types */

import { motion } from "framer-motion";

const SlideInComponent = ({
  direction = "bottom",
  delay = 0.2,
  duration = 1.5,
  from = 90,
  viewportAmount = 0.5,
  damping = 9,
  className,
  children,
}) => {
  // Set the initial and final values based on the direction
  let initial = { y: 0, x: 0, opacity: 0 };
  if (direction === "top") {
    initial = { y: -from, opacity: 0 };
  } else if (direction === "bottom") {
    initial = { y: from, opacity: 0 };
  } else if (direction === "left") {
    initial = { x: -from, opacity: 0 };
  } else if (direction === "right") {
    initial = { x: from, opacity: 0 };
  }

  const slideInVariant = {
    hidden: initial,
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 40,
        damping,
        duration,
        delay,
      },
    },
  };

  return (
    <motion.div
      variants={slideInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount }} // Trigger when 50% of the element is in view
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideInComponent;
