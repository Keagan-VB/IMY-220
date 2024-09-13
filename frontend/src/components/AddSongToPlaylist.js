import React, { useState } from 'react';

const AddSongToPlaylist = () => {
  const [playlist, setPlaylist] = useState('');
  const [song, setSong] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Song Added to Playlist:", { playlist, song });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Playlist Name" 
        value={playlist} 
        onChange={(e) => setPlaylist(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Song Name" 
        value={song} 
        onChange={(e) => setSong(e.target.value)} 
      />
      <button type="submit">Add to Playlist</button>
    </form>
  );
};

export default AddSongToPlaylist;
