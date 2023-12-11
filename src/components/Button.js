import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import '../css/Button.css';

export default class Button extends PureComponent {

  /** Initial state */
  state = {
    isHovering: false,
  }

  /** Renders the actual button */
  renderButton() {
    return <button onPointerOver={_ => this.setState({ isHovering: true })} onPointerOut={_ => this.setState({ isHovering: false })} style={{ borderBottom: `2px solid ${this.state.isHovering || this.props.isSelected ? '#FFFFFF' : 'transparent'}`, fontWeight: this.props.isSelected ? 'bold' : 'normal' }}>
      { this.props.icon
        ? <img id='btn-icon' src={this.props.icon} alt={this.props.text} />
        : null
      }

      <span>
        { this.props.text }
      </span>
    </button>
  }

  /** Renders as a button or as a link to another page */
  render() {
    return this.props.to
      ? <Link to={this.props.to} onClick={this.props.onClick ? evt => this.props.onClick(evt) : null}>
        { this.renderButton() }
      </Link>
      : this.renderButton()
  }

}
