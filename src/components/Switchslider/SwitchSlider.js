import React, { useState } from "react";
import Laptops from "./Laptops";
import Fashion from "./Fashion";
import "../../cssfiles/switchslider/switchslider.css";

export default function SwitchSlider({ ourdata }) {
  const [display, setdisplay] = useState("first");
  const toggleList1 = () => {
    setdisplay("first");
  };
  const toggleList2 = () => {
    setdisplay("second");
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
      {display === "first" ? (
        <Laptops data={ourdata.laptops} />
      ) : display === "second" ? (
        <Fashion data={ourdata.clothes} />
      ) : (
        <Laptops data={ourdata.laptops} />
      )}
    </div>
  );
}
