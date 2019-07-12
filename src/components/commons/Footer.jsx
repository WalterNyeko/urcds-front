import React from "react";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer
      id="sticky-footer"
      className="bg-dark text-white-50 sticky-bottom mb-auto pt-1"
    >
      <div className="row">
        <div className="col-md-4 version">
          <label>Version 2.0-SNAPSHOT | Logged in as : Admin</label>
        </div>
        <div className="col-md-4" />
        <div className="col-md-4 pr-2">
          <div className="row">
            <div className="col-md-10">
              <img
                src={require("../../images/ugandan.png")}
                alt="ug"
                className="uganda-flag images-uganda"
              />
            </div>
            <div className="col-md-2">
              <img
                src={require("../../images/proudly_ugandan.png")}
                alt="ug"
                className="proudly-ugandan images-uganda"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
