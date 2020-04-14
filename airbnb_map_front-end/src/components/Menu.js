import React from 'react';
import History from './History';
import '../stylesheets/Menu.css';

class Menu extends React.Component {
  state = {
    services: false,
    history: false,
  };

  render() {
    let mainMenu = (
      <div>
        <div id='options'>
          <div onClick={this.props.handleSearch}>
            Search
            <hr />
          </div>
          <div onClick={this.props.handleServices}>
            My Services
            <hr />
            {this.state.services ? 'Hello Services' : null}
          </div>
          <div onClick={this.props.handleHistory}>
            History
            {this.state.history ? <History /> : null}
          </div>
        </div>
      </div>
    );

    return mainMenu;
  }
}

export default Menu;
