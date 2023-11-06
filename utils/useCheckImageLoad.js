import { useRef, useState } from "react";

export const incrementCounter = (count, setImgsLoaded, target, numToIter) => {
  count.current += 1;
  const images = document.querySelectorAll(`${target}`);
  console.log(images);
  checkFinalImage(count.current, images.length, setImgsLoaded, numToIter);
};
export const createRef = () => {
  const [imgsLoaded, setImgsLoaded] = useState(false);

  const count = useRef(0);
  return {
    imgsLoaded,
    setImgsLoaded,
    count,
  };
};
function checkFinalImage(count, length, setImgsLoaded, numToIter) {
  if (numToIter) {
    if (count >= numToIter - 1) {
      setImgsLoaded(true);
    } else {
      if (count >= length) {
        setImgsLoaded(true);
      }
    }
  }
}
