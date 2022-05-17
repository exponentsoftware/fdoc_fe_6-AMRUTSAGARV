import React from "react";
import Album from "./Album";

const Albums = (props) => {
  return props.albums.map((album) => (
    <div className="latest">
      <Album
        key={album.id}
        album_title={album.artist}
        song={album.song}
        album_cover={album.album_cover}
      />
    </div>
  ));
};

export default Albums;
