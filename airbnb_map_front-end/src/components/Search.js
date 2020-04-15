import React from 'react';
import CloseButton from './CloseButton';
import mag from '../assets/mag_glass.svg';
import '../stylesheets/Search.css';

class Search extends React.Component {
  render() {
    return (
      <div id='search'>
        <CloseButton className="exit-button" closeButton={this.props.closeButton} />
        <div className="search-bar">
          <img src={mag} alt='search' />
          <input type='search' name='search' placeHolder="Search" />
        </div>
      </div>
    );
  }
}

export default Search;
