import React, { Component } from 'react';
import SearchResults from './SearchResults';

class SearchForm extends Component {
  state = {
    query: "",
    images: []
  }

  handleSearch = (event) => {
    event.preventDefault();
    this.fetchImages(this.state.query);
  }

  handleInput = (event) => {
    this.setState({ query: event.target.value });
  }

  //The NASA API is called and then the results go to the state
  fetchImages = (query = "") => {
    fetch(`https://images-api.nasa.gov/search?q=${query}`)
      .then(response => response.json())
      .then(json => this.setState({ ...this.state, images: json.collection.items }));
  }

  // Renders a form to search
  render() {
    return (
      <div className="searchcontent">
        <h3 className="searchtext">Enter a Celestial Term:</h3>
        <form>
          <input type="text" value={this.state.query} onChange={this.handleInput} />
          <button id="searchformbutton" onClick={this.handleSearch}>Search</button>
        </form>
        <SearchResults getResults={this.state.images} />
      </div>
    )
  };
}

export default SearchForm
