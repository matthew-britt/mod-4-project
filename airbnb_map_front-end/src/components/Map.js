import React, { Component } from 'react'
import { withGoogleMap, GoogleMap } from 'react-google-maps'
import { PlaceMarker } from './PlaceMarker'
import '../stylesheets/Map.css'

const AirbnbMap = withGoogleMap(props => (
  <GoogleMap
    defaultCenter={props.center}
    defaultZoom={props.zoom} 
    defaultPlaces={props.places}/>
));

export class Map extends Component {
  constructor(props) {
    super(props)

    this.zoom = 16

    this.state = {
      lat: 30.2672,
      lng: -97.7431
    };
  }

  render() {
    const {lat, lng} = this.state;
    const places = [<PlaceMarker lat={lat} lng={lng} price={20} />]

    return(
      <div id="map">
        <AirbnbMap
          center={{
            lat: lat,
            lng: lng
          }}
          places={places}
          zoom={this.zoom}
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: '100%' }} />
          }
        />
      </div>
    );
  }
}
export default Map;