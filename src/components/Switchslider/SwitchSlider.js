import React from "react";
import Laptops from "./Laptops";
import Fashion from "./Fashion";
import "../../cssfiles/switchslider/switchslider.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function SwitchSlider() {
  return (
    <Router>
      <div>
        <div className='switchTitles'>
          <h3>
            <Link to='/'> Laptops</Link>
          </h3>
          <h3>
            <Link to='/fashion_homescreen'> Fashion Wear</Link>
          </h3>
        </div>

        <Switch>
          <Route exact path='/' component={Laptops} />
          <Route exact path='/fashion_homescreen' component={Fashion} />
        </Switch>
      </div>
    </Router>
  );
}
