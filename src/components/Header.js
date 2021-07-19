import React, { useState } from "react";
import "../cssfiles/header/header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "./redux/actions/actions";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
export default function Header({ changemode }) {
  const history = useHistory();
  const [searchterm, setsearchterm] = useState("");

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

  const searchtheterm = () => {
    history.push(`/search/${searchterm}`);
    setsearchterm("");
  };
  return (
    <>
      <div className='upperHeader'>
        <div className='contact'>Contact :01-444555</div>
        <div className='logmod'>
          <div className='loginRegister'>
            {fastifyuser ? (
              <>
                <span className='username'>
                  <AccountCircleIcon
                    style={{
                      position: "relative",
                      top: "6px",
                      color: "grey",
                    }}
                  />
                  {fastifyuser.fullname}
                </span>
                <a href='/signin' onClick={signuserout}>
                  Sign Out
                </a>
              </>
            ) : (
              <Link to='/signin' className='loginformobileonly'>
                Login/Register
              </Link>
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
          <input
            type='search'
            name=''
            id=''
            placeholder='Search here...'
            value={searchterm}
            onChange={(e) => setsearchterm(e.target.value)}
          />
          <SearchIcon className='searchIcon' onClick={searchtheterm} />
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
