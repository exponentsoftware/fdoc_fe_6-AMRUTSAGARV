// // import "./App.css";
// import { useState } from "react";
// import Album from "./components/Album";

// function App() {
//   const [song, setSong] = useState("");
//   const [artist, setArtist] = useState("");

//   const songName = () => {
//     setSong("Hello");
//   };
//   const artistName = () => {
//     setArtist("Adele");
//   };

//   return (
//     <div className="App">
//       <Album songName={song} artistName={artist} />
//       <button onClick={() => songName()}>Click Here to know which Song</button>
//       <button onClick={() => artistName()}>
//         Click Here to know which Artist
//       </button>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import Albums from "./components/Albums";

export default class App extends Component {
  state = {
    albums: [
      {
        id: 0,
        artist: "Maroon 5",
        album_title: "Sugar",
        album_cover:
          "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/09067749761431.58be2457a34ec.png",
        song: "Sugar",
      },
      {
        id: 1,
        artist: "weeknd",
        album_title: "Hills",
        album_cover:
          "https://i1.sndcdn.com/artworks-000049294734-uot52i-t500x500.jpg",
        song: "Hills",
      },
      {
        id: 2,
        artist: "Avicci",
        album_title: "Nights",
        album_cover:
          "https://i1.sndcdn.com/artworks-pkiVCahHRezAGlQC-fveqzw-t500x500.jpg",
        song: "Nights",
      },
    ],
  };

  render() {
    return (
      <div className="container">
        <div className="albums">
          <h1 className="alb-head">Album Headings</h1>
          <Albums albums={this.state.albums} artist={this.state.artist} />
        </div>
      </div>
    );
  }
}
