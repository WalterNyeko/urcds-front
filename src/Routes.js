import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as RoutePaths from './constants/routes';
import Crashes from './crashes';
import Patients from './patients';
import Analysis from './analysis';
import Mapping from './mapping';
import Report from './report';
import Administration from './administration';
import Dashboard from './dashboard';

const Routes = () => (
  <Switch>
    <Route path={RoutePaths.DASHBOARD} component={Dashboard} exact />
    <Route path={RoutePaths.CRASHES} component={Crashes} exact />
    <Route path={RoutePaths.PATIENTS} component={Patients} exact />
    <Route path={RoutePaths.ANALYSIS} component={Analysis} exact />
    <Route path={RoutePaths.MAPPINGS} component={Mapping} exact />
    <Route path={RoutePaths.REPORTS} component={Report} exact />
    <Route path={RoutePaths.ADMINISTRATION} component={Administration} exact />
  </Switch>
);

export default Routes;
