import React, { PureComponent } from 'react';

import '../css/SearchResult.css'

export default class SearchResult extends PureComponent {

  /** Render the search result UI */
  render() {
    const result = this.props.result
    const data = result.data[0]
    const link = result.links[0]
    const href = link.href
    const title = data.title
    const description = data.description
    const dateCreated = new Date(data.date_created).toLocaleDateString()

    return <div id='result-container'>
      <img src={href} alt={title} />
      <div id='result-info'>
        <h3>{title}</h3>
        <p>{description}</p>
        <p><strong>Created on</strong> {dateCreated}</p>
      </div>
    </div>
  }

}
