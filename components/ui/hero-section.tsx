"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

const heroImg = "/salon-bg.png";

export default function HeroSection() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <section
      key={pathname}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/40 z-10" />
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={heroImg}
          alt="Sunny City Beauty Salon"
          className="w-full h-full object-cover object-center"
          fill
        />
      </motion.div>
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/80 font-sans tracking-[0.3em] uppercase text-md mb-6 font-semibold"
        >
          7 Pell St, New York, NY 10013
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 font-light"
        >
          Sunny City Beauty Salon
        </motion.h1>
      </div>
    </section>
  );
}
