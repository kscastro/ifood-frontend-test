import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Switch,
} from "react-router-dom";

import Home from "./pages/Home/index"
import Login from "./pages/Login/index"
import { GlobalStyle } from "./styles/global";

const AppRouter = withRouter(({ location }) => (
  <Switch location={location}>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
  </Switch>
));

class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle/>
        <AppRouter />
      </Router>
    );
  }
}

export default App;
