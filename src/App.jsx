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

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingXNav} ${styles.flexCenter} fixed w-full`}>
      <div className={`${styles.boxWidth}`}>
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
        <HoverSection />
        <TerminalSimulator />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
