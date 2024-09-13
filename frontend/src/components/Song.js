import React from 'react';

const Song = ({ name, artist, link }) => {
  return (
    <div className="song">
      <h3>{name}</h3>
      <p>Artist: {artist}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Listen on Streaming Service
      </a>
    </div>
  );
};

export default Song;
