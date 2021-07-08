import Homescreen from "./screens/Homescreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Productscreen from "./screens/Productscreen";

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
          <Header changemode={changemode} />
          <Switch>
            <Route exact path='/'>
              <Homescreen />
            </Route>
            <Route path='/detail/:id' component={Productscreen} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
