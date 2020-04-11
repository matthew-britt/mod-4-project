import React from 'react';
import Menu from './Menu';
import profile from '../assets/temp_profile.png';
import './Profile.css';

class Profile extends React.Component {
  render() {
    return (
      <div id='profile'>
        <img id='profile-pic' src={profile}></img>
        <div id='name'>Benjamin Sullivan</div>
        <hr class="name-bar"></hr>
        <Menu />
      </div>
    );
  }
}

export default Profile;
