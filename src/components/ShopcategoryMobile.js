import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import "../cssfiles/categorybar/categorymobile.css";
import MenuIcon from "@material-ui/icons/Menu";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
export default function ShopcategoryMobile() {
  const showSlideBar = () => {
    const shopByCategoryMob = document.querySelector(".shopByCategoryMob");
    shopByCategoryMob.classList.remove("hideBar");
    shopByCategoryMob.classList.toggle("showBar");
  };
  const hideSideBar = () => {
    const shopByCategoryMob = document.querySelector(".shopByCategoryMob");
    shopByCategoryMob.classList.toggle("hideBar");
    shopByCategoryMob.classList.remove("showBar");
  };
  const hideContent_Plus1 = () => {
    const ulList1 = document.querySelector(".ulList1");
    ulList1.classList.toggle("showLists1");
  };
  const hideContent_Plus2 = () => {
    const ulList2 = document.querySelector(".ulList2");
    ulList2.classList.toggle("showLists2");
  };
  const hideContent_Plus3 = () => {
    const ulList3 = document.querySelector(".ulList3");
    ulList3.classList.toggle("showLists3");
  };
  const hideContent_Plus4 = () => {
    const ulList4 = document.querySelector(".ulList4");
    ulList4.classList.toggle("showLists4");
  };
  return (
    <>
      <div className='categoryMob'>
        <div className='leftmobcat'>
          <div
            className='shopByCategoryMobile'
            style={{ display: "flex", alignItems: "center" }}
            onClick={showSlideBar}
          >
            <MenuIcon style={{ color: "white", cursor: "pointer" }} />
            <p>Shop By Category</p>
          </div>
        </div>
        <div className='rightmobcat'>
          <a href='/'>News</a>
        </div>
      </div>
      <div className='shopByCategoryMob'>
        <div className='menu'>
          <p>Menu</p>
          <CloseIcon style={{ fontSize: "30px" }} onClick={hideSideBar} />
        </div>
        <div className='mobileContent'>
          <div>
            <h3>Mobiles</h3>
            <AddCircleOutlineIcon onClick={hideContent_Plus1} />
          </div>
          <ul className='ulList1'>
            <li>
              <a href='/'> Apple </a>
            </li>
            <li>
              <a href='/'> Samsung </a>
            </li>
            <li>
              <a href='/'> Huwaei </a>
            </li>
            <li>
              <a href='/'> Oppo </a>
            </li>
            <li>
              <a href='/'> Vivo </a>
            </li>
          </ul>
        </div>
        <div className='menFashion'>
          <div>
            <h3> Men's Fashion</h3>
            <AddCircleOutlineIcon onClick={hideContent_Plus2} />
          </div>
          <ul className='ulList2'>
            <li>
              <a href='/'> Gucchi </a>
            </li>
            <li>
              <a href='/'> Watches </a>
            </li>
          </ul>
        </div>
        <div className='womenFashion'>
          <div>
            <h3> Womens's Fashion</h3>
            <AddCircleOutlineIcon onClick={hideContent_Plus3} />
          </div>
          <ul className='ulList3'>
            <li>
              <a href='/'> Gucchi </a>
            </li>
            <li>
              <a href='/'> Onepiece </a>
            </li>
          </ul>
        </div>
        <div className='computer'>
          <div>
            <h3> Computers and Laptops</h3>
            <AddCircleOutlineIcon onClick={hideContent_Plus4} />
          </div>
          <ul className='ulList4'>
            <li>
              <a href='/'> Asus </a>
            </li>
            <li>
              <a href='/'> Msi </a>
            </li>
            <li>
              <a href='/'> Acer </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
