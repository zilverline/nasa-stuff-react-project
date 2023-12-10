import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './routes/Home';
import Search from './routes/Search';
import Game from './routes/Game';

export default class App extends PureComponent {

  /** Renders the app UI */
  render() {
    return <BrowserRouter>
      <Header />

      <div id='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/game' element={<Game />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  }

}
