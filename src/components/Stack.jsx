import React, { useState, useEffect } from "react";
import styles, { layout } from "../style";
import stackImgs from "../assets/index";
import { motion } from "framer-motion";
import { StackIcon } from "./index";

const Stack = () => {
  // Use state for screen width to make it reactive to window resizing
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // Use state for spacing mode with a default value
  const [spacingMode, setSpacingMode] = useState("justify-between");
  
  // Update screen width when window resizes
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine icons per row based on screen size
  const getIconsPerRow = () => {
    if (screenWidth <= 400) return 3;      // Mobile
    if (screenWidth <= 768) return 4;      // Small tablet
    return 6;                              // Larger screens
  };

  const iconsPerRow = getIconsPerRow();
  const stackIcons = Object.values(stackImgs);

  return (
    <section
      id="stack"
      className={`xs:mt-48 sm:mt-72 md:mt-0 ${layout.section}`}
    >
      <p className="uppercase text-gray-500">ABOUT</p>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          Providing the best
          <p className="font-normal">project experience</p>
        </h2>
      </div>

      <div className={`${layout.sectionStack} flex flex-col`}>
        {renderStackIcons(iconsPerRow, stackIcons, spacingMode)}
      </div>
    </section>
  );
};

const renderStackIcons = (iconsPerRow, stackIcons, spacingMode) => {
  const renderedRows = [];

  for (let i = 0; i < stackIcons.length; i += iconsPerRow) {
    const row = stackIcons.slice(i, i + iconsPerRow);
    
    // For justify-between, we need to handle last row specially to maintain consistent spacing
    let rowItems = [...row];
    const isLastRow = i + iconsPerRow >= stackIcons.length;
    const needsPlaceholders = spacingMode === "justify-between" && row.length < iconsPerRow && isLastRow;
    
    if (needsPlaceholders) {
      // Add invisible placeholders to maintain spacing in the last row
      const emptyCount = iconsPerRow - row.length;
      for (let j = 0; j < emptyCount; j++) {
        rowItems.push(null); // Using null for empty placeholders
      }
    }

    renderedRows.push(
      <motion.div
        key={i}
        animate={{ scale: [0, 0.5, 0.8, 1] }}
        transition={{ duration: 2, ease: [0.17, 0.67, 0.83, 0.67] }}
        className={`flex w-full p-4 ${spacingMode === "justify-between" ? "justify-between" : "space-x-4"}`}
      >
        {rowItems.map((icon, index) => (
          icon ? (
            <StackIcon key={index} src={icon} alt={`Stack Icon ${i + index}`} />
          ) : (
            // Render invisible placeholder to maintain spacing
            <div key={`placeholder-${index}`} className="invisible" style={{ width: "1rem" }}></div>
          )
        ))}
      </motion.div>
    );
  }

  return renderedRows;
};

export default Stack;