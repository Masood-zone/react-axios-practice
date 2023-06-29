import React, { useState } from "react";
let initialArtists = [
  { id: 0, name: "Lara Croft" },
  { id: 1, name: "Jason Statam" },
  { id: 2, name: "John Wick" },
  { id: 3, name: "John Wick" },
  { id: 4, name: "John Wick" },
];
const RemoveList = () => {
  const [artists, setArtists] = useState(initialArtists);

  return (
    <div>
      <h1>Inspiring Sculptors</h1>
      <ul>
        {artists.map((artist) => {
          return (
            <li key={artist.id}>
              {artist.name}
              <button
                onClick={() => {
                  setArtists(artists.filter((a) => a.id !== artist.id));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RemoveList;
