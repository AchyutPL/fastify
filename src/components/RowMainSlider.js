import React from "react";
import "../cssfiles/rowslider/rowslider.css";
import { Link } from "react-router-dom";
export default function RowMainSlider({ product }) {
  return (
    <div className='rowMainSlider'>
      <div className='sliderItems'>
        <div className='image'>
          <Link to={`/detail/${product._id}`}>
            <img src={product.path} alt={product.productname} />
          </Link>
        </div>
        <div className='productName'>
          <Link to={`/detail/${product._id}`}>
            <h3>{product.productname}</h3>
          </Link>
        </div>
        <div className='price'>Rs.{product.price}</div>
        <div className='discount'> Rs.{product.discount}</div>
      </div>
    </div>
  );
}
