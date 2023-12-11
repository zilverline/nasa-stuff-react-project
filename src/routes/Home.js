import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import '../css/Home.css';

import Card from '../components/Card';
import { i18n } from '../locales/i18n';
import eventBus from '../eventBus';

/**
 * Home page, which is the first page the user will see when opening the app.
 */
export default class Home extends PureComponent {

  /** Called after first mount */
  componentDidMount() {
    eventBus.addListener('lang-change', this.onLanguageChange)
  }

  /** Called after first mount */
  componentWillUnmount() {
    eventBus.removeListener('lang-change', this.onLanguageChange)
  }

  /** Called when we change the language */
  onLanguageChange = _ => {
    this.forceUpdate()
  }

  /** Render the home UI */
  render() {
    return <div id='home-container'>
      <Link to='/search'>
        <Card icon={require('../images/search.svg')} text={i18n('TEXT.SEARCH')} subtext='Search for images from the NASA database.' />
      </Link>

      <Link to='/game'>
        <Card icon={require('../images/game.svg')} text={i18n('TEXT.GAME')} subtext='Find out how good you are at guessing planets from images!' />
      </Link>
    </div>
  }

}
