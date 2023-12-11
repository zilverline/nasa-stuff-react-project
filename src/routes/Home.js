import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import '../css/Home.css';

import Card from '../components/Card';
import eventBus from '../eventBus';
import { i18n } from '../locales/i18n';

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
      <Link to='/search' onClick={_ => eventBus.send('page-change', { page: 'search' })}>
        <Card icon={require('../images/search.svg')} text={i18n('TEXT.SEARCH')} subtext={i18n('TEXT.SEARCH_SUBTEXT')} />
      </Link>

      <Link to='/game' onClick={_ => eventBus.send('page-change', { page: 'game' })}>
        <Card icon={require('../images/game.svg')} text={i18n('TEXT.GAME')} subtext={i18n('TEXT.GAME_SUBTEXT')} />
      </Link>
    </div>
  }

}
