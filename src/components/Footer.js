import React from "react";
import "../cssfiles/footer/footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <div className='paymentAccept'>
        <h2>We Accept</h2>
        <div>
          <img src='/footericons/esewa.png' alt='' />
          <img src='/footericons/fonepay.png' alt='' />
          <img src='/footericons/ime.png' alt='' />
        </div>
      </div>
      <div className='mainFooter'>
        <div className='shophere'>
          <h3>Shop Now</h3>
          <ul>
            <li>
              <Link to='/mobiles'>Mobiles</Link>
            </li>
            <li>
              <Link to='/computers'>Computer and Laptops</Link>
            </li>
            <li>
              <Link to='/mensfashion'>Fashion</Link>
            </li>
          </ul>
        </div>
        <div className='about'>
          <h3>About</h3>
          <h4>
            <Link to='/news '> Company Info</Link>
          </h4>
        </div>
      </div>
      <p>
        @2021 All Rights Reserved <br />
        Created and Designed By : Achyut Paudel
      </p>
    </footer>
  );
}
