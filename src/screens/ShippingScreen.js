import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { shippingsave } from "../components/redux/actions/actions";
export default function ShippingScreen() {
  const user = useSelector((state) => state.user);
  const { fastifyuser } = user;
  const history = useHistory();
  if (!fastifyuser) {
    history.push("/signin");
  }
  console.log(fastifyuser);
  const [fullname, setfullname] = useState(fastifyuser.fullname);
  const [contact, setcontact] = useState(fastifyuser.contact);
  const [province, setprovince] = useState("");
  const [zone, setzone] = useState("");
  const [tol, settol] = useState("");
  const dispatch = useDispatch();
  const shippinginfo = {
    contact: contact,
    province: province,
    zone: zone,
    tol: tol,
  };

  const saveData = (e) => {
    e.preventDefault();
    dispatch(shippingsave(shippinginfo));
    history.push("/payment");
  };

  return (
    <div>
      <div className='shippingcontainer'>
        <h2>
          Shipping Information{" "}
          <span style={{ fontSize: "15px", color: "red" }}>
            ( Warning : All the information will be used for your shipping
            purpose so provide valid informations.)
          </span>{" "}
        </h2>
        <form className='signinform' onSubmit={saveData}>
          <label htmlFor='fullname'>Fullname:</label>
          <input
            type='text'
            name='fullname'
            id='fullname'
            value={fullname}
            onChange={(e) => setfullname(e.target.value)}
            required
          />
          <label htmlFor='number'>Contact Number: </label>
          <input
            type='number'
            name='number'
            id='number'
            value={contact}
            onChange={(e) => setcontact(e.target.value)}
            required
          />
          <label htmlFor='number'>Select the province: </label>
          <select
            name=''
            id=''
            value={province}
            onChange={(e) => setprovince(e.target.value)}
            required
          >
            <option value='' disabled>
              Select the province
            </option>
            <option value='Bagmati'>Bagmati</option>
            <option value='Gandaki'>Gandaki</option>
          </select>
          <label htmlFor='number'>Select the Zone:</label>
          <select
            name=''
            id=''
            value={zone}
            onChange={(e) => setzone(e.target.value)}
          >
            <option value='' disabled>
              Select the Zone
            </option>
            <option value='Kathmandu'>Kathmandu</option>
            <option value='Lalitpur'>Lallitpur</option>
          </select>
          <label htmlFor='tol'>Tol: </label>
          <input
            type='address'
            name='tol'
            id='tol'
            value={tol}
            onChange={(e) => settol(e.target.value)}
            required
          />
          <button type='submit'>Continue</button>
        </form>
      </div>
    </div>
  );
}
