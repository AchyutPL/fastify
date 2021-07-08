import React from "react";
import "../cssfiles/header/header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
export default function Header({ changemode }) {
  const showSearchArea = () => {
    const searcharea = document.querySelector(".searchArea");
    searcharea.classList.toggle("showsearcharea");
  };
  return (
    <>
      <div className='upperHeader'>
        <div className='contact'>Contact :01-444555</div>
        <div className='logmod'>
          <div className='loginRegister'>
            <a href='/'>Login/Register</a>{" "}
          </div>
          <div className='mode' onClick={changemode}>
            <div className='circle'></div>
          </div>
        </div>
      </div>
      <div className='lowerHeader'>
        <div className='logo'>
          <Link to='/'>
            <img src='/logo.png' alt='name' />
          </Link>
        </div>
        <div className='searchArea'>
          <input type='search' name='' id='' placeholder='Search here...' />
          <SearchIcon className='searchIcon' />
        </div>
        <div className='cart'>
          <SearchIcon
            className='searchIconForMobile'
            onClick={showSearchArea}
          />
          <a href='/'>
            <ShoppingCartIcon className='carticon' />
          </a>
          <a href='/'>Cart</a>
          <span className='cartCounter'>0</span>
        </div>
      </div>
    </>
  );
}
