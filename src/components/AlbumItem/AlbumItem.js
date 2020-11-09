import React from "react";

export default function AlbumItem({ album, img, price, date }) {
  return (
    <div>
      <h3>Album: {album}</h3>
      <img alt="Album Cover" src={img} />
      <h5>Price: {price}</h5>
      <h6>Release date: {date}</h6>
    </div>
  );
}
