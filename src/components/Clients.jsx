import { companyImages } from "../assets/index";
import styles from "../style";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Clients() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <div className="flex uppercase bg-primary items-center justify-center pt-10">
        <p className=" text-gray-500"> i WORKED FOR</p>
      </div>
      <section
        className={`bg-primary ${styles.flexCenter} h-full ${styles.flexCenter} flex-wrap w-full `}
      >
        <motion.div ref={carousel} whileTap={{ cursor: "grabbing" }}>
          <div
            className={`flex-1 ${styles.flexCenter} sm:min-w-[592px] min-w-[520px] min-h-[100px] m-5`}
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="flex items-center space-x-4"
            >
              {companyImages.map((client) => (
                <AnimatePresence key={"AnimatePresence" + client}>
                  <motion.div key={"motionid" + client}>
                    <motion.img
                      key={"id" + client}
                      src={client}
                      variants={slideVariants}
                      initial={"hiddenLeft"}
                      animate="visible"
                      exit="exit"
                      width="150px"
                      height="100px"
                    />
                  </motion.div>
                </AnimatePresence>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
