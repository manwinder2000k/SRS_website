"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[999] h-[3px] origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, #c0392b 0%, #1e2f6b 50%, #1565c0 100%)",
      }}
    />
  );
}
