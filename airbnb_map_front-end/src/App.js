import React from 'react';
import './App.css';
import Map from './components/Map'
import Profile from './components/Profile'

class App extends React.Component {
  render() {
    return (
      <div>
        <Map />
        <Profile />
     </div>
    
    );
  }
}

export default App;
