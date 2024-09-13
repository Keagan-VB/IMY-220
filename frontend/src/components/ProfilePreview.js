import React from 'react';

const ProfilePreview = ({ username, profileImage }) => {
  return (
    <div className="profile-preview">
      <img src={profileImage} alt={`${username} profile`} />
      <h4>{username}</h4>
    </div>
  );
};

export default ProfilePreview;
