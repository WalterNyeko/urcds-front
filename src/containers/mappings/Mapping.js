import React, { Component, Fragment } from "react";
import MappingComponent from "../../components/mappings/Mapping";
import { Marker, GoogleApiWrapper } from "google-maps-react";

class Mapping extends Component {
  state = {
    stores: [
      { lat: 47.49855629475769, lng: -122.14184416996333 },
      { latitude: 47.359423, longitude: -122.021071 },
      { latitude: 47.2052192687988, longitude: -121.988426208496 },
      { latitude: 47.6307081, longitude: -122.1434325 },
      { latitude: 47.3084488, longitude: -122.2140121 },
      { latitude: 47.5524695, longitude: -122.0425407 }
    ]
  };

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude
          }}
          onClick={() => console.log("You clicked me!")}
        />
      );
    });
  };

  render() {
    return (
      <Fragment>
        <MappingComponent
          displayMarkers={this.displayMarkers}
          google={this.props.google}
        />
      </Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBwWaw5e4jQ1Nkt5c2MJOCtY9E5uBfwEXA"
})(Mapping);
