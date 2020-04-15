import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import profile from '../assets/temp_profile.png';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  displayMarkers = () => {
    let myPlaces = [
      [30.286798, -97.740457, 'Clock Tower'],
      [30.277274, -97.727669, "Franklin's"],
    ];

    return myPlaces.map((p, index) => {
      return (
        <Marker
          key={index}
          name={p[2]}
          position={{ lat: p[0], lng: p[1] }}
          onClick={this.onMarkerClick}
          pic={profile}
        />
      );
    });
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={{ lat: 30.2672, lng: -97.7431 }}
      >
        {this.displayMarkers()}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
            <img src={this.state.selectedPlace.pic} style={{width: '100px'}} alt="Service" />
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDFu3DI-g8Vy1M8XUwftXwJ-I_Po4V9Qbc',
})(MapContainer);
