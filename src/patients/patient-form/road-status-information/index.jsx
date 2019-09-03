import React from 'react';

import DateAndTime from './date-and-time';
import ModeOfTransport from './mode-of-transport';
import RoadUser from './road-user';
import Counterpart from './counterpart';
import BeltOrHelmetUsed from './belt-or-helmet-used';

const RoadStatusInfo = () => (
  <>
    <div className="form-row">
      <DateAndTime />
    </div>
    <div className="form-row border border-dark mb-4">
      <ModeOfTransport />
      <RoadUser />
      <Counterpart />
      <BeltOrHelmetUsed />
    </div>
  </>
);

export default RoadStatusInfo;
