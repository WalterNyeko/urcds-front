import React, { Component, Fragment } from "react";
import CrashesComponent from "../../components/crashes/Crashes";

class Crashes extends Component {
  state = {
    perPage: 0,
    currentPage: 1,
  };

  handleChange = key => this.setState({ key });

  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }
  render() {
    return (
      <Fragment>
        <CrashesComponent state={this.state} handleChange={this.handleChange} />
      </Fragment>
    );
  }
}
export default Crashes;
