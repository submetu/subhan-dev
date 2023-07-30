import { motion } from "framer-motion";
import * as React from "react";

interface ICenterRowItem {
  delay?: number;
  initialX?: number;
  className?: string;
}
const CenterRowItem: React.FC<React.PropsWithChildren & ICenterRowItem> = ({
  children,
  delay,
  initialX,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: initialX ?? -30, scale: 1.2 }}
      transition={{
        delay: delay ?? 0,
        type: "spring",
        bounce: 0.5,
        duration: 1,
      }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className={className ?? ""}
    >
      {children}
    </motion.div>
  );
};

export default CenterRowItem;
