import styles from "../style";
import { logo } from "../assets";
import { socialMedia } from "../constants";

const year = new Date().getFullYear()

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-row justify-start mr-10 space-x-0">
        <p className="text-white font-poppins font-semibold text-[30px]">
          .lucaimbalzan
        </p>
        <img
          src={logo}
          alt="lucaimbalzano"
          className="w-[66px] h-[38.14px] object-contain ml-[-18px] mt-[4px]"
        />
      </div>
      <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
        Dreams withou goals, are just dreams.
      </p>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ {year} .lucaimbalzano All Rights Reserved.
      </p>

      <section
        id="contacts"
        className="uppercase text-gray-500 flex p-3 justify-center items-center"
      >
        <p>CONTACTS</p>
      </section>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
