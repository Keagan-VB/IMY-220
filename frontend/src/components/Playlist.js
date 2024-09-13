import React from 'react';

const Playlist = ({ playlist }) => {
  return (
    <div>
      <h2>{playlist.name}</h2>
      <p>{playlist.description}</p>
      {playlist.songs.map(song => (
        <div key={song.id}>{song.name}</div>
      ))}
    </div>
  );
};

export default Playlist;
