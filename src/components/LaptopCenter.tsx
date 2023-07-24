import { motion } from "framer-motion";
import * as React from "react";
import { GiLaptop } from "@react-icons/all-files/gi/GiLaptop";
import BackgroundCenter from "../animation/BackgroundCenter";

const LaptopCenter = () => {
  return (
    <BackgroundCenter className="relative">
      <GiLaptop
        className="dark:fill-white mx-auto lg:w-[600px] lg:h-[600px] md:w-[400px] md:h-[400px] w-[250px] h-[250px]"
        fillOpacity={0.15}
      />
      <div className="absolute lg:left-[calc(50%-150px)] lg:top-[150px] lg:w-[300px] md:top-[100px] md:w-[230px] md:left-[calc(50%-115px)] top-[50px] w-[145px] left-[calc(50%-72.5px)]">
        <h2 className="italic lg:text-2xl md:text-[1.2rem] text-xs dark:text-white text-gray-dark inline-block">
          {"console.log('Hello World')"}
        </h2>
        <motion.div
          className="inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <h2 className="dark:text-white lg:text-2xl md:text-[1.2rem] text-xs text-gray-dark">
            _
          </h2>
        </motion.div>
      </div>
    </BackgroundCenter>
  );
};

export default LaptopCenter;
