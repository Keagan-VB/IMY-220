import React from 'react';

const ProfileComponent = ({ profile }) => {
  return (
    <div>
      <img src={profile.avatar} alt="User avatar" style={{ width: '100px', height: '100px' }} />
      <h3>{profile.name}</h3>
      <p>{profile.bio}</p>
    </div>
  );
};

export default ProfileComponent;
