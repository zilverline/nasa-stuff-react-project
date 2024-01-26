import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Game from "./components/Game";
import Game1 from "./components/Game/Game1";
import Game2 from "./components/Game/Game2";
import Game3 from "./components/Game/Game3";
import Search from "./components/Search";

import "./App.css";

import Header from "./containers/Header";
import MainContainer from "./containers/MainContainer";

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div>
      <Header />
      <Route exact path="/" component={MainContainer} />

      <Route exact path="/game" component={Game} />
      <Route exact path="/game/1" component={Game1} />
      <Route exact path="/game/2" component={Game2} />
      <Route exact path="/game/3" component={Game3} />

      <Route path="/search" component={Search} />
    </div>
  </BrowserRouter>
);

export default App;
