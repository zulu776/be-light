"use client"; // Obligatorio
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Este valor mueve la imagen más lento que el scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -z-10 h-[140%]">
        <img
          src="/isa/IMG_1979.JPG.jpeg"
          alt="Nutrición Diana Pina"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="flex h-full items-center justify-center bg-black/20">
        <h1 className="text-white text-6xl font-serif">Salud Integral</h1>
      </div>
    </section>
  );
}