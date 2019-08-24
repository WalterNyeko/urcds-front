import React from 'react';
import CrashList from './CrashList';

const Crashes = () => (
  <div>
    <div className="page-wrapper">
      <div className="page-title">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <h2 className="page-title-text"> Crashes</h2>
          </div>
          <div className="col-sm-6 row mt-3 mb-0">
            <div className="col-sm-5">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <p className="page-link">
                      Previous
                    </p>
                  </li>
                  <li className="page-item active">
                    <p className="page-link">
                      1
                    </p>
                  </li>
                  <li className="page-item">
                    <p className="page-link">
                      2
                    </p>
                  </li>
                  <li className="page-item">
                    <p className="page-link">
                      3
                    </p>
                  </li>
                  <li className="page-item">
                    <p className="page-link">
                      Next
                    </p>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-sm-5">
              <span className="h4">
                <p
                >
                  Add Crash
                </p>
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
