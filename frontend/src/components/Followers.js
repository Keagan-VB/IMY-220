import React from 'react';
import ProfilePreview from './ProfilePreview'; 

const FollowersFollowing = ({ followers, following }) => {
  return (
    <div>
      <h4>Followers</h4>
      <ul>
        {followers.length > 0 ? (
          followers.map((follower) => (
            <li key={follower.id}>
              <ProfilePreview profile={follower} />
            </li>
          ))
        ) : (
          <p>No followers yet.</p>
        )}
      </ul>

      <h4>Following</h4>
      <ul>
        {following.length > 0 ? (
          following.map((follow) => (
            <li key={follow.id}>
              <ProfilePreview profile={follow} />
            </li>
          ))
        ) : (
          <p>Not following anyone yet.</p>
        )}
      </ul>
    </div>
  );
};

export default FollowersFollowing;
