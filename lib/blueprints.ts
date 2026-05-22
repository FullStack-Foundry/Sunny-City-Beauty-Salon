export type FadeInUp = {
  hidden: {
    opacity: number;
    y: number;
  };
  visible: {
    opacity: number;
    y: number;
    transition: {
      duration: number;
      ease: [number, number, number, number];
    };
  };
};
