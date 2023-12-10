import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import '../css/Button.css';

export default class Button extends PureComponent {

  _resizeTimer = null

  get isMobile() {
    return window.innerWidth < 768;
  }

  /** Called after first render */
  componentDidMount() {
    window.addEventListener('resize', this.onResize)
  }

  /** Called before component is unloaded */
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }

  /** Called when the window has been resized */
  onResize = () => {
    if (this._resizeTimer) {
      clearTimeout(this._resizeTimer)
    }

    this._resizeTimer = setTimeout(() => {
      this._resizeTimer = null
      this.forceUpdate()
    }, 100)
  }

  renderButton() {
    return <button>
      { this.props.icon
        ? <img id='btn-icon' src={this.props.icon} alt={this.props.text} />
        : null
      }

      { this.isMobile
        ? null
        : this.props.text
      }
    </button>
  }

  render() {
    return this.props.to
      ? <Link to={this.props.to}>
        { this.renderButton() }
      </Link>
      : this.renderButton()
  }

}
