import { motion } from "framer-motion";
import * as React from "react";
import { SocialIcon } from "react-social-icons";
import Pop from "../animation/Pop";
import { DiStreamline } from "@react-icons/all-files/di/DiStreamline";
import { DiVim } from "@react-icons/all-files/di/DiVim";
import { DiVisualstudio } from "@react-icons/all-files/di/DiVisualstudio";
import { VscCode } from "@react-icons/all-files/vsc/VscCode";
import { VscJson } from "@react-icons/all-files/vsc/VscJson";
import { VscSymbolArray } from "@react-icons/all-files/vsc/VscSymbolArray";
import BackgroundRotateAntiClockwise from "../animation/BackgroundRotateAntiClockwise";
import BackgroundRotateClockwise from "../animation/BackgroundRotateClockwise";

const svgClassName = `dark:fill-white 
  lg:w-[200px] lg:h-[200px] 
  md:w-[150px] md:h-[150px] 
  sm:w-[100px] sm:h-[100px] 
  sm:block hidden`;
const BackgroundItems = () => {
  return (
    <>
      <BackgroundRotateClockwise top={150}>
        <DiStreamline className={svgClassName} fillOpacity={0.06} />
      </BackgroundRotateClockwise>
      <BackgroundRotateAntiClockwise top={150}>
        <VscJson fillOpacity={0.03} className={svgClassName} />
      </BackgroundRotateAntiClockwise>

      <BackgroundRotateClockwise top={350} xStart={90}>
        <VscSymbolArray className={svgClassName} fillOpacity={0.06} />
      </BackgroundRotateClockwise>
      <BackgroundRotateAntiClockwise top={350} xStart={90}>
        <VscCode fillOpacity={0.06} className={svgClassName} />
      </BackgroundRotateAntiClockwise>

      <BackgroundRotateClockwise top={550}>
        <DiVisualstudio className={svgClassName} fillOpacity={0.06} />
      </BackgroundRotateClockwise>
      <BackgroundRotateAntiClockwise top={550}>
        <DiVim fillOpacity={0.06} className={svgClassName} />
      </BackgroundRotateAntiClockwise>
    </>
  );
};

export default BackgroundItems;
