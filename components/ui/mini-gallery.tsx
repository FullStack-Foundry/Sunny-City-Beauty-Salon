"use client";
import { motion } from "framer-motion";
import { FadeInUp } from "@/lib/blueprints";
import BackgroundSection from "./background-section";

const backgroundImg = "/images/chinatown-bg.jpg";

const imageGallery = [
  { image: "/images/gallery-1.jpg", text: "Straight Perm" },
  { image: "/images/gallery-2.jpg", text: "Text here" },
  { image: "/images/gallery-3.jpg", text: "Perm" },
];

export default function MiniGallery({ fadeInUp }: { fadeInUp: FadeInUp }) {
  return (
    <BackgroundSection
      image={backgroundImg}
      className={"relative z-20 text-center px-4 max-w-4xl mx-auto mt-8 mb-6"}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-white font-light mb-4">
          Gallery
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {imageGallery.map((entry, index) => (
          <div key={index} className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="aspect-3/4 overflow-hidden bg-muted cursor-pointer"
            >
              <motion.img
                src={entry.image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              className="flex justify-center"
            >
              <div className="text-2xl md:text-3xl font-serif text-white font-light">
                {entry.text}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </BackgroundSection>
  );
}
