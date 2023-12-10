import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import '../css/Home.css';

import Card from '../components/Card';
import search from '../images/search.svg';
import game from '../images/game.svg';

/**
 * Home page, which is the first page the user will see when opening the app.
 */
export default class Home extends PureComponent {

  /** Render the home UI */
  render() {
    return <div id='home-container'>
      <Link to='/search'>
        <Card icon={search} text='Search' subtext='Search for images from the NASA database.' />
      </Link>

      <Link to='/game'>
        <Card icon={game} text='Game' subtext='Find out how good you are at guessing planets from images!' />
      </Link>
    </div>
  }

}
