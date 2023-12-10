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
        <Card text='Search' />
      </Link>

      <Link to='/game'>
        <Card text='Game' />
      </Link>
    </div>
  }

}
