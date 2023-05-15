import React from "react";
import Loader from "react-loaders";

const LoadingView = ({ text }) => (
  <div className="loading">
    <Loader type="ball-grid-pulse" />
    <span>{text}</span>
  </div>
);

export default LoadingView;
