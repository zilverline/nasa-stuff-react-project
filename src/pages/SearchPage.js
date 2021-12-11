import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';

class SearchPage extends Component {

  constructor(props) {
    super(props);
    this.handleResults = this.handleResults.bind(this);
    this.state = { searchResults: [] }
  }

  handleResults(results) {
    this.setState({ searchResults: results });
  }

  render() {
    return (
      <React.Fragment>
        <h1 style={{ textAlign: "center" }}>Search NASA Image and Video Library</h1>
        <SearchForm handleResults={this.handleResults} />
        <SearchResults searchResults={this.state.searchResults} />
      </React.Fragment>
    )
  }
}

export default SearchPage;