import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import '../css/Header.css'
import Button from './Button';
import LanguageSelector from './LanguageSelector';
import eventBus from '../eventBus';

import { i18n, setLocale } from '../locales/i18n';

/**
 * Header bar to allow navigation throughout the app.
 */
export default class Header extends PureComponent {

  /** Initial state */
  state = {
    selected: '',
    language: 'en-us',
  }

  /** Called after first render */
  componentDidMount() {
    const language = localStorage.getItem('last-language');

    // Use the last selected language on startup
    if (language === 'en-us' || language === 'nl-nl') {
      this.setState({ language })
      setLocale(language)
      eventBus.send('lang-change', language)

      // Send another one just so that other components have enough time to render
      // and update their text
      setTimeout(() => eventBus.send('lang-change', language), 100)
    }

    // Ensure that when a user navigates directly to a page, the correct button
    // is selected
    const path = window.location.pathname
    if (path === '/search') {
      this.setState({ selected: 'search' })
    } else if (path === '/game') {
      this.setState({ selected: 'game' })
    }
  }

  /** Called when the user clicks on the language button */
  onLanguageClick = _ => {
    const language = this.state.language === 'en-us' ? 'nl-nl' : 'en-us'
    this.setState({ language })

    setLocale(language)
    eventBus.send('lang-change', { language })

    // Keep track of last selected language, so user does not need to select each
    // time they reload the page
    localStorage.setItem('last-language', language)
  }

  /** Render the header navigation bar */
  render() {
    return <div id='header'>
      <Link id='home-btn' to='/' onClick={_ => this.setState({ selected: '' })}>
        <img id='logo' alt='NASA: The Game' src={require('../images/logo.svg')} />
        { i18n('TITLE.TEXT') }
      </Link>

      <div className='horizontal-spacer' />

      <div id='nav-buttons'>
        <Button to='/search' icon={require('../images/search.svg')} text={i18n('TEXT.SEARCH')} isSelected={this.state.selected === 'search'} onClick={_ => this.setState({ selected: 'search' })} />
        <Button to='/game' icon={require('../images/game.svg')} text={i18n('TEXT.GAME')} isSelected={this.state.selected === 'game'} onClick={_ => this.setState({ selected: 'game' })} />
      </div>

      { this.state.language === 'en-us'
        ? <LanguageSelector alt='English' text='EN' icon={require('../images/british-flag.svg')} onChange={this.onLanguageClick} />
        : <LanguageSelector alt='Nederlands' text='NL' icon={require('../images/dutch-flag.svg')} onChange={this.onLanguageClick} />
      }
    </div>
  }

}
