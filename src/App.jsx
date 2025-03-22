import styles from "./style";
import {
  TerminalSimulator,
  Stack,
  Clients,
  Footer,
  Navbar,
  HomePage,
} from "./components";
import HoverSection from "./components/HoverSection";
import { useEffect, useState } from "react";

export default function App() {
  const [isWidthMd, setIsWidthMd] = useState(false);
  var screenWidth = window.innerWidth;

  useEffect(() => {
    if (screenWidth >= 1060) setIsWidthMd(true);
    console.log(screenWidth + isWidthMd);
  }, [screenWidth]);
  return (
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.flexCenter} fixed w-full`}>
          <div className="w-full">
            <Navbar />
          </div>
        </div>

      <div className={`bg-primary ${styles.flexStart} pt-10`}>
        <div className={`${styles.boxWidth}`}>
          <HomePage />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stack />
          <Clients />
          {isWidthMd && <HoverSection />}          
          <TerminalSimulator />
          <Footer />
        </div>
      </div>
    </div>
  );
}
