import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Game from './components/Game';
import Header from './containers/Header';
import MainContainer from './containers/MainContainer';
import SearchPage from './pages/SearchPage';

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={MainContainer} />

          <Route exact path="/game" component={Game} />

          <Route path="/search" component={SearchPage} />
        </div>
      </BrowserRouter>
    )
  }

}
