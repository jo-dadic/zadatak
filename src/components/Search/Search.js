import React, { Component } from "react";

import { apiUrl, apiUrlArtist } from "../../common";

export default class Search extends Component {
  state = {
    query: "",
    placeholder: "Search here for the album.",
  };

  search = (e) => {
    e.preventDefault();

    Promise.all([
      fetch(apiUrl + this.state.query).then((response) => response.json()),
      fetch(apiUrlArtist).then((response) => response.json()),
    ]).then(([data, dataA]) => {
      this.props.onResult(data, dataA);
      this.setState({ query: "" });
    });
  };

  queryChangeHandler = (e) => {
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.search}>
        <input
          required
          type="text"
          value={this.state.query}
          placeholder={this.state.placeholder}
          onChange={this.queryChangeHandler}
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}
