import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import * as React from "react";
import { homeAnimationConfig } from "./homeAnimationConfig";
import { IBackgroundRotate } from "./IBackgroundRotate";

export const BackgroundRotateAntiClockwise: React.FC<
  IBackgroundRotate &
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
> = (props) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const x = useTransform(scrollYProgress, [0, 1], [props.xStart ?? 130, -1000]);
  return (
    <motion.div
      animate={{ rotate: [0, 0, -5, -5, 0] }}
      transition={homeAnimationConfig.inifiniteRotate.transition}
      style={{ right: x, scale, top: props.top, position: "absolute" }}
    >
      {props.children}
    </motion.div>
  );
};

export default BackgroundRotateAntiClockwise;
