// import React, { useState } from "react";
// import "./Album.css";

// const Album = ({ songName, artistName }) => {
//   return (
//     <div>
//       <div className="outer">
//         <div className="inner">
//           <img className="logo" src="adele.jpg" alt="logo" />
//           <h2 className="song">{songName}</h2>
//           <h2 className="artist">{artistName}</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Album;

import React from "react";
import "./CssForImg.css";

export default function Album(props) {
  return (
    <div className="album">
      <img src={props.album_cover} alt="Album-cover" className="album_img" />
      <div className="album_info">
        <p>{props.album_title}</p>
        <p>{props.song}</p>
        <span className="album_category">{props.artist}</span>
      </div>
    </div>
  );
}
