"use client";
import { FadeInUp } from "@/lib/blueprints";
import { motion } from "framer-motion";

export default function BookingBannerBottom({
  fadeInUp,
}: {
  fadeInUp: FadeInUp;
}) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeInUp}
      className="bg-primary py-16 px-6 text-center"
    >
      <p className="text-white/70 font-sans text-xs uppercase tracking-[0.3em] mb-4">
        Book Your Visit
      </p>
      <a
        href="tel:6463868898"
        className="text-white font-serif text-4xl md:text-5xl font-light underline underline-offset-8 decoration-white/40 hover:decoration-white transition-all duration-300"
      >
        Call 646-386-8898
      </a>
    </motion.section>
  );
}
