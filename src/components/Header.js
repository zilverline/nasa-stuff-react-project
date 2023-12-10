import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import '../css/Header.css'
import Button from './Button';

import logo from '../images/logo.svg'
import search from '../images/search.svg'
import game from '../images/game.svg'

/**
 * Header bar to allow navigation throughout the app.
 */
export default class Header extends PureComponent {

  /** Render the header navigation bar */
  render() {
    return <div id='header'>
      <Link id='home-btn' to='/'>
        <img id='logo' alt='NASA: The Game' src={logo} />
        NASA: The Game
      </Link>

      <div className='horizontal-spacer' />

      <div id='nav-buttons'>
        <Button to='/search' icon={search} text='Search' />
        <Button to='/game' icon={game} text='Game' />
      </div>
    </div>
  }

}
