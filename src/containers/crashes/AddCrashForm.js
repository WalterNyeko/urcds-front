import React, { Component, Fragment } from "react";
import AddCrashFormComponent from "../../components/crashes/AddCrashForm";
import moment from "moment-jalaali";

class AddCrashForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  render() {
    return (
      <Fragment>
        <AddCrashFormComponent
          handleChange={this.handleChange}
          state={this.state}
        />
      </Fragment>
    );
  }
}
export default AddCrashForm;
