import React from 'react';
import './Menu.css';

class Menu extends React.Component {
  render() {
    return (
      <div id='options'>
        <div>
          Search
          <hr></hr>
        </div>
        <div>
          My Services
          <hr></hr>
        </div>
        <div>
          History
        </div>
      </div>
    );
  }
}

export default Menu;
