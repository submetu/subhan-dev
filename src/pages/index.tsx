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
import { VscDatabase } from "@react-icons/all-files/vsc/VscDatabase";

const IndexPage: React.FC<PageProps> = () => {
  const [isDomLoaded, setIsDomLoaded] = React.useState(false);

  React.useEffect(() => {
    setIsDomLoaded(true);
  }, []);
  return (
    isDomLoaded && (
      <div className="container py-10 mx-auto mt-10">
        <BackgroundRotateClockwise top={150}>
          <VscDatabase
            className="w-80 h-80 dark:fill-white"
            fillOpacity={0.03}
          />
        </BackgroundRotateClockwise>
        <BackgroundRotateAntiClockwise top={150}>
          <VscJson size="350" fillOpacity={0.03} className="dark:fill-white" />
        </BackgroundRotateAntiClockwise>



        <BackgroundRotateClockwise top={500}>
          <VscSymbolArray
            className="w-80 h-80 dark:fill-white"
            fillOpacity={0.03}
          />
        </BackgroundRotateClockwise>
        <BackgroundRotateAntiClockwise top={500}>
          <VscCode size="350" fillOpacity={0.03} className="dark:fill-white" />
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
              {isDomLoaded && (
                <motion.h1
                  className="text-center text-lg dark:text-white"
                  style={{}}
                >
                  Software Engineer
                </motion.h1>
              )}
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
