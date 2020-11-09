import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./App.css";

import Search from "./components/Search/Search";
import Albums from "./components/Albums/Albums";
import Artists from "./components/Artists/Artists";

export default class App extends Component {
  state = {
    albums: [],
    artists: [],
    artistId: 0,
    id: 0,
  };

  resultsHandler = (data, dataA) => {
    this.setState({ albums: data, artistId: data, artists: dataA, id: dataA });
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
      </div>
    );
  }

  // render() {
  //   let showing = (
  //     <div>
  //       <Artists dataA={this.state.artists} />
  //       <Albums data={this.state.albums} />
  //     </div>
  //   );
  //   if (this.state.artistId === this.state.id) {
  //     return showing;
  //   }

  //   return (
  //     <div className="App">
  //       <Route path="/" exact>
  //         <Search onResult={this.resultsHandler} />
  //         {showing}
  //         <p>Helooooooo</p>
  //       </Route>
  //       {/* <Route path="/artist" exact>
  //         <IndividualArtist data={this.state.results} />
  //       </Route> */}
  //     </div>
  //   );
  // }
}
