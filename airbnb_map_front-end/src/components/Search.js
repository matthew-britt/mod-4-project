import React from 'react';
import CloseButton from './CloseButton';
import mag from '../assets/mag_glass.svg';
import '../stylesheets/Search.css';

class Search extends React.Component {
  render() {
    return (
      <div id='search'>
        <CloseButton closeButton={this.props.closeButton} />
        <img src={mag} alt='search' />
        <input type='search' name='search' />
      </div>
    );
  }
}

export default Search;
