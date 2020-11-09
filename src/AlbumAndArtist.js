import React, { Component } from "react";

import Albums from "./components/Albums/Albums";
import Artists from "./components/Artists/Artists";

export default class AlbumAndArtist extends Component {
  albumData = this.props.data.map((item) => {
    return item.artistId;
  });

  artistData = this.props.dataA.map((item) => {
    return item.id;
  });

  render() {
    // let showing = <Artists />;

    // if (this.albumData === this.artistData) {
    //   return showing;
    // } else {
    //   return;
    // }
    console.log(this.albumData);

    return <p>hello</p>;
  }
}
