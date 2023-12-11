import React, { PureComponent } from 'react';

import '../css/Search.css'
import SearchResult from '../components/SearchResult';

/**
 * Search page, where the user can search for images of planets.
 */
export default class Search extends PureComponent {

  /** Initial state */
  state = {
    loading: false,
    hasSearched: false,
    query: '',
  }

  /** Results after the user query has completed */
  results = []

  /** Timeout used to delay fetching images from NASA API until user finishes typing */
  _loadingTimer = null

  async fetchImages() {
    const search = this.state.query.trim()
    if (!search) {
      this.setState({ hasSearched: false })
      return
    }

    try {
      const response = await fetch(`https://images-api.nasa.gov/search?q=${search}`);
      if (!response.ok) {
        throw new Error(`Received ${response.status} status code.`);
      }

      const json = await response.json();
      if (!json?.collection) {
        throw new Error('Received invalid response, no collection property found.');
      }

      if (!json.collection.items) {
        throw new Error('Received invalid response, no items property found.');
      }

      // Remove any results that have no images
      this.results = json.collection.items.filter(item => !!item?.links?.[0])
    } catch (err) {
      this.results = []
      console.error(`Something went wrong while fetching images using query "${search}".`, err);
    }

    this.setState({ hasSearched: true, loading: false })
    console.log('== results', this.results)
  }

  onSearchChange = evt => {
    this.setState({ query: evt.target.value })

    const search = evt.target.value.trim()
    if (!search) {
      return
    }

    this.setState({ loading: true })
    if (this._loadingTimer) {
      clearTimeout(this._loadingTimer)
    }

    // Start a timer so that the search only happens after the user has
    // finished typing
    this._loadingTimer = setTimeout(() => {
      this._loadingTimer = null
      this.fetchImages()
    }, 500)
  }

  /** Render a way for the user to search for a NASA image */
  render() {
    return <div id='search-container'>
      <h1>Search the NASA image database</h1>
      <input type='text' value={this.state.query} onChange={this.onSearchChange} />

      { this.state.hasSearched
        ? <div>
            { this.results.length > 0
              ? <>
                <p>Found {this.results.length} results.</p>
                <div id='search-results-container'>
                  { this.results.map(result => <SearchResult key={result.data[0].nasa_id} result={result} />) }
                </div>
              </>
              : <p>No results found.</p>
            }
          </div>
        : null
      }
    </div>
  }

}
