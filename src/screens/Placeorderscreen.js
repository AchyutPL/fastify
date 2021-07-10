import React from "react";
import { useSelector } from "react-redux";
export default function Placeorderscreen() {
  const user = useSelector((state) => state.user);

  const cart = useSelector((state) => state.cart);

  const { shippinginfo, buyitems } = cart;
  const { fastifyuser } = user;
  console.log(buyitems);
  console.log(fastifyuser);
  console.log(shippinginfo);
  const placeOrderHandler = () => {};
  return (
    <div className='placeorder'>
      <form onSubmit={placeOrderHandler}>
        <div className='shipping'>
          <h2>Shipping</h2>
          <h3>Name : {fastifyuser.fullname}</h3>
          <h3>Number : {fastifyuser.contact}</h3>
          <h3>
            Address : {shippinginfo.zone}, {shippinginfo.tol}
          </h3>
        </div>
        <div className='method'>
          <h2>Payment</h2>
          <h3>Method : Cash On Delivery</h3>
        </div>
        <div className='orderitems'>
          <div className='cartcontainer cartcontainershipping'>
            <img src={buyitems.path} alt='' />
            <div className='cartname'> {buyitems.productname} </div>
            <div className='cartprice'>Rs.{buyitems.price}</div>
          </div>
        </div>
        <button>Place Order</button>
      </form>
    </div>
  );
}
