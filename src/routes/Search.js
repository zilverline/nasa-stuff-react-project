import React, { PureComponent } from 'react';

import '../css/Search.css'
import SearchResult from '../components/SearchResult';
import eventBus from '../eventBus';
import { format, i18n } from '../locales/i18n';

/**
 * Search page, where the user can search for images of planets.
 */
export default class Search extends PureComponent {

  /** Initial state */
  state = {
    loading: false,
    searching: false,
    hasSearched: false,
    query: '',
  }

  /** Results after the user query has completed */
  results = []

  /** Timeout used to delay fetching images from NASA API until user finishes typing */
  _loadingTimer = null

  /** Called after first mount */
  componentDidMount() {
    eventBus.addListener('lang-change', this.onLanguageChange)
  }

  /** Called after first mount */
  componentWillUnmount() {
    eventBus.removeListener('lang-change', this.onLanguageChange)
  }

  /** Called when we change the language */
  onLanguageChange = _ => {
    this.forceUpdate()
  }

  /** Fetches the results from the NASA API */
  async fetchResults() {
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

    this.setState({ searching: false, hasSearched: true, loading: false })
  }

  /** Called when the search has changed */
  onSearchChange = query => {
    this.setState({ query })

    const search = query.trim()
    if (!search) {
      this.results = []
      this.setState({ hasSearched: false, loading: false })
      return
    }

    this.setState({ loading: true, searching: true })
    if (this._loadingTimer) {
      clearTimeout(this._loadingTimer)
    }

    // Start a timer so that the search only happens after the user has
    // finished typing
    this._loadingTimer = setTimeout(() => {
      this._loadingTimer = null
      this.fetchResults()
    }, 500)
  }

  /** Render a way for the user to search for a NASA image */
  render() {
    return <div id='search-container'>
      <div id='search-input-container'>
        <img id='search-left-icon' draggable='false' src={require('../images/search.svg')} alt='Search' />
        <input id='search-input' type='text' value={this.state.query} placeholder={i18n('SEARCH.ANYTHING')} autoComplete='off' onChange={evt => this.onSearchChange(evt.target.value)} />
        <img id='search-right-icon' draggable='false' src={require('../images/close.svg')} alt='Clear' onClick={this.state.query ? _ => this.onSearchChange('') : null} style={{ opacity: this.state.query ? 1 : 0, cursor: this.state.query ? 'pointer' : 'default' }} />
      </div>

      { this.state.searching
        ? <div id='search-results-found'>
          { i18n('SEARCH.SEARCHING') }
        </div>
        : this.state.hasSearched
          ? this.results.length > 0
            ? <>
              <div id='search-results-found'>
                { format(i18n('SEARCH.FOUND'), this.results.length) }
              </div>
              <div id='search-results-container'>
                { this.results.map(result => <SearchResult key={result.data[0].nasa_id} result={result} />) }
              </div>
            </>
            : <div id='search-no-results'>
              { i18n('SEARCH.NO_RESULTS') }
            </div>
          : null
      }
    </div>
  }

}
