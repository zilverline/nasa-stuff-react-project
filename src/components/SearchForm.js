import React, { Component } from 'react';

class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = { query: "" }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSearch = (event) => {
    event.preventDefault();
    this.searchImages(this.state.query);
  }

  handleInput = (event) => {
    this.setState({ query: event.target.value });
  }

  searchImages = (query = "") => {
    if (query.length > 0) {
      fetch(`https://images-api.nasa.gov/search?q=${query}`)
        .then(response => response.json())
        .then(json => this.props.handleResults(json.collection.items));
    }
  }

  render() {
    return (
      <div className="searchcontent">
        <form>
          <input type="text" value={this.state.query} onChange={this.handleInput} placeholder='Search for ... (e.g. "Orion")' />
          <button id="searchformbutton" onClick={this.handleSearch}>Search</button>
        </form>
      </div>
    )
  };
}

export default SearchForm;
