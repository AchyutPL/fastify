import React from "react";
import "../cssfiles/categorybar/category.css";
import MenuIcon from "@material-ui/icons/Menu";

export default function Category() {
  const showCategoryContent = () => {
    const showCategoryContent = document.querySelector(
      ".shopByCategory_Content"
    );
    showCategoryContent.classList.toggle("categoryContentVisible");
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
            <MenuIcon style={{ color: "white", cursor: "pointer" }} />{" "}
            <p>Shop By Category</p>
          </div>
          <div className='featured'>
            <a href='/'>Featured Products</a>
          </div>
          <div className='topSelling'>
            <a href='/'>Top Selling Products</a>
          </div>
        </div>
        <div className='rightCategory'>
          <a href='/'>News</a>
        </div>
      </div>

      <div className='shopByCategory_Content'>
        <div>
          <a href='/'>Mobiles</a>
          <li>
            <a href='/'> Apple</a>
          </li>
          <li>
            <a href='/'> Samsung</a>
          </li>
          <li>
            <a href='/'>Huwaei</a>
          </li>
          <li>
            <a href='/'> Oppo</a>
          </li>
          <li>
            <a href='/'> Vivo</a>
          </li>
        </div>
        <div>
          <a href='/'>Men's Fashion</a>
          <li>
            <a href='/'>Gucchi</a>
          </li>
        </div>
        <div>
          <a href='/'>Women's Fashion</a>
          <li>
            <a href='/'>Gucchi</a>
          </li>
          <li>
            <a href='/'>Onepiece</a>
          </li>
        </div>
        <div>
          <a href='/'>Computer and Laptops</a>
          <li>
            <a href='/'>Asus</a>
          </li>
          <li>
            <a href='/'>Msi</a>
          </li>
          <li>
            <a href='/'>Acer</a>
          </li>
        </div>
      </div>
    </>
  );
}
