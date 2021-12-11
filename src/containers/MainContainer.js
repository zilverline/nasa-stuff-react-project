import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '../components/Button';

export default class MainContainer extends Component {

  render() {
    return (
      <div>
        <Link to="/search"><Button>Search Images</Button></Link>
        <Link to="/game"><Button>Play Game</Button></Link>
      </div>
    )
  }
}