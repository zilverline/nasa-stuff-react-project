import React, { PureComponent } from 'react';

import '../css/Option.css';

export default class Option extends PureComponent {

  onSelect = () => {
    if (!this.props.onSelect || typeof this.props.onSelect !== 'function') {
      return;
    }

    // Call function with English version of the value
    this.props.onSelect(this.props.text);
  }

  render() {
    return <div id='option-container' onClick={this.onSelect}>
      { this.props.icon
        ? <img src={this.props.icon} alt={this.props.value} />
        : null
      }

      { this.props.value }
    </div>
  }

}
