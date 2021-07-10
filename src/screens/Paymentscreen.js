import React from "react";
import { useSelector } from "react-redux";
import "../cssfiles/payment_placeorder/place_placeorder.css";
import { useHistory } from "react-router-dom";
export default function Paymentscreen() {
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const { fastifyuser } = user;
  const paymentHandler = () => {
    if (fastifyuser) {
      history.push("/placeorder");
    }
  };
  return (
    <div>
      <form className='paymentform' onSubmit={paymentHandler}>
        <h2>Choose Payment Method</h2>
        <div>
          <input type='radio' name='cash' id='cash' required />
          <label htmlFor='cash'>Cash On Delivery</label>
        </div>
        <button>Continue</button>
      </form>
    </div>
  );
}
