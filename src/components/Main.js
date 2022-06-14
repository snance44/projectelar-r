import React from "react";
import Header from "./Header";
import HomeCarousel from "./HomeCarousel";
import { Learning } from "./LearningComponent";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route exact path="/projectelar-r/" element={<HomeCarousel />} />
            <Route path="/projectelar-r/learning" element={<Learning />} />
            <Route path="/projectelar-r/aboutus" element={<AboutUs />} />
            <Route path="/projectelar-r/*" element={<HomeCarousel />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
