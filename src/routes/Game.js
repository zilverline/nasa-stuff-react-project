import React, { PureComponent } from 'react';
import { i18n } from '../locales/i18n';

import '../css/Game.css'
import Option from '../components/Option';

/**
 * Game page, where the user has to guess which planet is shown in the image.
 */
export default class Game extends PureComponent {

  /** Initial state */
  state = {
    image: '',
    loading: true,
    isCorrect: false,
    resultTitle: '',
    resultText: '',
  }

  /** Planet that has been chosen by the app */
  correct = {
    name: 'Earth',
    icon: require('../images/earth.svg'),
    localized: i18n('PLANETS.EARTH'),
  }

  /** List of planets that are available to choose from */
  planets = [
    {
      name: 'Mercury',
      icon: require('../images/mercury.svg'),
      localized: i18n('PLANETS.MERCURY'),
    },
    {
      name: 'Venus',
      icon: require('../images/venus.svg'),
      localized: i18n('PLANETS.VENUS'),
    },
    {
      name: 'Earth',
      icon: require('../images/earth.svg'),
      localized: i18n('PLANETS.EARTH'),
    },
    {
      name: 'Mars',
      icon: require('../images/mars.svg'),
      localized: i18n('PLANETS.MARS'),
    },
    {
      name: 'Jupiter',
      icon: require('../images/jupiter.svg'),
      localized: i18n('PLANETS.JUPITER'),
    },
    {
      name: 'Saturn',
      icon: require('../images/saturn.svg'),
      localized: i18n('PLANETS.SATURN'),
    },
    {
      name: 'Uranus',
      icon: require('../images/uranus.svg'),
      localized: i18n('PLANETS.URANUS'),
    },
    {
      name: 'Neptune',
      icon: require('../images/neptune.svg'),
      localized: i18n('PLANETS.NEPTUNE'),
    }
  ]

  /** Called after first render */
  componentDidMount() {
    this.startGame();
  }

  /** Starts the game by choosing a planet image */
  async startGame() {
    this.setState({ loading: true, image: '', isCorrect: false, resultTitle: '', resultText: '' });

    // Choose a random planet from our list
    const planet = this.planets[Math.floor(Math.random() * this.planets.length)];
    this.correct = {
      name: planet.name,
      icon: planet.icon,
      localized: i18n('PLANETS.' + planet.name.toUpperCase()),
    }

    try {
      const response = await fetch(`https://images-api.nasa.gov/search?q=${planet.name}`);
      if (!response.ok) {
        throw new Error(`Received ${response.status} status code.`);
      }

      const json = await response.json();
      if (!json?.collection) {
        throw new Error('Received invalid response, no collection property found.');
      }

      if (!json.collection.items) {
        throw new Error('Received invalid response, no items property found.');
      }

      // Choose random image of the chosen planet
      const items = json.collection.items.filter(item => !!item?.links?.[0]);
      const randomIndex = Math.floor(Math.random() * items.length);
      const image = items[randomIndex].links[0].href;
      this.setState({ image });
    } catch (err) {
      // Use Earth as backup
      this.correct = {
        name: 'Earth',
        localized: i18n('PLANETS.EARTH'),
      }
      this.setState({ image: require('../images/earth.jpg') });
      console.error('Something went wrong while finding a planet image.', err);
    }

    this.setState({ loading: false });
  }

  /** Called when the user has guess a planet */
  onGuessSelect = planet => {
    if (planet !== this.correct.name || planet !== this.correct.localized) {
      this.setState({ isCorrect: false, resultTitle: i18n('TEXT.INCORRECT'), resultText: 'Correct planet is ' + this.correct.localized });
      return
    }

    this.setState({ isCorrect: true, resultTitle: i18n('TEXT.CORRECT'), resultText: '' })
  }

  /** Renders an intermediate loading UI while the image is being fetched */
  renderLoading() {
    return <div>
      Finding image...
    </div>
  }

  /** Renders the result after the user has chosen a planet */
  renderResult() {
    return <>
      <div id='guess-result-title' style={{ color: this.state.isCorrect ? '#25cb25' : '#d91212' }}>
        { this.state.resultTitle }
      </div>

      { this.state.isCorrect
        ? null
        : <div id='guess-incorrect-text'>
          { i18n('TEXT.CORRECT_TEXT') } <img src={this.correct.icon} alt={this.correct.localized} /> <span id='guess-correct-name'>{ this.correct.localized }</span>
        </div>
      }

      <Option text='Play Again' value='Play Again' onSelect={_ => this.startGame()} />
    </>
  }

  /** Renders the guessing part of the game */
  renderGuessing() {
    return <div id='guess-container'>
      <img id='guess-img' src={this.state.image} alt='Planet' style={{ width: this.state.resultTitle ? 200 : 400 }} />

      { this.state.resultTitle
        ? this.renderResult()
        : <div id='guess-planets'>
          { this.planets.map(info => {
            return <Option key={info.name} icon={info.icon} text={info.localized} value={info.name} onSelect={this.onGuessSelect} />
          })}
        </div>
      }
    </div>
  }

  /** Renders the guessing game */
  render() {
    return <div id='game-container'>
      { this.state.loading
        ? this.renderLoading()
        : this.renderGuessing()
      }
    </div>
  }

}
