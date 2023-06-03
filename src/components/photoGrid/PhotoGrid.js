import React from "react";
import { appData } from "../../data/appData";
import hint from "../../images/carousel-hint.png";

const PhotoGrid = () => {
  const { images } = appData;
  return (
    <div className="photo-grid">
      <div className="photo-grid-hint">
        <img src={hint} className="" />
      </div>

      <div className="photo-grid-images">
        {images.map((img, i) => {
          return (
            <div className="photo-grid-img">
              <img src={img} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PhotoGrid;
