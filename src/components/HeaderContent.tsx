import { motion } from "framer-motion";
import * as React from "react";
import Pop from "../animation/Pop";
import Switch from "./switch";
import { StaticImage } from "gatsby-plugin-image";

const HeaderContent = () => {
  return (
    <div className="container mx-auto flex justify-between sm:flex-row flex-col mb-5 gap-5">
      <div className="w-24" />
      <div className="flex justify-center flex-col gap-2">
        <Pop>
          <h1 className="text-center text-5xl dark:text-white">Subhan Naeem</h1>
        </Pop>
        <Pop transition={{ duration: 0.65, delay: 0.3 }} className="mb-3">
          <motion.h1 className="text-center text-lg dark:text-white" style={{}}>
            Software Engineer
          </motion.h1>
        </Pop>
        <Pop className="mx-auto">
          <motion.div
            className="inline-block"
            initial={{ rotate: 359 }}
            animate={{ rotate: 0 }}
            transition={{
              duration: 0.4,
              type: "spring",
              bounce: 0.7,
            }}
          >
            <StaticImage
              width={180}
              height={180}
              style={{ borderRadius: "50%" }}
              src="../images/closeup.jpg"
              alt="How I look like sometimes"
              placeholder="blurred"
              layout="constrained"
              className="shadow-xl"
            />
          </motion.div>
        </Pop>
      </div>
      <Pop className="sm:mx-0 mx-auto">
        <Switch />
      </Pop>
    </div>
  );
};

export default HeaderContent;
