import { motion } from "framer-motion";
import * as React from "react";
import { SocialIcon } from "react-social-icons";
import Pop from "../animation/Pop";

const SocialIcons = () => {
  return (
    <Pop
      transition={{ duration: 0.65, delay: 0.3 }}
      className="container text-center"
    >
      <div className="inline-block">
        <div className="flex justify-center gap-2 dark:bg-aliceblue p-4 transition-colors duration-1000	 rounded-lg">
          <motion.div whileHover={{ scale: 1.1 }}>
            <SocialIcon
              target="_blank"
              url="https://medium.com/@sub.metu"
              className="flex-initial icon"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <SocialIcon
              target="_blank"
              url="https://linkedin.com/in/subhannaeem"
              className="flex-initial icon"
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <SocialIcon
              target="_blank"
              url="https://github.com/submetu"
              className="flex-initial icon"
            />
          </motion.div>
        </div>
      </div>
    </Pop>
  );
};

export default SocialIcons;
