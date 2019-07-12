import React, { Component, Fragment } from "react";
import AnalysisComponent from "../../components/analysis/Analysis";

class Analysis extends Component {
  state = {
    showingCrashes: true,
    showingCrashStatistics: false,
    showingCrashSelections: false,
    showingGoogleMaps: false,
    showingExportToExcel: false,
    showingCrashTabulations: false,
    showingVehicles: false,
    showingCasualties: false,
    showingCrashTrends: false
  };

  toggleStateValues = async stateValue => {
    Object.keys(this.state).forEach(stateVariable => {
      stateVariable === `${stateValue.toString()}`
        ? this.setState({ [stateVariable]: true })
        : this.setState({ [stateVariable]: false });
    });
  };
  showCrashes = () => {
    this.toggleStateValues("showingCrashes");
  };
  showCrashStatistics = () => {
    this.toggleStateValues("showingCrashStatistics");
  };
  showCrashSelections = () => {
    this.toggleStateValues("showingCrashSelections");
  };
  viewOnGoogleMaps = () => {
    this.toggleStateValues("showingGoogleMaps");
  };
  exportToExcel = () => {
    this.toggleStateValues("showingExportToExcel");
  };
  showCrashTabulations = () => {
    this.toggleStateValues("showingCrashTabulations");
  };
  showCasualties = () => {
    this.toggleStateValues("showingCasualties");
  };
  showVehicles = () => {
    this.toggleStateValues("showingVehicles");
  };
  showCrashTrends = () => {
    this.toggleStateValues("showingCrashTrends");
  };
  render() {
    return (
      <Fragment>
        <AnalysisComponent
          showCrashes={this.showCrashes}
          showCrashStatistics={this.showCrashStatistics}
          showCrashSelections={this.showCrashSelections}
          viewOnGoogleMaps={this.viewOnGoogleMaps}
          exportToExcel={this.exportToExcel}
          showCrashTabulations={this.showCrashTabulations}
          showCasualties={this.showCasualties}
          showVehicles={this.showVehicles}
          showCrashTrends={this.showCrashTrends}
          state={this.state}
        />
      </Fragment>
    );
  }
}
export default Analysis;
