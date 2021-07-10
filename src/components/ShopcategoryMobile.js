import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import "../cssfiles/categorybar/categorymobile.css";
import MenuIcon from "@material-ui/icons/Menu";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { Link } from "react-router-dom";
export default function ShopcategoryMobile() {
  const showSlideBar = () => {
    const shopByCategoryMob = document.querySelector(".shopByCategoryMob");
    shopByCategoryMob.classList.remove("hideBar");
    shopByCategoryMob.classList.toggle("showBar");
    document.body.style.overflow = "hidden";
  };
  const hideSideBar = () => {
    const shopByCategoryMob = document.querySelector(".shopByCategoryMob");
    shopByCategoryMob.classList.toggle("hideBar");
    shopByCategoryMob.classList.remove("showBar");
    document.body.style.overflow = "auto";
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
          <Link to='/news'>News</Link>
        </div>
      </div>
      <div className='shopByCategoryMob'>
        <div className='menu'>
          <p>Menu</p>
          <CloseIcon style={{ fontSize: "30px" }} onClick={hideSideBar} />
        </div>
        <div className='mobileContent'>
          <div>
            <h3>
              <Link to='/mobiles'> Mobiles</Link>
            </h3>
            <AddCircleOutlineIcon onClick={hideContent_Plus1} />
          </div>
          <ul className='ulList1'>
            <li>
              <Link to='/'> Apple </Link>
            </li>
            <li>
              <Link to='/mobiles'> Samsung </Link>
            </li>
            <li>
              <Link to='/mobiles'> Huwaei </Link>
            </li>
            <li>
              <Link to='/mobiles'> Oppo </Link>
            </li>
            <li>
              <Link to='/mobiles'> Vivo </Link>
            </li>
          </ul>
        </div>
        <div className='menFashion'>
          <div>
            <h3>
              <Link to='/mensfashion'> Men's Fashion</Link>
            </h3>
            <AddCircleOutlineIcon onClick={hideContent_Plus2} />
          </div>
          <ul className='ulList2'>
            <li>
              <Link to='/mobiles'> Gucchi </Link>
            </li>
            <li>
              <Link to='/mobiles'> Watches </Link>
            </li>
          </ul>
        </div>
        <div className='womenFashion'>
          <div>
            <h3>
              {" "}
              <Link to='/womenfashion'> Women's Fashion</Link>
            </h3>
            <AddCircleOutlineIcon onClick={hideContent_Plus3} />
          </div>
          <ul className='ulList3'>
            <li>
              <Link to='/mobiles'> Gucchi </Link>
            </li>
            <li>
              <Link to='/mobiles'> Onepiece </Link>
            </li>
          </ul>
        </div>
        <div className='computer'>
          <div>
            <h3>
              {" "}
              <Link to='/computers'> Computer and Laptops</Link>
            </h3>
            <AddCircleOutlineIcon onClick={hideContent_Plus4} />
          </div>
          <ul className='ulList4'>
            <li>
              <Link to='/mobiles'> Asus </Link>
            </li>
            <li>
              <Link to='/mobiles'> Msi </Link>
            </li>
            <li>
              <Link to='/mobiles'> Acer </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
