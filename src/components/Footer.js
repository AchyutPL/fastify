import React from "react";
import "../cssfiles/footer/footer.css";
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
              <a href='/'>Mobiles</a>
            </li>
            <li>
              <a href='/'>Computer and Laptops</a>
            </li>
            <li>
              <a href='/'>Fashion</a>
            </li>
          </ul>
        </div>
        <div className='about'>
          <h3>About</h3>
          <h4>
            <a href='/'> Company Info</a>
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
