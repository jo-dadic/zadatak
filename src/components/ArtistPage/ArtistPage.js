import React from "react";

export default function ArtistPage({ dataA }) {
  return dataA.map((item) => {
    return <h1>Hi, my name is {item.title}!</h1>;
  });
}
