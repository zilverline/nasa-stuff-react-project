import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import '../css/Home.css';

import Card from '../components/Card';

/**
 * Home page, which is the first page the user will see when opening the app.
 */
export default class Home extends PureComponent {

  /** Render the home UI */
  render() {
    return <div id='home-container'>
      <Link to='/search'>
        <Card icon={require('../images/search.svg')} text='Search' subtext='Search for images from the NASA database.' />
      </Link>

      <Link to='/game'>
        <Card icon={require('../images/game.svg')} text='Game' subtext='Find out how good you are at guessing planets from images!' />
      </Link>
    </div>
  }

}
