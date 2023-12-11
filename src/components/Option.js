import React, { PureComponent } from 'react';

import '../css/Option.css';

/**
 * A single option that is choosable.
 */
export default class Option extends PureComponent {

  /** Called when the user selects this option */
  onSelect = () => {
    if (!this.props.onSelect || typeof this.props.onSelect !== 'function') {
      return;
    }

    // Call function with English version of the value
    this.props.onSelect(this.props.text);
  }

  /** Renders the option UI */
  render() {
    return <button className='option-container' onClick={this.onSelect}>
      { this.props.icon
        ? <img className='option-img' src={this.props.icon} alt={this.props.value} />
        : null
      }

      { this.props.value }
    </button>
  }

}
