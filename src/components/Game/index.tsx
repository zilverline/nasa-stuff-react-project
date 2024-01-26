import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

const Game = () => {
  return (
    <div className="game">
      <div className="titlegame">Pick a game</div>
      <div className="game-selection">
        <Link to="/game/1">
          <Button title="Game 1!" />
        </Link>
        <Link to="/game/2">
          <Button title="Game 2!" />
        </Link>
        <Link to="/game/3">
          <Button title="Game 3!" />
        </Link>
      </div>
    </div>
  );
};

export default Game;
