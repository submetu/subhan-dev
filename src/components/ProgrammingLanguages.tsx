import { DiJava } from "@react-icons/all-files/di/DiJava";
import { DiPython } from "@react-icons/all-files/di/DiPython";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import CenterRowItem from "./CenterRowItem";
import * as React from "react";

const ProgrammingLanguages = ({
}) => (
    <div className="flex gap-3 justify-center sm:flex-row flex-col">
        <CenterRowItem initialX={0} className="mx-auto">
            <SiTypescript
                fillOpacity={0.15}
                className="dark:fill-white"
                size="100%" />
        </CenterRowItem>
        <CenterRowItem initialX={0}  className="mx-auto">
            <DiJava fillOpacity={0.15} className="dark:fill-white " size="100%" />
        </CenterRowItem>
        <CenterRowItem initialX={0}  className="mx-auto">
            <DiPython fillOpacity={0.15} className="dark:fill-white" size="100%" />
        </CenterRowItem>
    </div>
);

export default ProgrammingLanguages;
