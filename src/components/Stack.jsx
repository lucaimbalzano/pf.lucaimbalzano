import styles, { layout } from "../style";
import stackImgs from "../assets/index";
import { motion } from "framer-motion";
import { StackIcon } from "./index";

const Stack = () => {
  const screenWidth = window.innerWidth;
  const iconsPerRow = screenWidth <= 400 ? 3 : 6;

  const stackIcons = Object.values(stackImgs);

  return (
    <section
      id="stack"
      className={`xs:mt-48  sm:mt-72  md:mt-0 ${layout.section}`}
    >
      <p className="uppercase text-gray-500"> ABOUT</p>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          Providing the best
          <p className="font-normal">project experience</p>
        </h2>
      </div>

      <div className={`${layout.sectionStack} flex flex-col`}>
        {renderStackIcons(iconsPerRow, stackIcons)}
      </div>
    </section>
  );
};

const renderStackIcons = (iconsPerRow, stackIcons) => {
  const renderedRows = [];

  for (let i = 0; i < stackIcons.length; i += iconsPerRow) {
    const row = stackIcons.slice(i, i + iconsPerRow);

    renderedRows.push(
      <motion.div
        key={i}
        animate={{ scale: [0, 0.5, 0.8, 1] }}
        transition={{ duration: 2, ease: [0.17, 0.67, 0.83, 0.67] }}
        className="flex space-x-4 p-4"
      >
        {row.map((icon, index) => (
          <StackIcon key={index} src={icon} alt={`Stack Icon ${index}`} />
        ))}
      </motion.div>
    );
  }

  return renderedRows;
};

export default Stack;
