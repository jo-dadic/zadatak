import React from "react";

import Artist from "../Artist/Artist";

export default function Artists({ dataA }) {
  return (
    <div>
      {dataA.map((item) => {
        return <Artist key={item.id} artistName={item.title} />;
      })}
    </div>
  );
}
