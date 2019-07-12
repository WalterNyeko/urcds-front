import React from "react";
import { Switch, Route } from "react-router-dom";
import { Router } from "react-router";
import NavBar from "./containers/commons/NavBar";
import Footer from "./containers/commons/Footer";
import LoginPage from "./containers/auth/LoginPage";
import { getItemFromLocalStorage } from "./helpers/index";
import history from "./helpers/history";
import Dashboard from "./containers/home/Dashboard";
import Crashes from "./containers/crashes/Crashes";
import Analysis from "./containers/analysis/Analysis";
import Mapping from "./containers/mappings/Mapping";
import Patients from "./containers/patients/Patients";
import Routes from "./helpers/Routes";
import Profile from "./containers/auth/Profile";
import Report from "./containers/reports/Report";
class App extends React.Component {
  state = {
    isLoggedIn: false,
    isLoggedOut: true
  };

  componentWillMount = () => {
    const user = getItemFromLocalStorage("user");
    user && this.setState({ isLoggedIn: true, isLoggedOut: false });
  };

  handleLogout = () => {
    localStorage.removeItem("user");
    this.setState({ isLoggedOut: true, isLoggedIn: false });
    history.push("/");
  };
  render() {
    const { isLoggedIn, isLoggedOut } = this.state;
    console.log(this.state);
    return (
      <Router history={history}>
        <NavBar
          isLoggedIn={isLoggedIn}
          handleLogout={this.handleLogout}
          isLoggedOut={isLoggedOut}
        />
        <Switch>
          <Route path={Routes.landingPage} exact component={LoginPage} />
          <Route path={Routes.dashboard} exact component={Dashboard} />
          <Route path={Routes.crashes} exact component={Crashes} />
          <Route path={Routes.analysis} exact component={Analysis} />
          <Route path={Routes.mappings} exact component={Mapping} />
          <Route path={Routes.patients} exact component={Patients} />
          <Route path={Routes.profile} exact component={Profile} />
          <Route path={Routes.reports} exact component={Report} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
