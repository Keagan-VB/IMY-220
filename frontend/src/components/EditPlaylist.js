import React, { useState } from 'react';

const EditPlaylist = ({ playlist, onSave }) => {
  const [name, setName] = useState(playlist.name);
  const [description, setDescription] = useState(playlist.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...playlist, name, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Playlist Name"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditPlaylist;
