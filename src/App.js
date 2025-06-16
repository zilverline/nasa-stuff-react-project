import React, { Component } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import $ from 'jquery'

import Game from './components/Game'
import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults'

import './App.css';

import Header from './containers/Header'
import MainContainer from './containers/MainContainer'

export default class App extends Component {

  state = {
    images: []
  }



//The NASA API is called and then the results go to the state
  fetchImages = (query = "") => {
    $.ajax({
      url: `https://images-api.nasa.gov/search?q=${query}`
    }).then(json => {
      this.setState({ images: json.collection.items })
    })
  }

  //the welcome component has the header/navbar and the button to choose to search is toggled
    render() {
      return(
        <BrowserRouter>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<MainContainer />} />
              <Route path="/game" element={<Game />} />
              <Route
                  path="/search"
                  element={
                    <>
                      <SearchForm fetchImages={this.fetchImages} />
                      <SearchResults getResults={this.state.images} />
                    </>
                  }
              />
            </Routes>
          </div>
        </BrowserRouter>
      )
    }

}
