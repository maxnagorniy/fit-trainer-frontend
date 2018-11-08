import React from "react";
import ReactDOM from "react-dom";

import Provider from "react-redux/es/components/Provider";
import configureStore from "./store/configureStore";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import "assets/css/material-dashboard-react.css?v=1.5.0";
import allRoutes from "./routes/index";

const hist = createBrowserHistory();

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        {allRoutes.map((prop, key) => {
          return <Route path={prop.path} component={prop.component} key={key} />;
        })}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);


// https://codesandbox.io/s/mmm4rr8799