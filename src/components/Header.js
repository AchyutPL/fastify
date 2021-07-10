import React from "react";
import "../cssfiles/header/header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "./redux/actions/actions";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
export default function Header({ changemode }) {
  const showSearchArea = () => {
    const searcharea = document.querySelector(".searchArea");
    searcharea.classList.toggle("showsearcharea");
  };
  const cart = useSelector((state) => state.cart);
  const { cartitems } = cart;
  const user = useSelector((state) => state.user);
  const { fastifyuser } = user;
  const dispatch = useDispatch();

  const signuserout = (e) => {
    dispatch(signout());
  };
  return (
    <>
      <div className='upperHeader'>
        <div className='contact'>Contact :01-444555</div>
        <div className='logmod'>
          <div className='loginRegister'>
            {fastifyuser ? (
              <>
                <span>
                  <AccountCircleIcon
                    style={{ position: "relative", top: "6px", color: "grey" }}
                  />
                  {fastifyuser.fullname}
                </span>
                <a href='/signin' onClick={signuserout}>
                  Sign Out
                </a>
              </>
            ) : (
              <Link to='/signin'>Login/Register</Link>
            )}
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
          <Link to='/cart'>
            <ShoppingCartIcon className='carticon' />
          </Link>
          <Link to='/cart'>Cart</Link>
          <span className='cartCounter'>{cartitems.length}</span>
        </div>
      </div>
    </>
  );
}
