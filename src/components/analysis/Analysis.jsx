import React, { Fragment } from "react";
import CrashTable from "../../components/crashes/CrashesTable";
import CrashSelections from "../../containers/crashes/CrashSelections";
import SelectionsNav from "./SelectionsNav";
const Analysis = ({
  showCrashes,
  showCrashStatistics,
  showCrashSelections,
  viewOnGoogleMaps,
  exportToExcel,
  showCrashTabulations,
  showCasualties,
  showVehicles,
  showCrashTrends,
  state
}) => {
  return (
    <Fragment>
      <div className="main-content">
        <div className="container-fluid">
          <SelectionsNav
            showCrashes={showCrashes}
            showCrashStatistics={showCrashStatistics}
            showCrashSelections={showCrashSelections}
            viewOnGoogleMaps={viewOnGoogleMaps}
            exportToExcel={exportToExcel}
            showCrashTabulations={showCrashTabulations}
            showCasualties={showCasualties}
            showVehicles={showVehicles}
            showCrashTrends={showCrashTrends}
          />
          {state.showingCrashes && <CrashTable />}
          {state.showingCrashSelections && <CrashSelections />}
        </div>
      </div>
    </Fragment>
  );
};
export default Analysis;
