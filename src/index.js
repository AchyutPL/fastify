import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./components/redux/store";
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();

//JavaScript for switching links
let switching = document.querySelectorAll(".switch");

switching.forEach((links) => {
  links.addEventListener("click", () => {
    switching.forEach((link) => link.classList.remove("active"));
    links.classList.add("active");
  });
});
