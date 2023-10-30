import { useRef, useState } from "react";

export const incrementCounter = (count, setImgsLoaded, target) => {
  count.current += 1;
  const images = document.querySelectorAll(`${target}`);
  console.log(images);
  // const images = document.querySelectorAll(".timeline-element-image img");
  checkFinalImage(count.current, images.length, setImgsLoaded);
};
export const createRef = () => {
  console.log("create ref");
  const [imgsLoaded, setImgsLoaded] = useState(false);

  const count = useRef(0);
  return {
    imgsLoaded,
    setImgsLoaded,
    count,
  };
};
function checkFinalImage(count, length, setImgsLoaded) {
  if (count >= length) {
    console.log("hit final");
    setImgsLoaded(true);
  }
}
