import React from 'react';
import { useParams } from 'react-router-dom';
import ProfileComponent from '../components/Profile';
import EditProfile from '../components/EditProfile';
import ListPlaylists from '../components/ListPlaylists';
import FollowersFollowing from '../components/Followers';
import CreatePlaylist from '../components/CreatePlaylist';

function Profile () {
  const { id } = useParams(); //sheeeeeeeeeeeesh

  // Dummy profile data
  const dummyProfile = {
    name: `User #${id}`,
    bio: "This is the user's bio. They love music and creating playlists.",
    avatar: "https://dummyurl.com/avatar.jpg"
  };

  // Dummy playlist data
  const dummyPlaylists = [
    { name: "Chill Vibes", category: "Chill", id: 1 },
    { name: "Workout Energy", category: "Workout", id: 2 },
    { name: "Late Night Tunes", category: "Relax", id: 3 }
  ];

  // Dummy follower/following data
  const dummyFollowers = [
    { id: 1, name: "Follower1" },
    { id: 2, name: "Follower2" }
  ];

  const dummyFollowing = [
    { id: 1, name: "Following1" },
    { id: 2, name: "Following2" }
  ];

  return (
    <div>
      <h2>Profile Page</h2>
      <p>This is the profile page for user {id}.</p>

      {/* Profile component to display user profile */}
      <ProfileComponent profile={dummyProfile} />

      <h3>Edit Profile</h3>
      {/* Edit Profile component */}
      <EditProfile profile={dummyProfile} />

      <h3>Playlists</h3>
      {/* List Playlists component */}
      <ListPlaylists playlists={dummyPlaylists} />

      <h3>Followers & Following</h3>
      {/* Followers/Following component */}
      <FollowersFollowing followers={dummyFollowers} following={dummyFollowing} />

      <h3>Create a New Playlist</h3>
      {/* Create Playlist component */}
      <CreatePlaylist currentPlaylistCount={dummyPlaylists.length} />
    </div>
  );
}

export default Profile;
