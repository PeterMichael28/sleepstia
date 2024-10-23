/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const FadeInComponent = ({
  delay = 0.2,
  duration = 1.5,
  viewportAmount = 0.5,
  children,
}) => {
  const fadeInVariant = {
    hidden: { opacity: 0, scale: 0.95 }, // Slightly scaled down
    visible: {
      opacity: 1,
      scale: 1, // Apply scale effect if provided
      transition: {
        duration,
        delay,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  return (
    <motion.div
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount }} // Trigger when the element is in view
      style={{ transformOrigin: "center" }} // Ensure the scaling starts from the center
      className="w-fit"
    >
      {children}
    </motion.div>
  );
};

export default FadeInComponent;
