import React from "react";
import Laptops from "./Laptops";
import Fashion from "./Fashion";
import "../../cssfiles/switchslider/switchslider.css";

export default function SwitchSlider({ ourdata }) {
  const toggleList1 = () => {
    let toggle1 = document.querySelector(".toggle1");
    let toggle2 = document.querySelector(".toggle2");
    toggle2.style.display = "none";
    toggle1.style.display = "block";
  };
  const toggleList2 = () => {
    let toggle1 = document.querySelector(".toggle1");
    let toggle2 = document.querySelector(".toggle2");
    toggle2.style.display = "block";
    toggle1.style.display = "none";
  };
  return (
    <div>
      <div className='switchTitles'>
        <h3 onClick={toggleList1} className='switch '>
          Laptops
        </h3>
        <h3 onClick={toggleList2} className='switch'>
          Fashion Wear
        </h3>
      </div>
      <div className='toggle1'>
        <Laptops data={ourdata.laptops} />
      </div>
      <div className='toggle2'>
        <Fashion data={ourdata.clothes} />
      </div>
    </div>
  );
}
