const onImagesLoaded = (container, event) => {
  return new Promise((resolve) => {
    const images = document.getElementsByTagName("img");
    let loaded = images.length;
    console.log("images");
    console.log(images);
    for (let i = 0; i < images.length; i++) {
      if (images[i].complete) {
        loaded--;
      } else {
        images[i].addEventListener("load", function () {
          loaded--;
          if (loaded === 0) {
            event();
          }
        });
      }
      if (loaded === 0) {
        event();
        resolve();
      }
    }
  });
};
export default onImagesLoaded;
