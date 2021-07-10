import React, { useEffect, useState } from "react";
import "../cssfiles/sign_register_shipping/sign_register_shipping.css";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../components/redux/actions/actions";

export default function SigninScreen(props) {
  const user = useSelector((state) => state.user);
  const { fastifyuser, error } = user;

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const signinData = {
    email: email,
    password: password,
  };
  const history = useHistory();
  const postData = (e) => {
    e.preventDefault();
    dispatch(signin(signinData));
  };
  useEffect(() => {
    if (fastifyuser) {
      history.push("/");
    }
  }, [fastifyuser, history]);

  return (
    <>
      <div className='signincontainer'>
        <h2>Log In</h2>
        <form className='signinform' onSubmit={postData}>
          <p
            style={{
              fontWeight: "600",
              color: "red",
              fontSize: "18px",
              margin: "2px",
            }}
          >
            {error}
          </p>
          <label htmlFor='email'>Username:</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter your registered email...'
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          />
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
          />
          <button type='submit'>Sign In</button>
          <h5 style={{ textAlign: "center" }}>
            New <Link to='/register'>Register</Link> here
          </h5>
        </form>
      </div>
    </>
  );
}
