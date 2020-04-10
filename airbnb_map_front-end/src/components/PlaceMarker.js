import React, { Component } from 'react'
import { Marker } from 'react-google-maps'

export class PlaceMarker extends Component {
  render() {
    const {lat, lng} = this.props

    return(
      <Marker
        position={{
          lat: parseFloat(lat),
          lng: parseFloat(lng)
        }}
      />
    );
  }
}

export default PlaceMarker;