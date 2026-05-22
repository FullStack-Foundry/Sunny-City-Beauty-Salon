"use client";
import { FadeInUp } from "@/lib/blueprints";
import { motion } from "framer-motion";

export default function BookingBannerTop({ fadeInUp }: { fadeInUp: FadeInUp }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-primary py-8 px-6 text-center"
    >
      <p className="text-white font-sans text-base tracking-wide uppercase mb-1 opacity-80">
        Ready to look your best?
      </p>
      <p className="text-white font-serif text-2xl md:text-3xl font-light">
        To book an appointment, call{" "}
        <a
          href="tel:6463868898"
          className="underline underline-offset-4 decoration-white/50 hover:decoration-white transition-all duration-300"
        >
          646-386-8898
        </a>
      </p>
    </motion.section>
  );
}
