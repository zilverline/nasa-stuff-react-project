import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import '../css/Header.css'
import Button from './Button';

/**
 * Header bar to allow navigation throughout the app.
 */
export default class Header extends PureComponent {

  /** Initial state */
  state = {
    selected: '',
  }

  /** Called after first render */
  componentDidMount() {
    // Ensure that when a user navigates directly to a page, the correct button
    // is selected
    const path = window.location.pathname
    if (path === '/search') {
      this.setState({ selected: 'search' })
    } else if (path === '/game') {
      this.setState({ selected: 'game' })
    }
  }

  /** Render the header navigation bar */
  render() {
    return <div id='header'>
      <Link id='home-btn' to='/' onClick={_ => this.setState({ selected: '' })}>
        <img id='logo' alt='NASA: The Game' src={require('../images/logo.svg')} />
        NASA: The Game
      </Link>

      <div className='horizontal-spacer' />

      <div id='nav-buttons'>
        <Button to='/search' icon={require('../images/search.svg')} text='Search' isSelected={this.state.selected === 'search'} onClick={_ => this.setState({ selected: 'search' })} />
        <Button to='/game' icon={require('../images/game.svg')} text='Game' isSelected={this.state.selected === 'game'} onClick={_ => this.setState({ selected: 'game' })} />
      </div>
    </div>
  }

}
