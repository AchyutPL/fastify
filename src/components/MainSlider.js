import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../cssfiles/mainslider/mainslide.css";
export default function MainnSlider() {
  const [pause, setPause] = React.useState(false);
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
  });
  const timer = React.useRef();
  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 3000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);
  return (
    <div ref={sliderRef} className='keen-slider'>
      <div className='keen-slider__slide number-slide1'>
        <img src='./sliders/2.png' alt='' />
      </div>
      <div className='keen-slider__slide number-slide2'>
        <img src='./sliders/girl2.jpg' alt='' />
      </div>
      <div className='keen-slider__slide number-slide2'>
        <img src='./sliders/shoe.jpg' alt='' />
      </div>
    </div>
  );
}
