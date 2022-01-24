import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <Link to="/search">
                    <div className="buttoncontainer">
                        <button>Search!</button>
                    </div>
                </Link>

                <Link to="/game">
                    <div className="buttoncontainer">
                        <button>Play!</button>
                    </div>
                </Link>

            </div>
        )
    }
}
