import React, { PureComponent } from 'react';
import { i18n } from '../locales/i18n';

import '../css/Game.css'
import earth from '../images/earth.jpg'
import Option from '../components/Option';

/**
 * Game page, where the user has to guess which planet is shown in the image.
 */
export default class Game extends PureComponent {

  state = {
    image: '',
    loading: true,
    resultText: '',
  }

  /** Planet that has been chosen by the app */
  correct = {
    name: 'Earth',
    localized: i18n('PLANETS.EARTH'),
  }

  /** List of planets that are available to choose from */
  planets = [
    {
      name: 'Mercury',
      localized: i18n('PLANETS.MERCURY'),
    },
    {
      name: 'Venus',
      localized: i18n('PLANETS.VENUS'),
    },
    {
      name: 'Earth',
      localized: i18n('PLANETS.EARTH'),
    },
    {
      name: 'Mars',
      localized: i18n('PLANETS.MARS'),
    },
    {
      name: 'Jupiter',
      localized: i18n('PLANETS.JUPITER'),
    },
    {
      name: 'Saturn',
      localized: i18n('PLANETS.SATURN'),
    },
    {
      name: 'Uranus',
      localized: i18n('PLANETS.URANUS'),
    },
    {
      name: 'Neptune',
      localized: i18n('PLANETS.NEPTUNE'),
    },
    {
      name: 'Pluto',
      localized: i18n('PLANETS.PLUTO'),
    }
  ]

  componentDidMount() {
    this.startGame();
  }

  /** Starts the game by choosing a planet image */
  async startGame() {
    this.setState({ loading: true, image: '', resultText: '' });

    const planet = this.planets[Math.floor(Math.random() * this.planets.length)];
    this.correct = {
      name: planet.name,
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
      const items = json.collection.items.filter(item => !!item?.links[0]);
      const randomIndex = Math.floor(Math.random() * items.length);
      const image = items[randomIndex].links[0].href;
      this.setState({ image });
    } catch (err) {
      // Use Earth as backup
      this.correct = {
        name: 'Earth',
        localized: i18n('PLANETS.EARTH'),
      }
      this.setState({ image: earth });
      console.error('Something went wrong while finding a planet image.', err);
    }

    this.setState({ loading: false });
  }

  onGuessSelect = planet => {
    if (planet !== this.correct.name || planet !== this.correct.localized) {
      this.setState({ resultText: 'Wrong! Correct planet is ' + this.correct.localized });
      return
    }

    this.setState({ resultText: 'Correct!' })
  }

  /** Renders an intermediate loading UI while the image is being fetched */
  renderLoading() {
    return <div>
      Finding image...
    </div>
  }

  renderResult() {
    return <div>
      { this.state.resultText }

      <Option text='Play Again' value='Play Again' onSelect={_ => this.startGame()} />
    </div>
  }

  /** Renders the guessing part of the game */
  renderGuessing() {
    return <div id='guess-container'>
      <img id='guess-img' src={this.state.image} alt='Planet' />

      { this.state.resultText
        ? this.renderResult()
        : <div id='guess-planets'>
          { this.planets.map(info => {
            return <Option key={info.name} text={info.localized} value={info.name} onSelect={this.onGuessSelect} />
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
