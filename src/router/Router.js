import React from "react";
import LandingView from "../views/LandingView";
import AboutView from "../views/AboutView";
import PortfolioView from "../views/PortfolioView";
import ContactView from "../views/ContactView";
import { Route, Routes } from "react-router-dom";
const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<LandingView />} />
      <Route path="about" element={<AboutView />} />
      <Route path="portfolio" element={<PortfolioView />} />
      <Route path="contact" element={<ContactView />} />
    </Routes>
  );
};

export default Router;
