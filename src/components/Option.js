import React, { PureComponent } from 'react';

import '../css/Option.css';

/**
 * A single option that is choosable.
 */
export default class Option extends PureComponent {

  /** Initial state */
  state = {
    isHovering: false,
  }

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
    const useRawIcon = this.props.useRawIcon ?? true

    return <button className='option-container' onClick={this.onSelect} onPointerOver={_ => this.setState({ isHovering: true })} onPointerOut={_ => this.setState({ isHovering: false })}>
      { this.props.icon
        ? useRawIcon
          ? <img className='option-img' src={this.props.icon} alt={this.props.value} />
          : <div className='option-img' style={{ backgroundColor: this.state.isHovering ? '#000000' : '#FFFFFF', maskImage: `url(${this.props.icon})`, maskPosition: 'center', maskSize: 'contain', maskRepeat: 'no-repeat', WebkitMaskImage: `url(${this.props.icon})`, WebkitMaskPosition: 'center', WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat' }} />
        : null
      }

      { this.props.value }
    </button>
  }

}
