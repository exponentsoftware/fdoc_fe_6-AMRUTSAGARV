import React, { useState } from "react";
import "./Album.css";

const Album = ({ songName, artistName }) => {
  return (
    <div>
      <div className="outer">
        <div className="inner">
          <img className="logo" src="adele.jpg" alt="logo" />
          <h2 className="song">{songName}</h2>
          <h2 className="artist">{artistName}</h2>
        </div>
      </div>
    </div>
  );
};

export default Album;
