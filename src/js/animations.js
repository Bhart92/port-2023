import { gsap } from "gsap";
export const isReduced =
  window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
  window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
export const revealHeader = () => {
  if (isReduced) return;
  let loadAnimationTl = gsap.timeline();
  loadAnimationTl.to("header", {
    transform: "translate(0, 0)",
    delay: 0.05,
  });
};
export const revealLanding = () => {
  if (isReduced) return;
  let loadAnimationTl = gsap.timeline({ delay: 0.25 });
  loadAnimationTl.to(".landing-hero", {
    top: 0,
    opacity: 1,
    delay: 0.25,
    duration: 1,
  });

  loadAnimationTl.to("header", { transform: "translate(0, 0)" }, "<.25");
};
export const revealDesktopHeader = () => {
  if (isReduced) return;

  let loadAnimationTl = gsap.timeline({ delay: 1 });
  loadAnimationTl.to("header", { transform: "translate(0, 0)" }, "<.25");

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
};
