import React from "react";
import { connect } from 'react-redux';
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Auth from "./layouts/Auth/Auth";
import Dashboard from "./layouts/Dashboard/Dashboard";

const hist = createBrowserHistory();

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      a: false
    }
  }
  render() {
    return (
      <div>
          <Router history={hist}>
            <Switch>
              {
                this.state.a ?
                  <Route path="/" component={Auth} />
                  :
                  <Route path="/" component={Dashboard} />
              }
            </Switch>
          </Router>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    exercises: state.exercises
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
