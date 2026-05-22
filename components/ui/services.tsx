"use client";

import { FadeInUp } from "@/lib/blueprints";
import { motion } from "framer-motion";

const services = [
  { name: "Hair Cut", price: "$15 - $28" },
  { name: "Wash Blow Dry", price: "$12 - $35" },
  { name: "Wash Cut Dry", price: "$20 - $45" },
  { name: "Coloring", price: "$35 - $100" },
  { name: "Perm", price: "$60 - $180" },
  { name: "Straight Perm", price: "$130 - $220" },
  { name: "Keratin", price: "$120 - $180" },
  { name: "Oil Treatment", price: "$35 - $60" },
  { name: "Repair Treatment", price: "$60 - $90" },
  { name: "Deep Scalp Treatment", price: "$45" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function Services({ fadeInUp }: { fadeInUp: FadeInUp }) {
  return (
    <section className="py-16 bg-muted px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="text-primary font-sans tracking-[0.2em] uppercase text-xs mb-4 block">
            Our Offerings
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground font-light">
            Services &amp; Pricing
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="flex justify-between items-end border-b border-border/60 pb-4 group"
            >
              <h3 className="text-lg md:text-xl font-serif text-foreground group-hover:text-primary transition-colors">
                {service.name}
                {service.name === "Coloring" && (
                  <span className="sm:text-md text-muted-foreground italic">
                    {" "}
                    (price not applicable to special colors)
                  </span>
                )}
              </h3>
              <span className="text-muted-foreground font-light tracking-wide text-sm md:text-base">
                {service.price}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="mt-10 text-center"
        >
          <p className="text-sm text-muted-foreground italic">
            Prices may vary based on hair length and stylist level.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
