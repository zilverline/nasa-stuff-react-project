import React, { PureComponent } from 'react';

import '../css/Card.css';

export default class Card extends PureComponent {

  render() {
    return <div id='card-container'>
      { this.props.icon
        ? <img id='card-img' src={this.props.icon} alt={this.props.text} />
        : null
      }

      <div>
        { this.props.text }
      </div>

      { this.props.subtext
        ? <div id='card-subtext'>
          { this.props.subtext }
        </div>
        : null
      }
    </div>
  }

}
