const onImagesLoaded = (container, event) => {
  const images = container.getElementsByTagName("img");
  let loaded = images.length;
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
    }
  }
};
export default onImagesLoaded;
