import React, { Fragment, Component } from "react";
import DatePicker from "react-datepicker2";
import TheModal from "../../helpers/Modal";
import "../../styles/Crashes.css";

class AddCrashForm extends Component {
  state = {
    level: 1
  };

  handleNext = () => {
    this.setState({ level: 2 });
  };

  handlePrevious = () => {
    this.setState({ level: 1 });
  };

  renderCrashDataForm = () => {
    return (
      <div className="col-md-4">
        <div className="card">
          <div className="card-header text-center mb-5">
            <strong className="mt-1">Crash Data</strong>
          </div>
          <div className="card-body row">
            <form className="form-inline">
              <div className="col-md-5  text-right">
                <label for="TAR-No" className="mr-sm-2">
                  TAR Number:<sub className="text-danger h4">*</sub>
                </label>
              </div>
              <div className="col-md-7">
                <input
                  type="text"
                  className="form-control mb-2 mr-sm-2"
                  id="TAR-No"
                />
              </div>

              <div className="col-md-5">
                <label for="district" className="mr-sm-2">
                  District:
                </label>
              </div>
              <div className="col-md-7">
                <input
                  type="text"
                  className="form-control mb-2 mr-sm-2"
                  id="district"
                />
              </div>
              <div className="col-md-5">
                <label for="district" className="mr-sm-2">
                  Police Station:<sub className="text-danger h4">*</sub>
                </label>
              </div>
              <div className="col-md-7">
                <input
                  type="text"
                  className="form-control mb-2 mr-sm-2"
                  id="district"
                />
              </div>
              <div className="col-md-5">
                <label for="district" className="mr-sm-2">
                  Town/Village:
                </label>
              </div>
              <div className="col-md-7">
                <input
                  type="text"
                  className="form-control mb-2 mr-sm-2"
                  id="district"
                />
              </div>
              <div className="col-md-5">
                <label for="district" className="mr-sm-2">
                  Road:
                </label>
              </div>
              <div className="col-md-7">
                <input
                  type="text"
                  className="form-control mb-2 mr-sm-2"
                  id="district"
                />
              </div>
              <div className="col-md-5">
                <label for="district" className="mr-sm-2">
                  Road Number:
                </label>
              </div>
              <div className="col-md-7">
                <input
                  type="text"
                  className="form-control mb-2 mr-sm-2"
                  id="district"
                />
              </div>
              <div className="col-md-5">
                <label for="district" className="mr-sm-2">
                  Crash Place:
                </label>
              </div>
              <div className="col-md-7">
                <input
                  type="text"
                  className="form-control mb-2 mr-sm-2"
                  id="district"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  renderSeverityForm = (state, handleChange) => {
    return (
      <div className="col-md-4">
        <div className="card">
          <div className="card-header text-center">
            <strong>Date & GPS Coordinates</strong>
          </div>
          <div className="card-body">
            <form className="row">
              <div className="col-md-4">
                <label htmlFor="date-and-time">
                  <strong>Date and Time of Crash</strong>
                </label>
              </div>
              <div className="col-md-8">
                <DatePicker
                  value={state.startDate}
                  onChange={handleChange}
                  showTimeSelect
                  className="form-control"
                />
              </div>

              <div className="col-md-12 mt-5 mb-2">
                <strong>GPS Cordinates</strong>
              </div>

              <div className="col-md-4">
                <label htmlFor="date-and-time">Latitude (North or South)</label>
              </div>
              <div className="col-md-8 row m-0 p-0">
                <div className="col-md-4">
                  <span className="h2" role="img" aria-labelledby="globe">&#127757;</span>
                  <input
                    type="text"
                    className="form-control mb-2 mr-sm-2"
                    id="district"
                  />
                </div>
                <div className="col-md-4">
                  <span className="h2 text-right">&#176;</span>
                  <input
                    type="text"
                    className="form-control mb-2 mr-sm-2"
                    id="district"
                  />
                </div>
                <div className="col-md-4">
                  <span className="h2 text-right"> &#8221;</span>

                  <input
                    type="text"
                    className="form-control mb-2 mr-sm-2"
                    id="district"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <label htmlFor="date-and-time">Longitude (East)</label>
              </div>
              <div className="col-md-8 row m-0 p-0">
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control mb-2 mr-sm-2"
                    id="district"
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control mb-2 mr-sm-2"
                    id="district"
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control mb-2 mr-sm-2"
                    id="district"
                  />
                </div>
              </div>

              <div className="col-md-12 mt-3 mb-2">
                <strong>Crash Severity</strong>
              </div>
              <div className="row col-md-12">
                <div className="form-check col-md-6 pl-5 mb-2">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="fatal"
                    name="fatal"
                  />
                  <label className="form-check-label" for="fatal">
                    Fatal
                  </label>
                </div>

                <div className="form-check col-md-6">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="serious"
                    name="serious"
                  />
                  <label className="form-check-label" for="serious">
                    Serious
                  </label>
                </div>

                <div className="form-check col-md-6 pl-5 mb-2">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="slight"
                    name="slight"
                  />
                  <label className="form-check-label" for="slight">
                    Slight
                  </label>
                </div>

                <div className="form-check col-md-6">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="damage"
                    name="damage"
                  />
                  <label className="form-check-label" for="damage">
                    Damage Only
                  </label>
                </div>

                <div className="form-check col-md-6 pl-5 mb-2">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="unknown"
                    name="unknown"
                  />
                  <label className="form-check-label" for="unknown">
                    Unknown
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  renderCrashCausesForm = () => {
    return (
      <>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header text-center">
              <strong>Main Cause of Crash</strong>
            </div>
            <div className="card-body">
              <form className="row">
                <div className="row col-md-9">
                  <div className="form-check col-md-12 pl-5">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="fatal"
                      name="fatal"
                    />
                    <label className="form-check-label" for="fatal">
                      Careless Overtaking
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="serious"
                      name="serious"
                    />
                    <label className="form-check-label" for="serious">
                      Careless Pedestrian
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="slight"
                      name="slight"
                    />
                    <label className="form-check-label" for="slight">
                      Using Mobile Phone
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="damage"
                      name="damage"
                    />
                    <label className="form-check-label" for="damage">
                      Dangerous Loading
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="unknown"
                      name="unknown"
                    />
                    <label className="form-check-label" for="unknown">
                      Over Speeding
                    </label>
                  </div>
                  <div className="form-check col-md-12 pl-5">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="fatal"
                      name="fatal"
                    />
                    <label className="form-check-label" for="fatal">
                      Careless Overtaking
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="serious"
                      name="serious"
                    />
                    <label className="form-check-label" for="serious">
                      Careless Pedestrian
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="slight"
                      name="slight"
                    />
                    <label className="form-check-label" for="slight">
                      Using Mobile Phone
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="damage"
                      name="damage"
                    />
                    <label className="form-check-label" for="damage">
                      Dangerous Loading
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="unknown"
                      name="unknown"
                    />
                    <label className="form-check-label" for="unknown">
                      Over Speeding
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="fatal"
                      name="fatal"
                    />
                    <label className="form-check-label" for="fatal">
                      Careless Overtaking
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="serious"
                      name="serious"
                    />
                    <label className="form-check-label" for="serious">
                      Careless Pedestrian
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="slight"
                      name="slight"
                    />
                    <label className="form-check-label" for="slight">
                      Using Mobile Phone
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="damage"
                      name="damage"
                    />
                    <label className="form-check-label" for="damage">
                      Dangerous Loading
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="unknown"
                      name="unknown"
                    />
                    <label className="form-check-label" for="unknown">
                      Over Speeding
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="fatal"
                      name="fatal"
                    />
                    <label className="form-check-label" for="fatal">
                      Careless Overtaking
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="serious"
                      name="serious"
                    />
                    <label className="form-check-label" for="serious">
                      Careless Pedestrian
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="slight"
                      name="slight"
                    />
                    <label className="form-check-label" for="slight">
                      Using Mobile Phone
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="damage"
                      name="damage"
                    />
                    <label className="form-check-label" for="damage">
                      Dangerous Loading
                    </label>
                  </div>
                </div>

                <div className="col-md-3">
                  <button
                    type="button"
                    className="btn btn-info btn-arrow-right"
                    onClick={this.handleNext}
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  };

  renderCollitionTypeForm = () => {
    return (
      <div className="col-md-3">
        <div className="card">
          <div className="card-header text-center">
            <strong>Type of Collition</strong>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-12 mt-2 mb-2">
                <strong>Collition Type</strong>
              </div>
              <div className="row col-md-12">
                <div className="form-check col-md-12 pl-5 mb-2">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="fatal"
                    name="fatal"
                  />
                  <label className="form-check-label" for="fatal">
                    Hit Pedestrian
                  </label>
                </div>

                <div className="form-check col-md-12 pl-5 mb-2">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="serious"
                    name="serious"
                  />
                  <label className="form-check-label" for="serious">
                    Single vehicle, off road
                  </label>
                </div>

                <div className="form-check col-md-12 pl-5 mb-2">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="slight"
                    name="slight"
                  />
                  <label className="form-check-label" for="slight">
                    Single vehicle, hit object
                  </label>
                </div>

                <div className="form-check col-md-12 pl-5 mb-2">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="damage"
                    name="damage"
                  />
                  <label className="form-check-label" for="damage">
                    Head-on collision
                  </label>
                </div>

                <div className="form-check col-md-12 pl-5 mb-2">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="unknown"
                    name="unknown"
                  />
                  <label className="form-check-label" for="unknown">
                    Rear end
                  </label>
                </div>

                <div className="form-check col-md-12 pl-5 mb-2">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="damage"
                    name="damage"
                  />
                  <label className="form-check-label" for="damage">
                    Side swipe
                  </label>
                </div>

                <div className="form-check col-md-12 pl-5 mb-2">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="unknown"
                    name="unknown"
                  />
                  <label className="form-check-label" for="unknown">
                    Angle
                  </label>
                </div>

                <div className="form-check col-md-12 pl-5 mb-2">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="damage"
                    name="damage"
                  />
                  <label className="form-check-label" for="damage">
                    Others
                  </label>
                </div>

                <div className="form-check col-md-12 pl-5 mb-2">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="unknown"
                    name="unknown"
                  />
                  <label className="form-check-label" for="unknown">
                    Unknown
                  </label>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-info btn-arrow-left mb-5 ml-5 mt-5 mr-5"
                onClick={this.handlePrevious}
              >
                Previous
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderVehicleFailureForm = () => {
    return (
      <div className="col-md-3">
        <div className="card">
          <div className="card-header text-center">
            <strong>Vehicle Failure Causing Crash</strong>
          </div>
          <div className="card-body">
            <form className="row">
              <div className="col-md-12 mt-2 mb-2">
                <strong>Vehicle Failure</strong>
              </div>
              <div className="row col-md-12">
                <div className="form-check col-md-12 pl-5 mb-2">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="fatal"
                    name="fatal"
                  />
                  <label className="form-check-label" for="fatal">
                    No mechanical defects
                  </label>
                </div>

                <div className="form-check col-md-12 pl-5 mb-2">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="serious"
                    name="serious"
                  />
                  <label className="form-check-label" for="serious">
                    Brake failure
                  </label>
                </div>

                <div className="form-check col-md-12 pl-5 mb-2">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="slight"
                    name="slight"
                  />
                  <label className="form-check-label" for="slight">
                    Tyre blow out
                  </label>
                </div>

                <div className="form-check col-md-12 pl-5 mb-2">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="damage"
                    name="damage"
                  />
                  <label className="form-check-label" for="damage">
                    Steering wheel failure
                  </label>
                </div>

                <div className="form-check col-md-12 pl-5 mb-2">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="unknown"
                    name="unknown"
                  />
                  <label className="form-check-label" for="unknown">
                    Headlight failure
                  </label>
                </div>

                <div className="form-check col-md-12 pl-5 mb-2">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="damage"
                    name="damage"
                  />
                  <label className="form-check-label" for="damage">
                    Other failure
                  </label>
                </div>

                <div className="form-check col-md-12 pl-5 mb-2">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="unknown"
                    name="unknown"
                  />
                  <label className="form-check-label" for="unknown">
                    Unknown
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  renderRoadEnvironmentForm = () => {
    return (
      <div className="col-md-3">
        <div className="card">
          <div className="card-header text-center">
            <strong>Road Environment</strong>
          </div>
          <div className="card-body">
            <form className="row">
              <div className="col-md-12 mb-2">
                <strong>Weather</strong>
              </div>
              <div className="row col-md-12">
                <div className="form-check col-md-12 pl-5 mb-1">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="fatal"
                    name="fatal"
                  />
                  <label className="form-check-label" for="fatal">
                    Clear
                  </label>
                </div>

                <div className="form-check col-md-12 pl-5 mb-1">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="serious"
                    name="serious"
                  />
                  <label className="form-check-label" for="serious">
                    Rain
                  </label>
                </div>

                <div className="form-check col-md-12 pl-5 mb-1">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="slight"
                    name="slight"
                  />
                  <label className="form-check-label" for="slight">
                    Mist
                  </label>
                </div>

                <div className="col-md-12 mt-2">
                  <strong>Surface Condition</strong>
                </div>

                <div className="form-check col-md-12 pl-5 mb-1">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="damage"
                    name="damage"
                  />
                  <label className="form-check-label" for="damage">
                    Good
                  </label>
                </div>

                <div className="form-check col-md-12 pl-5 mb-1">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="unknown"
                    name="unknown"
                  />
                  <label className="form-check-label" for="unknown">
                    Defective, needs repair
                  </label>
                </div>

                <div className="form-check col-md-12 pl-5 mb-1">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="damage"
                    name="damage"
                  />
                  <label className="form-check-label" for="damage">
                    Bad, urgent repair
                  </label>
                </div>

                <div className="col-md-12 mt-2">
                  <strong>Road Surface</strong>
                </div>

                <div className="form-check col-md-12 pl-5 mb-1">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="unknown"
                    name="unknown"
                  />
                  <label className="form-check-label" for="unknown">
                    Wet
                  </label>
                </div>

                <div className="form-check col-md-12 pl-5 mb-1">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="unknown"
                    name="unknown"
                  />
                  <label className="form-check-label" for="unknown">
                    Dry
                  </label>
                </div>
                <div className="col-md-12 mt-2">
                  <strong>Surface Type</strong>
                </div>

                <div className="form-check col-md-12 pl-5 mb-1">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="unknown"
                    name="unknown"
                  />
                  <label className="form-check-label" for="unknown">
                    Tar
                  </label>
                </div>

                <div className="form-check col-md-12 pl-5 mb-1">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="unknown"
                    name="unknown"
                  />
                  <label className="form-check-label" for="unknown">
                    Macadam
                  </label>
                </div>

                <div className="form-check col-md-12 pl-5 mb-1">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="unknown"
                    name="unknown"
                  />
                  <label className="form-check-label" for="unknown">
                    Murram
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  renderRoadNatureForm = () => {
    return (
      <div className="col-md-3">
        <div className="card">
          <div className="card-header text-center">
            <strong>Road Nature</strong>
          </div>
          <div className="card-body">
            <form className="row mb-0">
              <div className="col-md-12">
                <strong>Character of Roadway</strong>
              </div>
              <div className="row col-md-12">
                <div className="form-check col-md-12 pl-5">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="fatal"
                    name="fatal"
                  />
                  <label className="form-check-label" for="fatal">
                    Straight or slight curve
                  </label>
                </div>

                <div className="form-check col-md-12 pl-5">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="serious"
                    name="serious"
                  />
                  <label className="form-check-label" for="serious">
                    Blind bend
                  </label>
                </div>

                <div className="form-check col-md-12 pl-5">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="slight"
                    name="slight"
                  />
                  <label className="form-check-label" for="slight">
                    Curve
                  </label>
                </div>

                <div className="form-check col-md-12 pl-5">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="slight"
                    name="slight"
                  />
                  <label className="form-check-label" for="slight">
                    Hilcrest
                  </label>
                </div>

                <div className="col-md-12 mt-1">
                  <strong>Junction Type</strong>
                </div>

                <div className="form-check col-md-12 pl-5">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="damage"
                    name="damage"
                  />
                  <label className="form-check-label" for="damage">
                    Not in Junction
                  </label>
                </div>

                <div className="form-check col-md-12 pl-5">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="unknown"
                    name="unknown"
                  />
                  <label className="form-check-label" for="unknown">
                    Cross roads
                  </label>
                </div>

                <div className="form-check col-md-12 pl-5">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="damage"
                    name="damage"
                  />
                  <label className="form-check-label" for="damage">
                    Railway level crossing
                  </label>
                </div>

                <div className="form-check col-md-12 pl-5">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="damage"
                    name="damage"
                  />
                  <label className="form-check-label" for="damage">
                    Roundabout
                  </label>
                </div>
                <div className="form-check col-md-12 pl-5">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="damage"
                    name="damage"
                  />
                  <label className="form-check-label" for="damage">
                    Road junction (T/Y)
                  </label>
                </div>

                <div className="form-check col-md-12 pl-5">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="damage"
                    name="damage"
                  />
                  <label className="form-check-label" for="damage">
                    Others
                  </label>
                </div>
              </div>
            </form>
            <TheModal
              modalText="Add Vehicle"
              submitText="Save Vehicle"
              modalTitle="Vehicle Form"
              modalContent={this.renderVehicleForm()}
            />
            <TheModal
              modalText="Add Casualty"
              submitText="Save Casualty"
              modalTitle="Casualty Form"
              modalContent={this.renderCasualtyForm()}
            />
            <TheModal
              modalText="Confirm and Save"
              submitText="Save Crash"
              modalTitle="Save The Crash"
              modalContent={this.renderRanks()}
            />
          </div>
        </div>
      </div>
    );
  };

  renderVehicleForm = () => {
    return (
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <strong>Vehicle</strong>
            </div>
            <div className="card-body">
              <form className="row">
                <div className="col-md-12 mb-2">
                  <strong>Type of Vehicle</strong>
                </div>
                <div className="row col-md-12">
                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="fatal"
                      name="fatal"
                    />
                    <label className="form-check-label" for="fatal">
                      Tanker
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="serious"
                      name="serious"
                    />
                    <label className="form-check-label" for="serious">
                      Trailer & Semi Trailer
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="slight"
                      name="slight"
                    />
                    <label className="form-check-label" for="slight">
                      Dual Purpose Vehicle
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="slight"
                      name="slight"
                    />
                    <label className="form-check-label" for="slight">
                      Fuel Truck
                    </label>
                  </div>
                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="damage"
                      name="damage"
                    />
                    <label className="form-check-label" for="damage">
                      Light Omnibus
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="unknown"
                      name="unknown"
                    />
                    <label className="form-check-label" for="unknown">
                      Engineering Plant
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="damage"
                      name="damage"
                    />
                    <label className="form-check-label" for="damage">
                      Medium Omnibus
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="damage"
                      name="damage"
                    />
                    <label className="form-check-label" for="damage">
                      Tractor
                    </label>
                  </div>
                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="damage"
                      name="damage"
                    />
                    <label className="form-check-label" for="damage">
                      Heavy Omnibus
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="damage"
                      name="damage"
                    />
                    <label className="form-check-label" for="damage">
                      Motorcycle
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="damage"
                      name="damage"
                    />
                    <label className="form-check-label" for="damage">
                      Pedal Cycle
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="damage"
                      name="damage"
                    />
                    <label className="form-check-label" for="damage">
                      Light Goods Vehicle
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="damage"
                      name="damage"
                    />
                    <label className="form-check-label" for="damage">
                      Medium Goods Vehicle
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="damage"
                      name="damage"
                    />
                    <label className="form-check-label" for="damage">
                      Pedestrian-controlled Vehicle
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="damage"
                      name="damage"
                    />
                    <label className="form-check-label" for="damage">
                      Heavy Goods Vehicle
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="damage"
                      name="damage"
                    />
                    <label className="form-check-label" for="damage">
                      Unknown
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <strong>Driver</strong>
            </div>
            <div className="card-body">
              <form className="row">
                <div className="col-md-12 mb-2">
                  <strong>Valid License ?</strong>
                </div>
                <div className="row col-md-12">
                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="fatal"
                      name="fatal"
                    />
                    <label className="form-check-label" for="fatal">
                      Yes
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="serious"
                      name="serious"
                    />
                    <label className="form-check-label" for="serious">
                      No
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="slight"
                      name="slight"
                    />
                    <label className="form-check-label" for="slight">
                      Unknown
                    </label>
                  </div>

                  <div className="col-md-12 mb-2">
                    <strong>Sex</strong>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="slight"
                      name="slight"
                    />
                    <label className="form-check-label" for="slight">
                      Male
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="slight"
                      name="slight"
                    />
                    <label className="form-check-label" for="slight">
                      Female
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="slight"
                      name="slight"
                    />
                    <label className="form-check-label" for="slight">
                      Unknown
                    </label>
                  </div>

                  <div className="col-md-2">
                    <label htmlFor="date-and-time">
                      <strong>Age</strong>
                    </label>
                  </div>
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      id="age"
                      name="age"
                    />
                  </div>

                  <div className="col-md-12 mt-2">
                    <strong>Belt/Helmet Used ?</strong>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="damage"
                      name="damage"
                    />
                    <label className="form-check-label" for="damage">
                      Yes
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="unknown"
                      name="unknown"
                    />
                    <label className="form-check-label" for="unknown">
                      No
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="damage"
                      name="damage"
                    />
                    <label className="form-check-label" for="damage">
                      Unknown
                    </label>
                  </div>

                  <div className="col-md-12 mt-2">
                    <strong>Casualty</strong>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="damage"
                      name="damage"
                    />
                    <label className="form-check-label" for="damage">
                      Fatal
                    </label>
                  </div>
                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="damage"
                      name="damage"
                    />
                    <label className="form-check-label" for="damage">
                      Serious
                    </label>
                  </div>
                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="damage"
                      name="damage"
                    />
                    <label className="form-check-label" for="damage">
                      Slight
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="damage"
                      name="damage"
                    />
                    <label className="form-check-label" for="damage">
                      Not injured
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="damage"
                      name="damage"
                    />
                    <label className="form-check-label" for="damage">
                      Unknown
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderCasualtyForm = () => {
    return (
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <strong>Casualty</strong>
            </div>
            <div className="card-body">
              <form className="row">
                <div className="col-md-12 mb-2">
                  <strong>Type of Casualty</strong>
                </div>
                <div className="row col-md-12">
                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="fatal"
                      name="fatal"
                    />
                    <label className="form-check-label" for="fatal">
                      Fatal
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="serious"
                      name="serious"
                    />
                    <label className="form-check-label" for="serious">
                      Serious
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="slight"
                      name="slight"
                    />
                    <label className="form-check-label" for="slight">
                      Slight
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="slight"
                      name="slight"
                    />
                    <label className="form-check-label" for="slight">
                      Unknown
                    </label>
                  </div>
                  <div className="col-md-12 mb-2">
                    <strong>Sex</strong>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="damage"
                      name="damage"
                    />
                    <label className="form-check-label" for="damage">
                      Male
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="unknown"
                      name="unknown"
                    />
                    <label className="form-check-label" for="unknown">
                      Female
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="damage"
                      name="damage"
                    />
                    <label className="form-check-label" for="damage">
                      Unknown
                    </label>
                  </div>

                  <div className="col-md-2">
                    <label htmlFor="date-and-time">
                      <strong>Age</strong>
                    </label>
                  </div>
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      id="age"
                      name="age"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <strong>Others</strong>
            </div>
            <div className="card-body">
              <form className="row">
                <div className="col-md-12 mb-2">
                  <strong>Casusalty Class</strong>
                </div>
                <div className="row col-md-12">
                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="fatal"
                      name="fatal"
                    />
                    <label className="form-check-label" for="fatal">
                      Pedestrian
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="serious"
                      name="serious"
                    />
                    <label className="form-check-label" for="serious">
                      Passenger on motorcycle
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="slight"
                      name="slight"
                    />
                    <label className="form-check-label" for="slight">
                      Car Passenger
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="slight"
                      name="slight"
                    />
                    <label className="form-check-label" for="slight">
                      Bicycle Passenger
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="slight"
                      name="slight"
                    />
                    <label className="form-check-label" for="slight">
                      Passenger Light omnibus
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="slight"
                      name="slight"
                    />
                    <label className="form-check-label" for="slight">
                      Passenger medium omnibus
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="slight"
                      name="slight"
                    />
                    <label className="form-check-label" for="slight">
                      Passenger heavy omnibus
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="slight"
                      name="slight"
                    />
                    <label className="form-check-label" for="slight">
                      Other passengers
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="slight"
                      name="slight"
                    />
                    <label className="form-check-label" for="slight">
                      Unknown
                    </label>
                  </div>

                  <div className="col-md-12 mt-2">
                    <strong>Belt/Helmet Used ?</strong>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="damage"
                      name="damage"
                    />
                    <label className="form-check-label" for="damage">
                      Yes
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="unknown"
                      name="unknown"
                    />
                    <label className="form-check-label" for="unknown">
                      No
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="damage"
                      name="damage"
                    />
                    <label className="form-check-label" for="damage">
                      Unknown
                    </label>
                  </div>

                  <div className="form-check col-md-12 pl-5 mb-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="damage"
                      name="damage"
                    />
                    <label className="form-check-label" for="damage">
                      N/A
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderRanks = () => {
    return (
      <>
        <div class="main-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group col-md-12">
                  <label htmlFor="rank">
                    <strong>Reporting Officer</strong>
                  </label>
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="rank">Rank</label>
                  <input
                    type="text"
                    className={`form-control`}
                    name="rank"
                    id="rank"
                    placeholder="Rank"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="rank">Name</label>
                  <input
                    type="text"
                    className={`form-control`}
                    name="name"
                    id="name"
                    placeholder="name"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="rank">Date</label>
                  <input
                    type="date"
                    className={`form-control`}
                    name="name"
                    id="date"
                    placeholder="date"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group col-md-12">
                  <label htmlFor="rank">
                    <strong>Spervising Officer</strong>
                  </label>
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="rank">Rank</label>
                  <input
                    type="text"
                    className={`form-control`}
                    name="rank"
                    id="rank"
                    placeholder="Rank"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="rank">Name</label>
                  <input
                    type="text"
                    className={`form-control`}
                    name="name"
                    id="name"
                    placeholder="name"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="rank">Date</label>
                  <input
                    type="date"
                    className={`form-control`}
                    name="name"
                    id="date"
                    placeholder="date"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  render() {
    const { state, handleChange } = this.props;
    return (
      <Fragment>
        <div className="row mt-4">
          {this.state.level === 1 ? (
            <>
              {this.renderCrashDataForm()}
              {this.renderSeverityForm(state, handleChange)}
              {this.renderCrashCausesForm()}
            </>
          ) : (
            <>
              {this.renderCollitionTypeForm()}
              {this.renderVehicleFailureForm()}
              {this.renderRoadEnvironmentForm()}
              {this.renderRoadNatureForm()}
            </>
          )}
        </div>
      </Fragment>
    );
  }
}
export default AddCrashForm;
