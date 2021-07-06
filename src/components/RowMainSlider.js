import React from "react";
import "../cssfiles/rowslider/rowslider.css";

export default function RowMainSlider({ product }) {
  return (
    <div className='rowMainSlider'>
      <div className='sliderItems'>
        <div className='image'>
          <a href='/'>
            <img src={product.path} alt={product.productname} />
          </a>
        </div>
        <div className='productName'>
          <a href='/'>
            <h3>{product.productname}</h3>
          </a>
        </div>
        <div className='price'>{product.price}</div>
        <div className='discount'> Rs.700</div>
      </div>
    </div>
  );
}
