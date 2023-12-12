import React, { PureComponent } from 'react';

import '../css/SearchResult.css';
import { i18n } from '../locales/i18n';

/**
 * Result after user has searched for images.
 */
export default class SearchResult extends PureComponent {

  /** Initial state */
  state = {
    isExpanded: false,
  }

  /** Render the search result UI */
  render() {
    const result = this.props.result;
    const data = result.data[0];
    const link = result.links[0];
    const href = link.href;
    const title = data.title;
    const description = data.description;

    return <div className='result-container'>
      <img src={href} alt={title} />

      <div className='result-info' style={{ height: this.state.isExpanded ? '100%' : 'fit-content' }}>
        <div className='result-title' onClick={_ => this.setState({ isExpanded: !this.state.isExpanded })}>
          <span>{ title }</span>
          <img className='result-chevron' title={this.state.isExpanded ? i18n('SEARCH.COLLAPSE') : i18n('SEARCH.EXPAND')} src={require(`../images/${this.state.isExpanded ? 'collapse' : 'expand'}.svg`)} alt={this.state.isExpanded ? i18n('SEARCH.COLLAPSE') : i18n('SEARCH.EXPAND')} />
        </div>
        <div className='result-description' style={{ WebkitLineClamp: this.state.isExpanded ? 7 : 2 }}>
          { description }
        </div>
      </div>
    </div>
  }

}
