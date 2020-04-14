import React from 'react';
import Menu from './Menu';
import profile from '../assets/temp_profile.png';
import History from './History';
import Search from './Search';
import Services from './Services';
import '../stylesheets/Profile.css';

class Profile extends React.Component {
  state = {
    settings: false,
    search: false,
    services: false,
    history: false,
  };

  openSettings = () => {
    this.setState({ settings: !this.state.settings });
  };

  handleSearch = () => {
    this.setState({ search: !this.state.search });
  };

  handleHistory = () => {
    this.setState({ history: !this.state.history });
  };

  handleServices = () => {
    this.setState({ services: !this.state.services });
  };

  closeButton = (event) => {
    this.setState({ [event.target.parentElement.id]: false });
  };

  render() {
    return (
      <div className='wrapper'>
        <div className='profile'>
          <img
            className='profile-pic'
            onClick={this.openSettings}
            src={profile}
            alt='Profile'
          />
          <div className='name'>Benjamin Sullivan</div>
          <hr className='name-bar' />
          <Menu
            handleSearch={this.handleSearch}
            handleHistory={this.handleHistory}
            handleServices={this.handleServices}
          />
        </div>
        {this.state.settings ? (
          <div className='blade'>
            <div>Hello Settings</div>
          </div>
        ) : null}
        {this.state.search ? (
          <div className='blade'>
            <Search closeButton={this.closeButton} />
          </div>
        ) : null}
        {this.state.history ? (
          <div className='blade'>
            <History closeButton={this.closeButton} />
          </div>
        ) : null}
        {this.state.services ? (
          <div className='blade'>
            <Services closeButton={this.closeButton} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Profile;
