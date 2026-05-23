"use client";
import { motion } from "framer-motion";
import { FadeInUp } from "@/lib/blueprints";
import Link from "next/link";

const imageGallery = [
  { image: "/images/gallery-1.jpg", text: "Straight Perm" },
  { image: "/images/gallery-2.jpg", text: "Text here" },
  { image: "/images/gallery-3.jpg", text: "Perm" },
];

export default function MiniGallery({ fadeInUp }: { fadeInUp: FadeInUp }) {
  return (
    <div className="bg-black">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-white font-light mb-4 pt-16">
          Gallery
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {imageGallery.map((entry, index) => (
          <article
            key={index}
            className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative aspect-4/5 overflow-hidden bg-slate-900 cursor-pointer w-full"
            >
              <motion.img
                src={entry.image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition duration-700 ease-out hover:scale-105"
              />
            </motion.div>

            <div className="px-6 py-5 text-center">
              <p className="text-xs uppercase tracking-[0.4em] text-black/50">
                {entry.text}
              </p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/gallery"
          className="inline-flex mb-24 items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary transition duration-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <span>See more photos</span>
        </Link>
      </div>
    </div>
  );
}
