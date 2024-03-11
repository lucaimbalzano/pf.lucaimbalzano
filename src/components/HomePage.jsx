import styles from "../style";
import Spline from "@splinetool/react-spline";

const HomePage = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 xss:space-y-8`}
      >
        <div className="flex flex-row items-center py-[6px] px-4  rounded-[10px] mb-2"></div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[120px] xs:text-[120px] xxs:text-[80px] text-[52px] text-white 2xl:leading-[130.8px] ss:leading-[110.8px] xs:leading-[110.8px] leading-[75px] ">
            Impact the <br className="sm:block hidden" />{" "}
            <span className="text-gradient xs:text-[120px]">future</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] xxs:text-[70px] text-[80px] text-white ss:leading-[100.8px] xxs:leading-[80px] leading-[75px] w-full">
          Just focus on the present.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Dreams are just dreams, without goals.
        </p>
      </div>

      <div className="flex-1 md:h-auto h-full md:flex md:items-center md:justify-center my-0 md:my-10 relative">
        <Spline scene="https://prod.spline.design/Y2G4uvj5Ge3Sd0XL/scene.splinecode" />
      </div>
    </section>
  );
};

export default HomePage;
