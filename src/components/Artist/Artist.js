import React from "react";
import { Link } from "react-router-dom";

export default function Artist({ artistName }) {
  return (
    <h1>
      Artist: <Link to="/artist">{artistName}</Link>
    </h1>
  );
}
