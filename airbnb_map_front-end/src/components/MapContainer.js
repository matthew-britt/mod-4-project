import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import profile from '../assets/temp_profile.png';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    services: [],
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

  componentDidMount = () => {
    this.fetchServices();
  };

  fetchServices = () => {
    fetch('http://localhost:4000/api/services')
      .then((resp) => resp.json())
      .then((services) => this.setState({ services }));
  };

  displayMarkers = (services) => {
    return services.map((p, index) => {
      return (
        <Marker
          key={index}
          name={p.name}
          position={{ lat: p.latitude, lng: p.longitude }}
          onClick={this.onMarkerClick}
          pic={profile}
          email={p.email}
          owner={p.provided_by}
          phone={p.phone}
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
        ref='map'
      >
        {this.displayMarkers(this.state.services)}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h2>{this.state.selectedPlace.name}</h2>
            <h4>owner: {this.state.selectedPlace.owner}</h4>
            <h4>
              email:{' '}
              <a href={`mailto:${this.state.selectedPlace.email}`}>
                {this.state.selectedPlace.email}
              </a>
            </h4>
            <h4>phone: {this.state.selectedPlace.phone}</h4>
            <img
              src={this.state.selectedPlace.pic}
              style={{ width: '100px' }}
              alt='Service'
            />
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: '',
})(MapContainer);
