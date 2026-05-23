"use client";
import { FadeInUp } from "@/lib/blueprints";
import { motion } from "framer-motion";

type Props = {
  fadeInUp: FadeInUp;
  header: string;
  body: string;
};

export default function About({ fadeInUp, header, body }: Props) {
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
          {header}
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg font-light md:text-xl">
          {body}
        </p>
        <div className="mt-12 w-px h-16 bg-primary mx-auto opacity-50" />
      </motion.div>
    </section>
  );
}
