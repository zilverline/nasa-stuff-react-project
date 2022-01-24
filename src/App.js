import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import './App.css';

import Game from './components/Game'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import SearchContainer from "./components/SearchContainer";

export default class App extends Component {
    state = {}
    setAppState = (attribute, newValue) => {
        let currentState = {...this.state}
        currentState[attribute] = newValue
        this.setState(currentState)
    }

    //the welcome component has the header/navbar and the button to choose to search is toggled
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/game" component={Game}/>
                    <Route
                        path="/search"
                        render={(props) => <SearchContainer images={this.state.images} setAppState={this.setAppState}/>}
                    />

                </div>
            </BrowserRouter>
        )
    }

}
