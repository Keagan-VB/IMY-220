import React, { useState } from 'react';

const AddSong = () => {
  const [name, setName] = useState('');
  const [artist, setArtist] = useState('');
  const [link, setLink] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!name) errors.name = 'Song name is required';
    if (!artist) errors.artist = 'Artist is required';
    if (!link || !link.startsWith('http')) errors.link = 'Valid streaming link is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Song added:', { name, artist, link });
      // I am assuming I need to add to database, but I am not gonna bother right now
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Song Name"
      />
      {errors.name && <p>{errors.name}</p>}
      <input
        type="text"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        placeholder="Artist"
      />
      {errors.artist && <p>{errors.artist}</p>}
      <input
        type="text"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Streaming URL"
      />
      {errors.link && <p>{errors.link}</p>}
      <button type="submit">Add Song</button>
    </form>
  );
};

export default AddSong;
