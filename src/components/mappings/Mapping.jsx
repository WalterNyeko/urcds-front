import React, { Fragment } from "react";
import { Map } from "google-maps-react";

const Mapping = ({ displayMarkers, google }) => {
  return (
    <Fragment>
      <Map
        google={google}
        zoom={8}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      >
        {displayMarkers()}
      </Map>
    </Fragment>
  );
};
export default Mapping;
