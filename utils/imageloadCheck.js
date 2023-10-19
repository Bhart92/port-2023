const onImagesLoaded = (container, event) => {
  console.log(container);
  const images = container.getElementsByTagName("img");
  console.log(images);
  let loaded = images.length;
  for (let i = 0; i < images.length; i++) {
    if (images[i].complete) {
      console.log(images[i]);
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
