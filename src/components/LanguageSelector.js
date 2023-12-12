import React, { PureComponent } from 'react';

import '../css/LanguageSelector.css';

/**
 * Allows the user to change between languages.
 */
export default class LanguageSelector extends PureComponent {

  /** Called when the user has requested to change the language */
  onLanguageClick = _ => {
    if (!this.props.onChange || typeof this.props.onChange !== 'function') {
      return;
    }

    this.props.onChange();
  }

  /** Renders the language selector UI */
  render() {
    return <div id='lang-container' onClick={this.onLanguageClick}>
      <img id='lang-flag' src={this.props.icon} title={this.props.alt} alt={this.props.alt} />

      <span id='lang-text'>
        { this.props.text }
      </span>
    </div>
  }

}
