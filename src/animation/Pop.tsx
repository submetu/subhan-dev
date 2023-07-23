import { motion } from "framer-motion";
import * as React from "react";
import { homeAnimationConfig } from "./homeAnimationConfig";

export const Pop: React.FC<React.PropsWithChildren & any> = (props) => {
  return (
    <motion.div
      initial={homeAnimationConfig.pop.initial}
      animate={homeAnimationConfig.pop.animate}
      {...props}
    >
      {props.children}
    </motion.div>
  );
};

export default Pop;
