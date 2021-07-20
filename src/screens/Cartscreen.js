import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCart } from "../components/redux/actions/actions";
import { Link } from "react-router-dom";
import "../cssfiles/cart/cartscreen.css";
export default function Cartscreen(props) {
  const cartData = useSelector((state) => state.cart);
  const { cartitems } = cartData;
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  console.log(cartitems);

  const removeCartHandler = (id) => {
    dispatch(removeCart(id));
  };
  console.log(cartitems);
  return (
    <>
      <div className='maincart'>
        {cartitems.length === 0 ? (
          <>
            <h2 style={{ textAlign: "center" }}>
              Your Cart Is Empty <br />
              <Link to='/' style={{ textDecoration: "none", fontSize: "15px" }}>
                Back to Shopping
              </Link>
            </h2>
          </>
        ) : (
          <h2 style={{ textAlign: "center" }}>Your Cart Items</h2>
        )}

        {cartitems.map((item) => (
          <div className='maincart'>
            <div className='cartSub'>
              <div className='cartItems'>
                <img src={item.path} alt={item.productname} />
                <p>{item.productname}</p>
                <p>Rs.{item.price}</p>
                <p style={{ width: "70px" }}>Qty: 1</p>
                <div>
                  <button onClick={() => removeCartHandler(item.product)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
