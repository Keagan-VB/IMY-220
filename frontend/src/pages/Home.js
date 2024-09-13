import React from 'react';
import Feed from '../components/Feed';
import SearchInput from '../components/SearchInput';
import Song from '../components/Song';
import AddSong from '../components/AddSong';
import AddSongToPlaylist from '../components/AddSongToPlaylist';
import PlaylistPreview from '../components/PlaylistPreview';
import ProfilePreview from '../components/ProfilePreview';

const Home = () => {
  // Dummy data for testing
  const dummySong = {
    name: "Dummy Song",
    artist: "Dummy Artist",
    link: "https://dummyurl.com/song",
    dateAdded: "2024-09-13"
  };

  const dummyPlaylist = {
    name: "Chill Vibes",
    category: "Chill",
    description: "A playlist for relaxing",
    coverImage: "https://dummyurl.com/image",
    hashtags: ["#chill", "#relax"],
    songs: [dummySong]
  };

  const dummyProfile = {
    username: "dummyuser",
    bio: "Just a dummy profile",
    followers: 10,
    following: 5
  };

  return (
    <div>
      <h2>Home Page</h2>
      
      <SearchInput />
      
      <h3>Add Song to Website</h3>
      <AddSong />
      
      <h3>Add Song to Playlist</h3>
      <AddSongToPlaylist />
      
      <h3>Song Component</h3>
      <Song song={dummySong} />
      
      <h3>Playlist Preview</h3>
      <PlaylistPreview playlist={dummyPlaylist} />
      
      <h3>Profile Preview</h3>
      <ProfilePreview profile={dummyProfile} />
      
      <h3>Feed</h3>
      <Feed songs={[dummySong]} playlists={[dummyPlaylist]} />
    </div>
  );
};

export default Home;
