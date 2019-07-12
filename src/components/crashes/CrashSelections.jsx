import React, { Fragment } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Severity from "./selections/Severity";
import Causes from "./selections/Causes";
import CrashesTable from "./CrashesTable";
import QueriesTable from "./QueriesTable";

const CrashSelections = ({ state, handleChange }) => {
  return (
    <Fragment>
      <div className="mt-4">
        <Tabs
          id="controlled-tab-example"
          activeKey={state.key}
          onSelect={handleChange}
          className="test"
        >
          <Tab eventKey="page-1" title="Page 1" style={{ overflowX: "scroll" }}>
            <Severity />
          </Tab>
          <Tab eventKey="page-2" title="Page 2" style={{ overflowX: "scroll" }}>
            <Causes />
          </Tab>

          <Tab
            eventKey="all-crashes"
            title="All Crashes"
            style={{ overflowX: "scroll" }}
          >
            <CrashesTable />
          </Tab>

          <Tab
            eventKey="recent-crashes"
            title="Recent Crashes"
            style={{ overflowX: "scroll" }}
          >
            <CrashesTable />
          </Tab>

          <Tab
            eventKey="crash-queries"
            title="Crash Queries"
            style={{ overflowX: "scroll" }}
          >
            <QueriesTable />
          </Tab>
        </Tabs>
      </div>
    </Fragment>
  );
};
export default CrashSelections;
