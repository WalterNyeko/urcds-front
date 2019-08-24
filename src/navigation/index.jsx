import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import * as RoutePaths from '../constants/routes';

const Navigation = ({ location: { pathname } }) => (
  <div className="menu-wrapper">
    <div className="menu">
      <ul className="side-bar-items">
        <li className="menu-title">RCDS</li>
        <li className={pathname === RoutePaths.DASHBOARD ? 'active' : null}>
          <Link to={RoutePaths.DASHBOARD}>
            <i className="fa fa-home" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li className={pathname === RoutePaths.CRASHES ? 'active' : null}>
          <Link to={RoutePaths.CRASHES}>
            <i className="fa fa-motorcycle" />
            <span>Crashes</span>
          </Link>
        </li>
        <li className={pathname === RoutePaths.PATIENTS ? 'active' : null}>
          <Link to={RoutePaths.PATIENTS}>
            <i className="fa fa-users" />
            <span>Patients</span>
          </Link>
        </li>
        <li className={pathname === RoutePaths.ANALYSIS ? 'active' : null}>
          <Link to={RoutePaths.ANALYSIS}>
            <i className="fa fa-chart-bar" />
            <span>Analysis</span>
          </Link>
        </li>
        <li className={pathname === RoutePaths.MAPPINGS ? 'active' : null}>
          <Link to={RoutePaths.MAPPINGS}>
            <i className="fa fa-map-marker" />
            <span>Mapping</span>
          </Link>
        </li>
        <li className={pathname === RoutePaths.REPORTS ? 'active' : null}>
          <Link to={RoutePaths.REPORTS}>
            <i className="fa fa-file" />
            <span>Report</span>
          </Link>
        </li>
        <li
          className={pathname === RoutePaths.ADMINISTRATION ? 'active' : null}
        >
          <Link to={RoutePaths.ADMINISTRATION}>
            <i className="icon-screen-desktop" />
            <span>Administration</span>
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default withRouter(Navigation);
