import React from 'react';
import CloseButton from './CloseButton';
// import mag from '../assets/mag_glass.svg';
import '../stylesheets/Search.css';

class Search extends React.Component {
  state = {
    categories: ['lawn service', 'dog walking', 'toilet paper'],
  };

  fetchOptions = () => {};

  createDropDown = (options) => {
    return options.map((c, index) => {
      return <option key={index}>{c}</option>;
    });
  };

  render() {
    return (
      <div id='search'>
        <CloseButton className='exit-button' closeButton={this.props.closeButton} />
        <div className='search-bar'>
          Find By Category
          <br/>
          <br/>
          <fieldset>
            <select id='category-dd'>
              {this.createDropDown(this.state.categories)}
            </select>
          </fieldset>
        </div>
      </div>
    );
  }
}

export default Search;
