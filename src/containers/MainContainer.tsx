import React from "react";
import { Link } from "react-router-dom";

import Button from "../components/Button";

const MainContainer = () => (
  <div>
    <Link to="/search">
      <Button title="Search!" />
    </Link>
    <Link to="/game">
      <Button title="Play!" />
    </Link>
  </div>
);
export default MainContainer;
