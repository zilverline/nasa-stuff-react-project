import React, { Component, Fragment } from 'react';
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
      <Fragment>
        <SearchForm handleResults={this.handleResults} />
        <SearchResults searchResults={this.state.searchResults} />
      </Fragment>
    )
  }
}

export default SearchPage;