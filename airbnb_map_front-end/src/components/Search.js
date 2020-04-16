import React from 'react';
import CloseButton from './CloseButton';
// import mag from '../assets/mag_glass.svg';
import '../stylesheets/Search.css';

class Search extends React.Component {
  state = {
    categories: ['lawn service', 'dog walking', 'toilet paper', 'haircut'],
    results: [],
  };

  componentDidMount = () => {
    this.fetchOptions();
  };

  fetchOptions = () => {
    fetch(`http://localhost:4000/api/categories`)
      .then((resp) => resp.json())
      .then((categories) => this.setState({ categories }));
  };

  createDropDown = (options) => {
    return options.map((c, index) => {
      return <option key={index}>{c}</option>;
    });
  };

  fetchResults = (event) => {
    fetch(`http://localhost:4000/api/categories/${event.target.value}`)
      .then((resp) => resp.json())
      .then((results) => this.setState({ results: results.slice(0,3) }));
  };

  displayResults = (results) => {
    return results.map((r, index) => {
      return <div key={index}>
        <h2>{r.name}</h2>
        <p>
          phone: {r.phone}
          <br/>
          email: {r.email}
        </p> 
        <hr/>
        <br/>
        <br/>
      </div>
    })
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
          <br />
          <br />
          <fieldset>
            <select id='category-dd' onChange={this.fetchResults}>
              {this.createDropDown(this.state.categories)}
            </select>
          </fieldset>
          {this.displayResults(this.state.results)}
        </div>
      </div>
    );
  }
}

export default Search;
