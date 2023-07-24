import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import SocialIcons from "../components/SocialIcons";
import { motion } from "framer-motion";
import { GiLaptop } from "@react-icons/all-files/gi/GiLaptop";
import BackgroundCenter from "../animation/BackgroundCenter";
import BackgroundItems from "../components/BackgroundItems";
import HeaderContent from "../components/HeaderContent";
import LaptopCenter from "../components/LaptopCenter";

const IndexPage: React.FC<PageProps> = () => {
  const [isDomLoaded, setIsDomLoaded] = React.useState(false);

  React.useEffect(() => {
    setIsDomLoaded(true);
  }, []);
  return (
    isDomLoaded && (
      <div className="container py-10 mx-auto mt-10">
        <BackgroundItems />
        <HeaderContent />
        <SocialIcons />
        <LaptopCenter />
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
