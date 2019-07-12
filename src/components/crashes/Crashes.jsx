import React, { Fragment } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "../../styles/Crashes.css";
import CrashesTable from "./CrashesTable";
import AddCrashForm from "../../containers/crashes/AddCrashForm";

const Crashes = props => {
  return (
    <Fragment>
      <div className="main-content">
        <div className="container-fluid mt-4">
          <div className="text-center">
            <div className="h1">Crash List</div>
          </div>

          <Tabs
            id="controlled-tab-example"
            activeKey={props.state.key}
            onSelect={props.handleChange}
            className="test"
          >
            <Tab
              eventKey="recent-crashes"
              title="Recent Crashes"
              style={{ overflowX: "scroll" }}
            >
              <CrashesTable />
            </Tab>
            <Tab
              eventKey="all-crash"
              title="All Crashes"
              style={{ overflowX: "scroll" }}
            >
              <CrashesTable />
            </Tab>
            <Tab
              eventKey="remove-crash"
              title="Removed Crashes"
              style={{ overflowX: "scroll" }}
            >
              <CrashesTable />
            </Tab>
            <Tab
              eventKey="add-crash"
              title="Add Crash"
              style={{ overflowX: "hidden" }}
            >
              <AddCrashForm />
            </Tab>
          </Tabs>
        </div>
      </div>
    </Fragment>
  );
};
export default Crashes;
