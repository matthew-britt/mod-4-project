import React from 'react';
import './App.css';
import MapContainer from './components/MapContainer'
import Profile from './components/Profile'

class App extends React.Component {
  render() {
    return (
      <div>
        <MapContainer />
        <Profile />
      </div>
    );
  }
}

export default App;
