import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./App.css";

import Search from "./components/Search/Search";
import Albums from "./components/Albums/Albums";
import Artists from "./components/Artists/Artists";
import ArtistPage from "./components/ArtistPage/ArtistPage";

export default class App extends Component {
  state = {
    albums: [],
    artists: [],
  };

  resultsHandler = (data, dataA) => {
    this.setState({ albums: data, artists: dataA });
    console.log(data, dataA);
  };

  render() {
    return (
      <div className="App">
        <Route path="/" exact>
          <Search onResult={this.resultsHandler} />
          <Artists dataA={this.state.artists} />
          <Albums data={this.state.albums} />
        </Route>

        <Route path="/artist" exact>
          <ArtistPage dataA={this.state.artists} />
        </Route>
      </div>
    );
  }
}
