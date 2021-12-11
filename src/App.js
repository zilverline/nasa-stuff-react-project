import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Game from './components/Game'
import SearchForm from './components/SearchForm'

import './App.css';

import Header from './containers/Header'
import MainContainer from './containers/MainContainer'

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={MainContainer} />

          <Route exact path="/game" component={Game} />

          <Route path="/search" component={SearchForm} />
        </div>
      </BrowserRouter>
    )
  }

}
