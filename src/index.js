import React from "react";
import ReactDOM from "react-dom";

import "assets/css/material-dashboard-react.css?v=1.5.0";

import App from "./App";
import Provider from "react-redux/es/components/Provider";
import configureStore from "./store/configureStore";


const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);


// https://codesandbox.io/s/mmm4rr8799