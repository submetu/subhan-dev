import { motion } from "framer-motion";
import * as React from "react";
import Pop from "../animation/Pop";
import Switch from "./switch";

const HeaderContent = () => {
  return (
    <div className="container mx-auto flex justify-between sm:flex-row flex-col">
      <div className="w-24" />
      <div className="flex justify-center flex-col">
        <Pop transition={{ duration: 0.65 }}>
          <h1 className="text-center text-5xl dark:text-white">Subhan Naeem</h1>
        </Pop>
        <Pop transition={{ duration: 0.65, delay: 0.3 }} className="mb-3">
          <motion.h1 className="text-center text-lg dark:text-white" style={{}}>
            Software Engineer
          </motion.h1>
        </Pop>
      </div>
      <Pop transition={{ duration: 0.65 }} className="sm:mx-0 mx-auto">
        <Switch />
      </Pop>
    </div>
  );
};

export default HeaderContent;
