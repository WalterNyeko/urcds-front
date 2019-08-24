import React from 'react';
import CrashList from './CrashList';

const Crashes = ({ showCrashForm, showDashboard }) => (
  <div>
    {/* <!-- Main Page Wrapper --> */}
    <div className="page-wrapper">
      {/* <!-- Page Title --> */}
      <div className="page-title">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <h2 className="page-title-text"> Crashes</h2>
          </div>
          <div className="col-sm-6 text-right">
            <div className="breadcrumbs">
              <ul>
                <li>
                  <a href="#" onClick={showDashboard}>
                    Dashboard
                  </a>
                </li>
                <li>Crashes</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 row mt-3 mb-0">
            <div className="col-sm-5">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-sm-5">
              <span className="h4">
                <a
                  href="#"
                  className="text-decoration-none"
                  onClick={showCrashForm}
                >
                  Add Crash
                </a>
              </span>
            </div>
            <div className="col-sm-2" />
          </div>
        </div>
      </div>
      {/* <!-- Page Body --> */}
      <div className="">
        <CrashList />
      </div>
    </div>
  </div>
);
export default Crashes;
