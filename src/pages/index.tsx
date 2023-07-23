import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Switch from "../components/switch";
import Pop from "../animation/Pop";
import SocialIcons from "../components/SocialIcons";
import { VscJson } from "@react-icons/all-files/vsc/VscJson";
import { motion } from "framer-motion";
import BackgroundRotateClockwise from "../animation/BackgroundRotateClockwise";
import BackgroundRotateAntiClockwise from "../animation/BackgroundRotateAntiClockwise";
import { VscSymbolArray } from "@react-icons/all-files/vsc/VscSymbolArray";
import { VscCode } from "@react-icons/all-files/vsc/VscCode";
import { DiStreamline } from "@react-icons/all-files/di/DiStreamline";
import { DiVisualstudio } from "@react-icons/all-files/di/DiVisualstudio";
import { DiVim } from "@react-icons/all-files/di/DiVim";
import { GiLaptop } from "@react-icons/all-files/gi/GiLaptop";
import BackgroundCenter from "../animation/BackgroundCenter";

const IndexPage: React.FC<PageProps> = () => {
  const [isDomLoaded, setIsDomLoaded] = React.useState(false);

  React.useEffect(() => {
    setIsDomLoaded(true);
  }, []);
  return (
    isDomLoaded && (
      <div className="container py-10 mx-auto mt-10">
        <BackgroundRotateClockwise top={150}>
          <DiStreamline
            className="dark:fill-white"
            size="200"
            fillOpacity={0.03}
          />
        </BackgroundRotateClockwise>
        <BackgroundRotateAntiClockwise top={150}>
          <VscJson size="200" fillOpacity={0.03} className="dark:fill-white" />
        </BackgroundRotateAntiClockwise>

        <BackgroundRotateClockwise top={350} xStart={90}>
          <VscSymbolArray
            className="dark:fill-white"
            fillOpacity={0.03}
            size="200"
          />
        </BackgroundRotateClockwise>
        <BackgroundRotateAntiClockwise top={350} xStart={90}>
          <VscCode size="200" fillOpacity={0.03} className="dark:fill-white" />
        </BackgroundRotateAntiClockwise>

        <BackgroundRotateClockwise top={550}>
          <DiVisualstudio
            className="dark:fill-white"
            fillOpacity={0.03}
            size="200"
          />
        </BackgroundRotateClockwise>
        <BackgroundRotateAntiClockwise top={550}>
          <DiVim size="200" fillOpacity={0.03} className="dark:fill-white" />
        </BackgroundRotateAntiClockwise>

        <div className="container mx-auto flex justify-between">
          <div className="w-24" />
          <div className="flex justify-center flex-col">
            <Pop transition={{ duration: 0.65 }}>
              <h1 className="text-center text-5xl dark:text-white">
                Subhan Naeem
              </h1>
            </Pop>
            <Pop transition={{ duration: 0.65, delay: 0.3 }} className="mb-3">
              <motion.h1
                className="text-center text-lg dark:text-white"
                style={{}}
              >
                Software Engineer
              </motion.h1>
            </Pop>
          </div>
          <div>
            <Pop transition={{ duration: 0.65 }}>
              <Switch />
            </Pop>
          </div>
        </div>
        <div className="container text-center">
          <SocialIcons />
        </div>

        <Pop
          transition={{ duration: 0.65, delay: 0.3 }}
          style={{ left: "calc(50% - 150px)", width: 300, top: 400 }}
          className="absolute"
        >
          <h2 className="italic text-2xl dark:text-white text-gray opacity-40  inline-block">
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
            <h2 className="dark:text-white opacity-40 text-2xl text-gray">_</h2>
          </motion.div>
        </Pop>
        <BackgroundCenter>
          <GiLaptop
            className="dark:fill-white mx-auto"
            size="600"
            fillOpacity={0.03}
          />
        </BackgroundCenter>
        <div style={{ height: 2000 }} />
      </div>
    )
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Subhan</title>
    <body className="dark:bg-black transition-colors" />
  </>
);
