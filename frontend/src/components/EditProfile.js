import React, { useState } from 'react';

const EditProfile = ({ profile }) => {
  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile updated:", { name, bio });
    // aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>

      <div>
        <label>Bio:</label>
        <textarea 
          value={bio} 
          onChange={(e) => setBio(e.target.value)} 
        />
      </div>

      <button type="submit">Update Profile</button>
    </form>
  );
};

export default EditProfile;
