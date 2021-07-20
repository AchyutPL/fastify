import Homescreen from "./screens/Homescreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Productscreen from "./screens/Productscreen";
import Cartscreen from "./screens/Cartscreen";
import ShopcategoryMobile from "./components/ShopcategoryMobile";
import Category from "./components/Category";
import Productgroupscreen from "./screens/Productgroupscreen";
import NewsandCompany from "./screens/NewsandCompany";
import SigninScreen from "./screens/SigninScreen";
import Registerscreen from "./screens/Registerscreen";
import ShippingScreen from "./screens/ShippingScreen";
import Paymentscreen from "./screens/Paymentscreen";
import Placeorderscreen from "./screens/Placeorderscreen";
import Searchresultscreen from "./screens/Searchresultscreen";
function App() {
  const changemode = () => {
    const circle = document.querySelector(".circle");
    circle.classList.toggle("circleActive");
    const App = document.querySelector(".App");
    App.classList.toggle("darkMode");
  };
  return (
    <>
      <Router>
        <div className='App'>
          <div className='headSection'>
            <Header changemode={changemode} />
            <Category />
            <ShopcategoryMobile />
          </div>
          <div className='occupy'>
            <Switch>
              <Route exact path='/'>
                <Homescreen />
              </Route>
              <Route path='/detail/:id' component={Productscreen} />
              <Route path='/cart/:id?' component={Cartscreen} />
              <Route
                path='/featuredproducts'
                component={() => (
                  <Productgroupscreen title={`Featured Products`} />
                )}
              />
              <Route
                path='/topselling'
                component={() => (
                  <Productgroupscreen title={`Top Selling Products`} />
                )}
              />
              <Route
                path='/mobiles'
                component={() => <Productgroupscreen title={`Mobiles`} />}
              />
              <Route
                path='/mensfashion'
                component={() => <Productgroupscreen title={`Men's Fashion`} />}
              />
              <Route
                path='/womenfashion'
                component={() => (
                  <Productgroupscreen title={`Women's Fashion`} />
                )}
              />
              <Route
                path='/computers'
                component={() => <Productgroupscreen title={`Computers`} />}
              />
              <Route path='/news' component={() => <NewsandCompany />} />
              <Route path='/signin' component={() => <SigninScreen />} />
              <Route path='/register' component={() => <Registerscreen />} />
              <Route path='/shipping' component={() => <ShippingScreen />} />
              <Route path='/payment' component={() => <Paymentscreen />} />
              <Route
                path='/placeorder'
                component={() => <Placeorderscreen />}
              />
              <Route path='/search/:term' component={Searchresultscreen} />
            </Switch>
          </div>
          <div className='lastSection'>
            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
