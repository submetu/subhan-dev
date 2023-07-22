import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import * as React from "react";
import { homeAnimationConfig } from "./home";
import { IBackgroundRotate } from "./IBackgroundRotate";

export const BackgroundRotateAntiClockwise: React.FC<
  IBackgroundRotate &
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
> = (props) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const x = useTransform(scrollYProgress, [0, 1], [120, -1000]);
  return (
    <motion.div
      animate={{ rotate: [0, 0, -5, -5, 0] }}
      transition={homeAnimationConfig.inifiniteRotate.transition}
      className={`w-80 h-80`}
      style={{ right: x, scale, top: props.top, position: "absolute" }}
    >
      {props.children}
    </motion.div>
  );
};

export default BackgroundRotateAntiClockwise;
