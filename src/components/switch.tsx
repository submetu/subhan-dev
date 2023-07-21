import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VscColorMode } from "@react-icons/all-files/vsc/VscColorMode";
import { VscFlame } from "@react-icons/all-files/vsc/VscFlame";

const Switch = () => {
  const [isDarkModeOn, setIsOn] = useState(
    JSON.parse(window?.localStorage?.getItem("subhan:darkMode") || "false")
  );
  return (
    <div
      className="w-24"
      data-darkmode={isDarkModeOn}
      onClick={() => {
        const newMode = !isDarkModeOn;
        window?.localStorage?.setItem(
          "subhan:darkMode",
          newMode ? JSON.stringify(true) : JSON.stringify(false)
        );
        if (!newMode) {
          document.documentElement.removeAttribute("class");
        } else {
          document.documentElement.setAttribute("class", "dark");
        }
        setIsOn(newMode);
      }}
      style={{
        justifyContent: isDarkModeOn ? "flex-end" : "flex-start",
        height: "40px",
        background: isDarkModeOn ? "#7593ad" : "#ffc82c",
        borderRadius: "25px",
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        padding: "0 5px",
        cursor: "pointer",
        transition: "all .3s",
      }}
    >
      <motion.div
        layout
        style={{
          height: "30px",
          width: "30px",
          borderRadius: "50%",
          display: "grid",
          alignItems: "center",
          justifyItems: "center",
          backgroundColor: "#fff",
          overflow: "hidden",
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.i
            className={`text-orange far fa-${isDarkModeOn ? "moon" : "sun"}`}
            key={isDarkModeOn ? "moon" : "sun"}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isDarkModeOn ? <VscColorMode /> : <VscFlame />}
          </motion.i>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
export default Switch;
