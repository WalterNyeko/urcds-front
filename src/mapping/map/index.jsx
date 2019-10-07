import React from 'react';

import WrappedMap from './wrapped-map';

const Map = () => (
  <div style={{ width: '100%', height: '100%' }} data-test="map">
    <WrappedMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key="
      loadingElement={<div style={{ height: '100%' }} />}
      containerElement={<div style={{ height: '100%' }} />}
      mapElement={<div style={{ height: '100%' }} />}
    />
  </div>
);

export default Map;
