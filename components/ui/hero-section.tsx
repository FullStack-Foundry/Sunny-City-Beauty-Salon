"use client";
import { motion } from "framer-motion";
import BackgroundSection from "./background-section";

const heroImg = "/images/salon-bg.png";

type Props = {
  address: string;
  company: string;
};

export default function HeroSection({ address, company }: Props) {
  return (
    <BackgroundSection image={heroImg}>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-white/80 font-sans tracking-[0.3em] uppercase text-md mb-6 font-semibold"
      >
        {address}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 font-light"
      >
        {company}
      </motion.h1>
    </BackgroundSection>
  );
}
