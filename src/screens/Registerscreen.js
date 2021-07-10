import React, { useState } from "react";
import "../cssfiles/sign_register_shipping/sign_register_shipping.css";
import { useDispatch, useSelector } from "react-redux";
import { registeruser } from "../components/redux/actions/actions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { useHistory } from "react-router-dom";
export default function Registerscreen(props) {
  const newuser = useSelector((state) => state.newuser);
  const { loading, error } = newuser;
  const dispatch = useDispatch();
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [contact, setcontact] = useState("");
  const [address, setaddress] = useState("");
  const [passerror, setpasserror] = useState("");
  const userData = {
    fullname: fullname,
    email: email,
    password: password,
    contact: contact,
    address: address,
  };
  const redirect = "/signin";
  const history = useHistory();
  const postData = (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      setpasserror("Password is not matching!");
    } else if (password.length < 5) {
      setpasserror("Password is too short!");
    } else {
      dispatch(registeruser(userData));
      setfullname("");
      setemail("");
      setpassword("");
      setcpassword("");
      setaddress("");
      setcontact("");
      setpasserror("");
      history.push(redirect);
    }
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        <div className='registercontainer'>
          <h2>
            Register{" "}
            <span style={{ fontSize: "15px", color: "red" }}>
              ( Warning : All the information will be used for your shipping
              purpose so provide valid informations.)
            </span>{" "}
          </h2>
          <form className='signinform' onSubmit={postData}>
            <label htmlFor='fullname'>
              Fullname:
              <span style={{ color: "red", position: "relative", top: "5px" }}>
                *
              </span>
            </label>
            <input
              type='text'
              name='fullname'
              id='fullname'
              required
              value={fullname}
              onChange={(e) => setfullname(e.target.value)}
            />
            <label htmlFor='email'>
              E-Mail:{" "}
              <span style={{ color: "red", position: "relative", top: "5px" }}>
                *
              </span>
            </label>
            <input
              type='email'
              name='email'
              id='email'
              required
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <label htmlFor='password'>
              Password:{" "}
              <span style={{ color: "red", position: "relative", top: "5px" }}>
                *
              </span>
            </label>
            <input
              type='password'
              name='password'
              id='password'
              required
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <label htmlFor='cpassword'>
              Confirm Password:{" "}
              <span style={{ color: "red", position: "relative", top: "5px" }}>
                *
              </span>
              <span
                style={{
                  color: "red",
                  marginLeft: "5px",
                  fontSize: "15px",
                }}
              >
                {passerror}
              </span>
            </label>
            <input
              type='password'
              name='cpassword'
              id='cpassword'
              required
              value={cpassword}
              onChange={(e) => setcpassword(e.target.value)}
            />
            <label htmlFor='contactno'>
              Contact No:{" "}
              <span style={{ color: "red", position: "relative", top: "5px" }}>
                *
              </span>
            </label>
            <input
              type='number'
              name='contactno'
              id='contactno'
              required
              value={contact}
              onChange={(e) => setcontact(e.target.value)}
            />
            <label htmlFor='address'>
              Address:{" "}
              <span style={{ color: "red", position: "relative", top: "5px" }}>
                *
              </span>
            </label>
            <input
              type='text'
              name='address'
              id='address'
              required
              value={address}
              onChange={(e) => setaddress(e.target.value)}
            />
            <button type='submit'>Register</button>
          </form>
        </div>
      )}
    </>
  );
}
