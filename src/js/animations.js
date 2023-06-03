import { gsap } from "gsap";
import { isMobile } from "mobile-device-detect";
export const isReduced =
  window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
  window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

export const revealHeader = () => {
  if (isReduced) return;

  let loadAnimationTl;

  if (isMobile) {
    loadAnimationTl = gsap.timeline();

    loadAnimationTl.to("header", {
      transform: "translate(0, 0)",
      delay: 0.05,
    });
  } else {
    loadAnimationTl = gsap.timeline(
      document.querySelector(".landing") ? { delay: 1.5 } : { delay: 0 }
    );
    loadAnimationTl.to(".nav-link", {
      opacity: 1,
      y: -10,
      stagger: {
        // wrap advanced options in an object
        amount: 1,
        each: 0.05,
        from: "top",
        grid: "auto",
        ease: "none",
        repeat: 0, // Repeats immediately, not waiting for the other staggered animations to finish
      },
    });
  }
};
export const revealLanding = () => {
  if (isReduced) return;
  let loadAnimationTl = gsap.timeline({ delay: 0.45 });
  loadAnimationTl.to(".landing-hero", {
    top: 0,
    opacity: 1,
    delay: 0.25,
    duration: 1,
  });

  revealHeader();
  revealCarousel();
};
export const revealCarousel = () => {
  if (isReduced) return;

  let loadAnimationTl = gsap.timeline({ delay: 0.05 });

  loadAnimationTl.to(".photo-grid", { opacity: "1" });
  loadAnimationTl.to(".carousel-wrapper", { opacity: "1" });
};
