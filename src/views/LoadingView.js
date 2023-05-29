import React from "react";
import Loader from "react-loaders";
import { isReduced } from "../js/animations";

const LoadingView = ({ text }) => (
  <div className="loading">
    {!isReduced && <Loader type="ball-grid-pulse" />}
    <span>{text}</span>
  </div>
);

export default LoadingView;
