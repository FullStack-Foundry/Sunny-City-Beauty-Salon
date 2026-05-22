"use client";

import { FadeInUp } from "@/lib/blueprints";
import { motion } from "framer-motion";

export default function ContactInfo({ fadeInUp }: { fadeInUp: FadeInUp }) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center"
        >
          <h2 className="text-4xl font-serif mb-12 text-foreground font-light">
            Visit Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <h4 className="text-primary font-sans uppercase tracking-widest text-xs mb-3">
                Address
              </h4>
              <p className="text-foreground font-serif text-lg">
                7 Pell St
                <br />
                New York, NY 10013
              </p>
            </div>
            <div>
              <h4 className="text-primary font-sans uppercase tracking-widest text-xs mb-3">
                Hours
              </h4>
              <p className="text-foreground font-serif text-lg">
                Mon &ndash; Fri: 10:00am &ndash; 6:00pm
                <br />
                Sat &ndash; Sun : 10:00am &ndash; 6:00pm
              </p>
            </div>
            <div>
              <h4 className="text-primary font-sans uppercase tracking-widest text-xs mb-3">
                Phone
              </h4>
              <a
                href="tel:6463868898"
                className="text-foreground font-serif text-lg hover:text-primary transition-colors"
              >
                646-386-8898
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
