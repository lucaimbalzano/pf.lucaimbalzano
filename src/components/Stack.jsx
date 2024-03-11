import styles, { layout } from "../style";
import stackImgs from "../assets/index";
import { motion } from "framer-motion";
import { StackIcon } from "./index";

const Stack = () => (
  <section id="stack" className={`${layout.section}`}>
    <p className="uppercase text-gray-500"> ABOUT</p>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2}`}>
        Providing the best
        <p className="font-normal">project exprience</p>
      </h2>
    </div>

    <div className={`${layout.sectionStack} flex flex-col`}>
      <motion.div
        animate={{ scale: [0, 0.5, 0.8, 1] }}
        transition={{
          duration: 2,
          ease: [0.17, 0.67, 0.83, 0.67],
        }}
        className="flex space-x-4 p-4"
      >
        <StackIcon src={stackImgs.js} alt="Javascript" />
        <StackIcon src={stackImgs.ts} alt="Typescript" />

        <StackIcon src={stackImgs.next} alt="React Js" />
        <StackIcon src={stackImgs.redux} alt="Redux" />
        <StackIcon src={stackImgs.sass} alt="Sass" />
        <StackIcon src={stackImgs.spline} alt="Spline" />
      </motion.div>

      <motion.div
        animate={{ scale: [0, 0.5, 0.8, 1] }}
        transition={{
          duration: 2,
          ease: [0.17, 0.67, 0.83, 0.67],
        }}
        className="flex space-x-4 p-4"
      >
        <StackIcon src={stackImgs.node} alt="Node Js" />
        <StackIcon src={stackImgs.figma} w="55" alt="Figma" />
        <StackIcon src={stackImgs.css} alt="Css" />
        <StackIcon src={stackImgs.html} alt="Html" />
        <StackIcon src={stackImgs.express} alt="Express Js" />
        <StackIcon src={stackImgs.firebase} alt="Firebase" />
        <StackIcon src={stackImgs.google} alt="Google" />
      </motion.div>
      <motion.div
        animate={{ scale: [0, 0.5, 0.8, 1] }}
        transition={{
          duration: 2,
          ease: [0.17, 0.67, 0.83, 0.67],
        }}
        className="flex space-x-4 p-4"
      >
        <StackIcon src={stackImgs.prisma} alt="Prisma" />
        <StackIcon src={stackImgs.mongodb} alt="Mongo Db" />
        <StackIcon src={stackImgs.postgres} alt="Postgres Db" />
        <StackIcon src={stackImgs.oracle} alt="Oracle" w="90" />
        <StackIcon src={stackImgs.mysql} alt="Mysql" />
        <StackIcon src={stackImgs.mssql} alt="Mssql" />
      </motion.div>
      <motion.div
        animate={{ scale: [0, 0.5, 0.8, 1] }}
        transition={{
          duration: 2,
          ease: [0.17, 0.67, 0.83, 0.67],
        }}
        className="flex space-x-4 p-4"
      >
        <StackIcon src={stackImgs.linux} alt="Linux" w="90" />
        <StackIcon src={stackImgs.selenium} alt="Selenium" />
        <StackIcon src={stackImgs.java} alt="Java" w="90" />
        <StackIcon src={stackImgs.spring} alt="spring" w="85" />
        <StackIcon src={stackImgs.python} alt="Python" />
        <StackIcon src={stackImgs.django} alt="Django" w="90" />
      </motion.div>
    </div>
  </section>
);

export default Stack;
