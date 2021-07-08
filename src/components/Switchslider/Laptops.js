import React from "react";
// import data from "../../data";
import RowMainSlider from "../RowMainSlider";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
export default function Laptops({ data }) {
  const [sliderRef] = useKeenSlider({
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
    <div ref={sliderRef} className='keen-slider'>
      {data.map((laptop) => (
        <div key={laptop._id} className='keen-slider__slide number-slide'>
          <RowMainSlider product={laptop} />
        </div>
      ))}
    </div>
  );
}
