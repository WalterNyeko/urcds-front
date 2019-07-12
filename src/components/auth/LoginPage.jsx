import React, { Fragment } from "react";
import "../../styles/LoginPage.css";
import Spinner from "../../helpers/Spinner";

const LoginPage = ({
  username,
  password,
  handleLogin,
  handleInputChange,
  isLoading,
  errors
}) => {
  return (
    <Fragment>
      <div className="row mt-5 ml-3 mr-3">
        <div className="col-md-3">
          <img src={require("../../images/ug-coa.jpg")} alt="" />
          <ul>
            <li>
              <span>Ministry of Transport and Roads</span>
            </li>
            <li>
              <span>Ministry of Health</span>
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center">Uganda Road Crash Data System</h2>
            </div>
            <div className="col-md-3" />
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-5" />
                <div className="col-md-2 text-center">
                  {isLoading && <Spinner />}
                </div>
                <div className="col-md-5" />
              </div>
              <form onSubmit={handleLogin}>
                <div className="form-group mt-2">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className={
                      errors.username ? `error form-control` : `form-control`
                    }
                    name="username"
                    id="username"
                    placeholder="Enter username"
                    defaultValue={username}
                    onChange={handleInputChange}
                  />
                  {errors.username && (
                    <small id="username" className="form-text text-danger">
                      {errors.username}
                    </small>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className={
                      errors.password ? `error form-control` : `form-control`
                    }
                    name="password"
                    id="password"
                    placeholder="Password"
                    defaultValue={password}
                    onChange={handleInputChange}
                  />
                  {errors.password && (
                    <small id="password" className="form-text text-danger">
                      {errors.password}
                    </small>
                  )}
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="remember"
                  />
                  <label className="form-check-label" htmlFor="remember">
                    Remember Me
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary mt-2 btn-block"
                >
                  Login
                </button>
              </form>
            </div>
            <div className="col-md-3" />
          </div>
        </div>
        <div className="col-md-3">
          <img src={require("../../images/upf_logo.png")} alt="" />
        </div>
      </div>
    </Fragment>
  );
};
export default LoginPage;
