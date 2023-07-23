export const homeAnimationConfig = {
  pop: {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
  },
  inifiniteRotate: {
    animate: {
      rotate: [0, 0, 5, 5, 0],
    },
    reverseAnimate: {
      rotate: [0, 0, -5, -5, 0],
    },
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};
