import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import '../css/Button.css';

export default class Button extends PureComponent {

  state = {
    isHovering: false,
  }

  renderButton() {
    return <button onPointerOver={_ => this.setState({ isHovering: true })} onPointerOut={_ => this.setState({ isHovering: false })} style={{ borderBottom: `2px solid ${this.state.isHovering || this.props.isSelected ? '#FFFFFF' : 'transparent'}` }}>
      { this.props.icon
        ? <img id='btn-icon' src={this.props.icon} alt={this.props.text} />
        : null
      }

      <span>
        { this.props.text }
      </span>
    </button>
  }

  render() {
    return this.props.to
      ? <Link to={this.props.to} onClick={this.props.onClick ? evt => this.props.onClick(evt) : null}>
        { this.renderButton() }
      </Link>
      : this.renderButton()
  }

}
