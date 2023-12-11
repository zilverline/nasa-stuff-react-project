import React, { PureComponent } from 'react';

import '../css/Card.css';

/**
 * Card that shows an icon, text and subtext.
 */
export default class Card extends PureComponent {

  /** Renders the card information */
  render() {
    return <div className='card-container'>
      { this.props.icon
        ? <img className='card-img' src={this.props.icon} alt={this.props.text} />
        : null
      }

      <div className='card-title'>
        { this.props.text }
      </div>

      { this.props.subtext
        ? <div className='card-subtext'>
          { this.props.subtext }
        </div>
        : null
      }
    </div>
  }

}
