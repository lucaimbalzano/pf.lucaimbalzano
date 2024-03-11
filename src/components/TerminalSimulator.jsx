import { terminal } from "../assets";
import stackImgs from "../assets/index";
import styles, { layout } from "../style";
import React, { Component, useEffect } from "react";
import Terminal from "react-console-emulator";

const commands = {
  echo: {
    description: "Echo a passed string.",
    usage: "echo <string>",
    fn: (...args) => args.join(" "),
  },
  sudo: {
    description: "Sudo, please don't sweat.",
    usage: "sudo <string>",
    fn: (...args) => args.join(" oh no! You are not a root :)"),
  },
  rm: {
    description: "You feel you can destroy everything?",
    usage: "rm -rf <string>",
    fn: (...args) =>
      args.join("? Maybe is time to think on build something instead destroy."),
  },
};

export default function TerminalSimulator() {
  useEffect(() => {
    const text = `.𝕝𝕦𝕔𝕒𝕚𝕞𝕓𝕒𝕝𝕫𝕒𝕟𝕠

    ██▓ ███▄ ▄███▓ ▄▄▄▄    ▄▄▄      ▓█████ 
    ▓██▒▓██▒▀█▀ ██▒▓█████▄ ▒████▄    ▓█   ▀ 
    ▒██▒▓██    ▓██░▒██▒ ▄██▒██  ▀█▄  ▒███   
    ░██░▒██    ▒██ ▒██░█▀  ░██▄▄▄▄██ ▒▓█  ▄ 
    ░██░▒██▒   ░██▒░▓█  ▀█▓ ▓█   ▓██▒░▒████▒
    ░▓  ░ ▒░   ░  ░░▒▓███▀▒ ▒▒   ▓▒█░░░ ▒░ ░
     ▒ ░░  ░      ░▒░▒   ░   ▒   ▒▒ ░ ░ ░  ░
     ▒ ░░      ░    ░    ░   ░   ▒      ░   
     ░         ░    ░            ░  ░   ░  ░
                         ░                  
  `;

    console.log(
      text +
        "\n💡Hai gia provato il comando %c01110011 01110101 01100100 01101111?",
      "color: red"
    );
  }, []);

  return (
    <section
      id="terminal"
      className={`${layout.sectionReverse} bg-primary text-white h-screen`}
    >
      <div className={layout.sectionImgReverse}>
        <Terminal
          className="p-8 xxs:w-[320px] xs:w-[80%] h-[55%]"
          commands={commands}
          welcomeMessage={"💡 Welcome to my terminal!"}
          promptLabel={"root@lucaimbalzano:~$"}
        />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2Section2} xxs:text-[40px]`}>
          Find the <br className="sm:block hidden" />
          🐰 easter egg
        </h2>
        <ul className={`${styles.paragraphTest} max-w-[470px] mt-5 list-none`}>
          Forse la console ti puo' aiutare! Verifica subito:
          <ul className="list-none text-gray-400 hover:bg-gray-700/25 bg-gray-800/25 rounded-lg mt-2 p-10">
            <li>mac: Command + Option + i</li>
            <li>win/linux: Ctrl + Shift + i</li>
            <li>mouse destro + inspect</li>
          </ul>
        </ul>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={stackImgs.linux}
            alt="linux"
            className="w-[128.86px] h-[70.05px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={terminal}
            alt="terminal"
            className="w-[128.86px] h-[70.05px] object-contain mr-5 cursor-pointer "
          />
        </div>
      </div>
    </section>
  );
}
