import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as Routes from "./constants/routes";
import Dashboard from "./dashboard/Home";
import "react-table/react-table.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={Routes.DASHBOARD} exact component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
