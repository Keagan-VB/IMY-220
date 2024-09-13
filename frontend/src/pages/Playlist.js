import React from 'react';
import { useParams } from 'react-router-dom';
import PlaylistComponent from '../components/Playlist';
import EditPlaylist from '../components/EditPlaylist';
import CommentList from '../components/CommentView';
import AddComment from '../components/AddComment';

function Playlist () {
  const { id } = useParams(); //sheeeeeeeeeeeesh

  const dummyPlaylist = {
    name: `Playlist #${id}`,
    category: "Chill",
    description: "This is a chill playlist for relaxation.",
    coverImage: "https://dummyurl.com/playlist-cover.jpg",
    hashtags: ["#chill", "#relax"],
    songs: [
      { name: "Song 1", artist: "Artist 1", link: "https://dummyurl.com/song1", dateAdded: "2024-09-13" },
      { name: "Song 2", artist: "Artist 2", link: "https://dummyurl.com/song2", dateAdded: "2024-09-14" }
    ]
  };

  const dummyComments = [
    { id: 1, author: "User1", text: "Great playlist!", date: "2024-09-10" },
    { id: 2, author: "User2", text: "This is awesome for studying!", date: "2024-09-12" }
  ];

  return (
    <div>
      <h2>Playlist Page</h2>
      <p>This is the playlist page for playlist ID: {id}.</p>

      <PlaylistComponent playlist={dummyPlaylist} />

      <h3>Edit Playlist</h3>
      <EditPlaylist playlist={dummyPlaylist} />

      <h3>Comments</h3>
      <CommentList comments={dummyComments} />

      <h3>Add a Comment</h3>
      <AddComment />
    </div>
  );
}

export default Playlist;
