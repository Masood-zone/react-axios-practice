import React, { useState } from "react";

let nextId = 0;
const AddList = () => {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  const handleClick = () => {
    setArtists([...artists, { id: nextId++, name: name }]);
  };
  return (
    <div>
      <h1>Inspiring Artists</h1>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Add
      </button>

      <ul>
        {artists.map((artist) => {
          return <li key={artist.id}>{artist.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default AddList;
