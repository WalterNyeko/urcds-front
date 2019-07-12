import React, { Fragment } from "react";

const SelectionsNav = ({
  showCrashes,
  showCrashStatistics,
  showCrashSelections,
  viewOnGoogleMaps,
  exportToExcel,
  showCrashTabulations,
  showCasualties,
  showVehicles,
  showCrashTrends
}) => {
  return (
    <Fragment>
      <div class="btn-group btn-group-toggle mt-3" data-toggle="buttons">
        <label class="btn btn-secondary active" onClick={showCrashes}>
          <input
            type="radio"
            name="options"
            id="option1"
            autoComplete="off"
            checked
          />{" "}
          Crashes
        </label>
        <label class="btn btn-secondary" onClick={showCrashSelections}>
          <input type="radio" name="options" id="option2" autocomplete="off" />{" "}
          Crash Selection
        </label>
        <label class="btn btn-secondary" onClick={showCrashStatistics}>
          <input type="radio" name="options" id="option3" autocomplete="off" />{" "}
          Crash Statistics
        </label>
        <label class="btn btn-secondary" onClick={showCrashTabulations}>
          <input type="radio" name="options" id="option3" autocomplete="off" />{" "}
          Crash Tabulations
        </label>
        <label class="btn btn-secondary" onClick={showCrashTrends}>
          <input type="radio" name="options" id="option3" autocomplete="off" />{" "}
          Crash Trends
        </label>
        <label class="btn btn-secondary" onClick={showVehicles}>
          <input type="radio" name="options" id="option3" autocomplete="off" />{" "}
          Vehicles
        </label>
        <label class="btn btn-secondary" onClick={showCasualties}>
          <input type="radio" name="options" id="option3" autocomplete="off" />{" "}
          Casualties
        </label>
        <label class="btn btn-secondary" onClick={exportToExcel}>
          <input type="radio" name="options" id="option3" autocomplete="off" />{" "}
          Export To Excel
        </label>
        <label class="btn btn-secondary" onClick={viewOnGoogleMaps}>
          <input type="radio" name="options" id="option3" autocomplete="off" />{" "}
          View On Google Maps
        </label>
      </div>
    </Fragment>
  );
};
export default SelectionsNav;
