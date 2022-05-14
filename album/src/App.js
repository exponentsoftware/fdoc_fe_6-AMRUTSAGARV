// import "./App.css";
import { useState } from "react";
import Album from "./components/Album";

function App() {
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");

  const songName = () => {
    setSong("Hello");
  };
  const artistName = () => {
    setArtist("Adele");
  };

  return (
    <div className="App">
      <Album songName={song} artistName={artist} />
      <button onClick={() => songName()}>Click Here to know which Song</button>
      <button onClick={() => artistName()}>
        Click Here to know which Artist
      </button>
    </div>
  );
}

export default App;
