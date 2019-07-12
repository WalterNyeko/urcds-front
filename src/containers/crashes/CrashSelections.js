import React, { Component, Fragment } from "react";
import CrashSelectionsComponent from "../../components/crashes/CrashSelections";

class CrashSelections extends Component {
  state = {
    key: "page-1"
  };
  handleChange = key => this.setState({ key });
  render() {
    return (
      <Fragment>
        <CrashSelectionsComponent
          state={this.state}
          handleChange={this.handleChange}
        />
      </Fragment>
    );
  }
}
export default CrashSelections;
