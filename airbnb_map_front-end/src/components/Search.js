import React from 'react';
import CloseButton from './CloseButton';
// import mag from '../assets/mag_glass.svg';
import '../stylesheets/Search.css';

class Search extends React.Component {
  state = {
    categories: ['lawn service', 'dog walking', 'toilet paper', 'haircut'],
  };

  componentDidMount = () => {
    this.fetchOptions();
  }

  fetchOptions = () => {
    // fetch(url for category list)
    //   .then(resp => resp.json())
    //   .then(categories => this.setState({ categories }))
  };

  createDropDown = (options) => {
    return options.map((c, index) => {
      return <option key={index}>{c}</option>;
    });
  };

  fetchResults = (event) => {
    console.log(event.target.value)
    // fetch(`http://localhost:4000/api/services/${event.target.value}`)
    //   .then(resp => resp.json())
    //   .then(category => console.log(category))
  }

  render() {
    return (
      <div id='search'>
        <CloseButton className='exit-button' closeButton={this.props.closeButton} />
        <div className='search-bar'>
          <h1>Search</h1>
          <br />
          <br />
          Find By Category
          <br/>
          <br/>
          <fieldset>
            <select id='category-dd' onChange={this.fetchResults}>
              {this.createDropDown(this.state.categories)}
            </select>
          </fieldset>
        </div>
      </div>
    );
  }
}

export default Search;
