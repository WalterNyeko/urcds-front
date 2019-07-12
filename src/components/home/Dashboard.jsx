import React, { Fragment } from "react";
import "../../styles/Dashboard.css";
import { Pie, Chart } from "react-chartjs-2";
import { severityOptions, causesOptions } from "../../helpers/Chart";

const Dashboard = () => {
  Chart.defaults.global.defaultFontColor = "black";
  Chart.defaults.global.defaultFontSize = 16;

  const severityData = {
    labels: ["simple ", "serious", "light", "fatal"],
    datasets: [
      {
        fill: true,
        backgroundColor: ["black", "gray", "blue", "red"],
        data: [25, 35, 25, 15],
        borderColor: ["black", "black", "black", "black"],
        borderWidth: [2, 2]
      }
    ]
  };

  const causesData = {
    labels: ["simple ", "serious", "light", "fatal"],
    datasets: [
      {
        fill: true,
        backgroundColor: ["black", "gray", "blue", "red"],
        data: [25, 35, 25, 15],
        borderColor: ["black", "black", "black", "black"],
        borderWidth: [2, 2]
      }
    ]
  };

  return (
    <Fragment>
      <div className="main-content mt-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4" />
            <div className="col-md-4 text-center">
              <span className="text-center h1">
                Crash Statistics <br />
                <small className="text-center font-weight-bold mt-2 h5">
                  <em>(based on 2132 crashes)</em>
                </small>
              </span>
            </div>
            <div className="col-md-4" />

            <div className="col-md-6 mt-4">
              <div className="card text-center lower-cards">
                <div className="card-header">
                  <p className="card-text h4">Main Cause of Crash</p>
                </div>
                <div className="card-body">
                  <Pie data={causesData} options={causesOptions} />
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-4">
              <div className="card text-center lower-cards">
                <div className="card-header">
                  <p className="card-text h4">Crash Severity</p>
                </div>
                <div className="card-body">
                  <Pie data={severityData} options={severityOptions} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Dashboard;
