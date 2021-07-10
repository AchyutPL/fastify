import React from "react";
import "../cssfiles/categorybar/category.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import CancelIcon from "@material-ui/icons/Cancel";
export default function Category() {
  const showCategoryContent = () => {
    const showCategoryContent = document.querySelector(
      ".shopByCategory_Content"
    );
    showCategoryContent.classList.toggle("categoryContentVisible");
  };
  const crossFunction = () => {
    let shopByCategory_Content = document.querySelector(
      ".shopByCategory_Content"
    );
    shopByCategory_Content.classList.toggle("categoryContentVisible");
  };
  return (
    <>
      <div className='category'>
        <div className='leftCategory'>
          <div
            className='shopByCategory'
            style={{ display: "flex", alignItems: "center" }}
            onClick={showCategoryContent}
          >
            <MenuIcon style={{ color: "white", cursor: "pointer" }} />
            <p>Shop By Category</p>
          </div>
          <div className='featured'>
            <Link to='/featuredproducts'>Featured Products</Link>
          </div>
          <div className='topSelling'>
            <Link to='/topselling'>Top Selling Products</Link>
          </div>
        </div>
        <div className='rightCategory'>
          <Link to='/news'>News</Link>
        </div>
      </div>

      <div className='shopByCategory_Content'>
        <div>
          <Link to='/mobiles'>Mobiles</Link>
          <li>
            <Link to='/'> Apple</Link>
          </li>
          <li>
            <Link to='/'> Samsung</Link>
          </li>
          <li>
            <Link to='/'>Huwaei</Link>
          </li>
          <li>
            <Link to='/'> Oppo</Link>
          </li>
          <li>
            <Link to='/'> Vivo</Link>
          </li>
        </div>
        <div>
          <Link to='/mensfashion'>Men's Fashion</Link>
          <li>
            <Link to='/'>Gucchi</Link>
          </li>
        </div>
        <div>
          <Link to='/womenfashion'>Women's Fashion</Link>
          <li>
            <Link to='/'>Gucchi</Link>
          </li>
          <li>
            <Link to='/'>Onepiece</Link>
          </li>
        </div>
        <div>
          <Link to='/computers'>Computer and Laptops</Link>
          <li>
            <Link to='/'>Asus</Link>
          </li>
          <li>
            <Link to='/'>Msi</Link>
          </li>
          <li>
            <Link to='/'>Acer</Link>
          </li>
        </div>
        <div className='cross' onClick={crossFunction}>
          <CancelIcon style={{ color: "red" }} />
        </div>
      </div>
    </>
  );
}
