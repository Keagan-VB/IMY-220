import React from 'react';

const PlaylistPreview = ({ name, description, coverImage }) => {
  return (
    <div className="playlist-preview">
      <img src={coverImage} alt={`${name} cover`} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default PlaylistPreview;
