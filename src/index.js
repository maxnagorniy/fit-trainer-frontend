import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reduser from './redusers';

import "assets/css/material-dashboard-react.css?v=1.5.0";

// import indexRoutes from "routes/index.jsx";
import authRoutes from "./routes/indexAuth";
// import { PrivateRoute } from "./components/PrivatRoute";
import configureStore from './store/configureStore';

const hist = createBrowserHistory();

const store = configureStore();

// const store = createStore(reduser, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        {authRoutes.map((prop, key) => {
          return <Route path={prop.path} component={prop.component} key={key} />;
        })}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);