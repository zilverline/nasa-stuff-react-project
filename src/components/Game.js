import React, {Component} from 'react';
import $ from 'jquery'

import {Link} from "react-router-dom";

export default class Game extends Component {
    //state tracks the current image from the api, the item the player guessed, attempts played, and whether the game has been played once
    state = {
        images: [],
        image: "",
        item: "",
        guess: null,
        gamePlayed: false,
        gameCount: 0
    }

    getGameImage = () => {
        const spaceSearch = ["moon", "earth", "jupiter", "saturn", "pluto", "mars", "venus"]
        let randomSearchItem = spaceSearch[Math.floor(Math.random() * spaceSearch.length)]
        let randomNumber = Math.floor(Math.random() * 100)

        const url = "https://images-api.nasa.gov/search?q="

        // sending the call to the NASA API
        $.ajax({
            url: `${url}${randomSearchItem}`,
            type: "GET",
            dataType: "json",
        }).done(function (json) {
            let imageres = json.collection.items[randomNumber].links[0].href

        }).then(json => {
            this.setState({
                image: json.collection.items[randomNumber].links[0].href,
                item: randomSearchItem

            })
        })
    }

    //ajax request after the component mounts
    componentDidMount() {
        this.getGameImage()
        this.setState({gameCount: this.state.gameCount++})
    }

    //the game choices are rendered
    playGame = () => {
        const spaceWords = ["moon", "earth", "jupiter", "saturn", "pluto", "mars", "venus"]
        return spaceWords.map(word =>
            <div className="guessing">
                <button onClick={e => this.guessChoice(e)} id={word}>{word}</button>
            </div>
        )
    }

    //the player chooses one item and this function determines if it's a win
    guessChoice = (e) => {
        this.setState({
            gamePlayed: true,
            guess: e.target.id
        })
    }

    gameComplete = () => {
        let message = (this.state.item === this.state.guess) ? "You're Right!" : `Wrong, Try Again. Correct Answer: ${this.state.item}`
        return (
            <div>{message}</div>
        )
    }

    resetGame = () => {
        this.setState({
            images: [],
            image: "",
            item: "",
            gamePlayed: false,
            gameCount: this.state.gameCount++
        })
        this.getGameImage()
    }

    handlePlayAgain = () => {
        return (
            <div className="playagainbutton">
                <button onClick={this.resetGame}>Again!</button>
                <Link to="/">
                    <button className="back">Go Back</button>
                </Link>
            </div>
        )
    }

    //Renders the game image, the choices, and determines if the game is done and can be played again
    render() {
        return (
            <div className="namegame">
                <div className="titlegame">Guess which one is associated with this image:</div>
                <img src={this.state.image} id="namegameimage"/>
                {this.state.gamePlayed ? this.gameComplete() : <div className="namegamebutton">{this.playGame()}</div>}
                {this.state.gamePlayed ? this.handlePlayAgain() : null}
            </div>
        );
    }
}
