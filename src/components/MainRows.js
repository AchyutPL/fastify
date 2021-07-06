import React from "react";
import data from "../data";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import RowMainSlider from "./RowMainSlider";
export default function MainRows() {
  const [sliderRef1] = useKeenSlider({
    slidesPerView: 5,
    mode: "free",
    spacing: 15,
    breakpoints: {
      "(max-width: 768px)": {
        slidesPerView: 2,
      },
    },
  });
  const [sliderRef2] = useKeenSlider({
    slidesPerView: 5,
    mode: "free",
    spacing: 15,
    breakpoints: {
      "(max-width: 768px)": {
        slidesPerView: 2,
      },
    },
  });
  return (
    <>
      <h2
        style={{
          fontFamily: '"Titillium Web", sans-serif',
          fontSize: "22px",
          padding: "5px 15px",
          backgroundColor: "black",
          color: "white",
        }}
      >
        Featured Products
      </h2>
      <div ref={sliderRef1} className='keen-slider'>
        {data.bags.map((bag) => (
          <div className='keen-slider__slide number-slide'>
            <RowMainSlider product={bag} />
          </div>
        ))}
      </div>
      <a href='/'>
        <img style={{ width: "100%" }} src='/sliders/summer.jpg' alt='' />
      </a>
      <h2
        style={{
          fontFamily: '"Titillium Web", sans-serif',
          fontSize: "22px",
          padding: "5px 15px",
          backgroundColor: "black",
          color: "white",
        }}
      >
        New Arrivals
      </h2>
      <div ref={sliderRef2} className='keen-slider'>
        {data.mobiles.map((mobile) => (
          <div className='keen-slider__slide number-slide'>
            <RowMainSlider product={mobile} />
          </div>
        ))}
      </div>
      <a href='/'>
        <img style={{ width: "100%" }} src='/sliders/girl1.jpg' alt='' />
      </a>
    </>
  );
}
