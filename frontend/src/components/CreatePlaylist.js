import React, { useState } from 'react';

const CreatePlaylist = ({ currentPlaylistCount }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New playlist created:", { name });
    // ereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>New Playlist Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder={`New Playlist #${currentPlaylistCount + 1}`} 
        />
      </div>

      <button type="submit">Create Playlist</button>
    </form>
  );
};

export default CreatePlaylist;
