import React, { Component } from 'react';
import $ from "jquery";
import PlayAgain from "./PlayAgain";

const planet_dict = {
    0:'mercury',
    1: 'venus',
    2: 'earth',
    3: 'mars',
    4: 'jupiter',
    5: 'saturn',
    6: 'uranus',
    7: 'neptune'
}



export default class MatchGame extends Component {

    state = {
        guessed_planet: -1,
        guessed_id: -1,
        gamePlayed: false,
        image_11: {
            'planet': 'earth',
            'id': 2,
            'src': this.set_source('earth', 2),
            'identifier': 1,
        },
        image_12: {
            'planet': 'earth',
            'id': 3,
            'src': this.set_source('earth', 3),
            'identifier': 2,
        },
        image_21: {
            'planet': 'mars',
            'id': 3,
            'src': this.set_source('mars', 2),
            'identifier': 3,
        },
        image_22: {
            'planet': 'mars',
            'id': 2,
            'src': this.set_source('mars', 3),
            'identifier': 4,
        },
        order: [0,1,2,3]
    }

    generate_2_numbers(max) {
        /**
         * This methods will return a list with 2 random generated number, within the interval [0, max]
         * @param  {int} max    the maximum range of the random generated number.
         * @return {Array}      an array with 2 random generated numbers within the given max range.
         */
        let num1 = Math.floor(Math.random() * max);
        let num2 = Math.floor(Math.random() * max);
        while (num1 === num2) {
            num2 = Math.floor(Math.random() * max);
        }
        return [num1, num2]
    }

    set_planets_and_image_num() {
        /**
         * This function will chose 2 planets and 2 random images from those 2 planets, and set them in the state.
         */
        let random_num_set = this.generate_2_numbers(8);
        let planet1 = planet_dict[random_num_set[0]];
        let planet2 = planet_dict[random_num_set[1]];

        this.set_image_numbers(planet1, planet2)

    }

    set_image_numbers(planet1, planet2) {
        /**
         * This method will chose 2 images each from 2 input planets, and then store them in the state.
         * @param {String}  planet1 the first given planet.
         * @param {String}  planet2 the second given planet.
         */
        let random_num_set1 = this.generate_2_numbers(100);
        let random_num_set2 = this.generate_2_numbers(100);

        this.setState({
                image_11: {
                    'planet': planet1,
                    'source': this.set_source(planet1, random_num_set1[0]),
                    'id': random_num_set1[0]
                },
                image_12: {
                    'planet': planet1,
                    'source': this.set_source(planet1, random_num_set1[1]),
                    'id': random_num_set1[1]
                },
                image_21: {
                    'planet': planet2,
                    'source': this.set_source(planet2, random_num_set2[0]),
                    'id': random_num_set2[0]
                },
                image_22:{
                    'planet': planet2,
                    'source': this.set_source(planet2, random_num_set2[1]),
                    'id': random_num_set2[1]
                }
            }
        )
    }

    playGame = () => {
        let spaceImages = [this.state.image_11, this.state.image_12,
            this.state.image_21, this.state.image_22]
        let randomImages = [
            spaceImages[this.state.order[0]],
            spaceImages[this.state.order[1]],
            spaceImages[this.state.order[2]],
            spaceImages[this.state.order[3]]]
        return randomImages.map(planet_image =>
            <div className="guessing">
                <img onClick={e => this.guessChoice(e)} id={planet_image.planet + '_' + planet_image.id
                } src={planet_image.source}/>
            </div>
        )
    }

    shuffle(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    guessChoice = (e) => {
        if (this.state.guessed_planet === -1) {
            let results = e.target.id.split('_')
            this.setState({
                guessed_planet: results[0],
                guessed_id: results[1]
            })
        } else {
            let results = e.target.id.split('_')
            if (this.state.guessed_planet === results[0] && this.state.guessed_id === results[1]) {
                alert('you cannot chose the same image, please chose again!')
                this.setState({
                    guessed_planet: -1
                })
            }
            else if (this.state.guessed_planet === results[0]) {
                $(".namegamebutton").html("You're Right!");
            } else {
                $(".namegamebutton").html("Wrong, Try Again." );
            }
            this.setState({
                guessed_planet: -1
            })
            this.setState({
                gamePlayed: true
            })
        }
    }

    playAgain = () => {
        this.setState({
            gamePlayed: false
        })
    }

    renderGame = () => {
        return <div className="namegamebutton">{this.playGame()}</div>
    }

    render() {
        return (

            <div className="namegame" >

                <div className="titlegame">Please match 2 pictures shown below:</div>
                {this.renderGame()}
                {this.state.gamePlayed ? <PlayAgain /> : null}

            </div>
        );
    }

    componentDidMount(){
        this.set_planets_and_image_num()
        this.setState({gameCount: this.state.gameCount++,
                            order: this.shuffle([0,1,2,3])
        })
    }

    set_source(planet, id) {
        /**
         * This methods will gets a image from NASA's api, with given planet and  given id. if the id does not have a link
         * then increment thee id and try again.
         * @param {string}  planet  the given planet.
         * @param {int}     id      the id of the item retrieved from NASA's api.
         * @return {string}     the url of the image.
         */
        // sending the call to the NASA API
        const url = "https://images-api.nasa.gov/search?q="
        var xmlHttp = new XMLHttpRequest();
        let is_valid = false
        while (!is_valid) {
            try {
                xmlHttp.open("GET", url + planet, false); // false for synchronous request
                xmlHttp.send(null);
                let result = JSON.parse(xmlHttp.responseText);

                let a = result.collection.items[id].links[0];
                let b = a.href;
                is_valid = true;
                return b;
            } catch (err) {
                // if the result does not have link, then increment id until we have a result.
                if (err instanceof TypeError) {
                    // statements to handle TypeError exceptions
                    id++;
                } else {
                    throw err;
                }
            }
        }
    }
}