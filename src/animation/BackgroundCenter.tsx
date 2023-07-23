import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import * as React from "react";

export const BackgroundCenter: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (props) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const scale = useTransform(scaleX, [0, 1], [1, 0]);
  return <motion.div style={{ scale:scale }}>{props.children}</motion.div>;
};

export default BackgroundCenter;
