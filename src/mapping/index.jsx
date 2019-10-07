import React from 'react';

import Map from './map';

import './mapping.css';
import MapSelectors from './map-selectors';

const Mapping = () => (
  <div className="page-wrapper">
    <div className="page-title default-body">
      <div className="row ">
        <div data-test="map-component" className="col-md-9 map">
          <Map />
        </div>
        <div className="col-md-3">
          <MapSelectors />
        </div>
      </div>
    </div>
  </div>
);
export default Mapping;
