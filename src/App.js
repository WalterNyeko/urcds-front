import React from "react";
import { Switch, Route } from "react-router-dom";
import { Router } from "react-router";
import history from "./helpers/history";
import Routes from "./helpers/Routes";
import Dashboard from "./components/dashboard/Home";
import "react-table/react-table.css";

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path={Routes.dashboard} exact component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
