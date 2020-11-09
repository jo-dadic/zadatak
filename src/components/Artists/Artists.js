import React from "react";

import ArtistItem from "../ArtistItem/ArtistItem";

export default function Artists({ dataA }) {
  return (
    <div>
      {dataA.map((item) => {
        return <ArtistItem key={item.id} artistName={item.title} />;
      })}
    </div>
  );
}
