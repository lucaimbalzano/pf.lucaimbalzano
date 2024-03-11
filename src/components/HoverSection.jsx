"use client";
import "./HoverSection.css";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "./utils/useMousePosition";

export default function HoverSection() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className="mainhoversection relative">
      <motion.div
        className="mask"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="pl-20 justify-center items-center space-y-4"
        >
          <span>
            A visionary software architect, blending creativity and
            expertise,sculpts seamless systems.
          </span>

          <span>🎯 💻 🗺</span>

          <span>
            Briging tech and strategy, they innovate pragmatically, crafting
            resilient solutions
            <span>that stand at the forefront of progress.</span>
          </span>
        </p>
      </motion.div>

      <div className="bodyhoversection">
        <p>
          ⌨ <br />
          I'm a <span>creative</span> lead tech with strong
          <br /> focus on producing high quality &
          <br />
          impactful software architecture.
        </p>
      </div>
    </main>
  );
}
