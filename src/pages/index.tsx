import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import SocialIcons from "../components/SocialIcons";
import BackgroundItems from "../components/BackgroundItems";
import HeaderContent from "../components/HeaderContent";
import LaptopCenter from "../components/LaptopCenter";
import { DiJava } from "@react-icons/all-files/di/DiJava";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { DiPython } from "@react-icons/all-files/di/DiPython";
import CenterRowItem from "../components/CenterRowItem";
import ProgrammingLanguages from "../components/ProgrammingLanguages";

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
        <div style={{ height: 200 }} />
        <ProgrammingLanguages />

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
