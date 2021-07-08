import React from "react";

import RowMainSlider from "../RowMainSlider";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Fashion({ data }) {
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
      {data.map((cloth) => (
        <div key={cloth._id} className='keen-slider__slide number-slide'>
          <RowMainSlider product={cloth} />
        </div>
      ))}
    </div>
  );
}
