import React from 'react';
import Menu from './Menu';
import profile from '../assets/temp_profile.png';
import History from './History';
import Search from './Search';
import Services from './Services';
import '../stylesheets/Profile.css';

class Profile extends React.Component {
  state = {
    search: false,
    services: false,
    history: false,
    user: {},
  };

  componentDidMount = () => {
    this.fetchUser();
  }

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

  fetchUser = () => {
    fetch('http://localhost:4000/api/users/1')
      .then((resp) => resp.json())
      .then(user => this.setState({ user }));
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
          <div className='name'>{this.state.user.name}</div>
          <hr className='name-bar' />
          <Menu
            handleSearch={this.handleSearch}
            handleHistory={this.handleHistory}
            handleServices={this.handleServices}
          />
        </div>
        {this.state.search ? (
          <div className='blade'>
            <Search closeButton={this.closeButton} />
          </div>
        ) : null}
        {this.state.history ? (
          <div className='blade'>
            <History user={this.state.user} closeButton={this.closeButton} />
          </div>
        ) : null}
        {this.state.services ? (
          <div className='blade'>
            <Services user={this.state.user} closeButton={this.closeButton} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Profile;
