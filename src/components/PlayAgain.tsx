import React from "react";
import { Link } from "react-router-dom";

const PlayAgain = () => {
  const reloadPage = () => {
    document.location.reload();
  };
  return (
    <div className="playagainbutton">
      <button onClick={reloadPage}>Again!</button>
      <Link to="/">
        <button className="back">Go Back</button>
      </Link>
    </div>
  );
};
export default PlayAgain;
