import { motion } from "framer-motion";
import Image from "next/image";
import { JSX } from "react";

const DEFAULT_STYLING =
  "relative z-20 text-center px-4 max-w-4xl mx-auto mt-20";

type Props = {
  image: string;
  children: JSX.Element | JSX.Element[];
  className?: string;
};

export default function BackgroundSection({
  image,
  children,
  className,
}: Props) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10" />
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt="Sunny City Beauty Salon"
          className="w-full h-full object-cover object-center"
          fill
        />
      </motion.div>
      <div className={className || DEFAULT_STYLING}>{children}</div>
    </section>
  );
}
