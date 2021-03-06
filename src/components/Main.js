import React from "react";
import Header from "./Header";
import HomeCarousel from "./HomeCarousel";
import Learning from "./LearningComponent";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path="projectelar-r/" index element={<HomeCarousel />} />
          <Route path="projectelar-r/learning" element={<Learning />} />
          <Route path="projectelar-r/aboutus" element={<AboutUs />} />
          <Route path="projectelar-r/*" index element={<HomeCarousel />} />
          <Route path="*" element={<HomeCarousel />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}
