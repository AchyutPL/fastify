import React from "react";
import Header from "../components/Header";
import Category from "../components/Category";
import ShopcategoryMobile from "../components/ShopcategoryMobile";
import MainnSlider from "../components/MainSlider";
import MainRows from "../components/MainRows";
import SwitchSlider from "../components/Switchslider/SwitchSlider";
import Footer from "../components/Footer";
export default function Homescreen({ changemode }) {
  return (
    <>
      <Header changemode={changemode} />
      <Category />
      <ShopcategoryMobile />
      <MainnSlider />
      <MainRows />
      <SwitchSlider />
      <Footer />
    </>
  );
}
