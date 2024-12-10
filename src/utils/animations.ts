import { animate, inView, scroll } from "motion";

export const setupScrollAnimations = () => {
  // Setup scroll-triggered animations
  inView(".scroll-animate", ({ target }) => {
    animate(
      target,
      { opacity: 1, transform: "translateY(0px)" },
      { duration: 0.6, easing: [0.17, 0.55, 0.55, 1] }
    );
  });

  // Setup scroll-linked animations
  const scrollElements = document.querySelectorAll(".scroll-linked");
  scrollElements.forEach((element) => {
    scroll(animate(element, {
      opacity: [0, 1],
      transform: ["translateY(20px)", "translateY(0px)"],
    }));
  });
};

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const getStoredToggleState = (): boolean => {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem('toggleShrunk') === 'true';
  }
  return false;
};

export const setToggleState = (shrunk: boolean) => {
  localStorage.setItem('toggleShrunk', shrunk.toString());
};