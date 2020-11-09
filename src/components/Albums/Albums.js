import React from "react";

import AlbumItem from "../AlbumItem/AlbumItem";
// import Artists from "../Artists/Artists";

export default function Albums({ data }) {
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <AlbumItem
              img={item.imageUrl}
              album={item.title}
              price={item.price}
              date={item.releaseDate}
              artistId={item.artistId}
            />
          </div>
        );
      })}
      {/* {dataA.map((item) => {
        return <Artists key={item.id} artistName={item.title} />;
      })} */}
    </div>
  );
}
