import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import Switch from "../components/switch";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="container py-10 mx-auto mt-10">
      <div className="container mx-auto flex justify-between">
        <div className="w-24" />
        <div className="flex justify-center flex-col">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65 }}
          >
            <h1 className="text-center text-5xl dark:text-white">
              Subhan Naeem
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="mb-3"
          >
            <h1 className="text-center text-lg dark:text-white">
              Software Engineer
            </h1>
          </motion.div>
        </div>
        <div>
          {(globalThis as any).hideDarkModeSwitcher ? (
            <div className="w-24" />
          ) : (
            <Switch />
          )}
        </div>
      </div>
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.3 }}
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
        </motion.div>
      </div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Subhan</title>
    <body className="dark:bg-black transition-colors" />
  </>
);
