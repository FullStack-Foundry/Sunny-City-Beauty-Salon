"use client";
import { FadeInUp } from "@/lib/blueprints";
import { motion } from "framer-motion";

export default function About({ fadeInUp }: { fadeInUp: FadeInUp }) {
  return (
    <section className="py-24 md:py-32 px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-serif mb-8 text-foreground font-light">
          The Sunny City Experience
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg font-light md:text-xl">
          We are a Chinese-owned beauty salon where we believe that true beauty
          stems from within, and our mission is to reflect that outward. Nestled
          in the heart of Manhattan&apos;s Chinatown, our space is designed to
          envelop you in personalized attention and expert craftsmanship. Every
          detail, from the welcoming atmosphere to the meticulous technique of
          our stylists, is crafted to make you feel extraordinary.
        </p>
        <div className="mt-12 w-px h-16 bg-primary mx-auto opacity-50" />
      </motion.div>
    </section>
  );
}
