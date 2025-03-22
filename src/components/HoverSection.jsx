"use client";
import "./HoverSection.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useMousePosition from "./utils/useMousePosition";

export default function HoverSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  // Check if device is mobile or tablet
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    // Check on initial load
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <main className="mainhoversection z-[-50]">
      {!isMobile ? (
        // Desktop version with hover effect
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
              expertise, sculpts seamless systems.
            </span>

            <span>🎯 💻 🗺</span>

            <span>
              Bringing tech and strategy, they innovate pragmatically, crafting
              resilient solutions
              <span> that stand at the forefront of progress.</span>
            </span>
          </p>
        </motion.div>
      ) : (
        // Mobile version with visible text
        <div className="mobile-content px-4 py-6">
          <p className="text-base space-y-4">
            <span className="block mb-4">
              A visionary software architect, blending creativity and
              expertise, sculpts seamless systems.
            </span>

            <span className="block mb-4">🎯 💻 🗺</span>

            <span className="block">
              Bringing tech and strategy, they innovate pragmatically, crafting
              resilient solutions
              <span> that stand at the forefront of progress.</span>
            </span>
          </p>
        </div>
      )}

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