import React from 'react';
import Song from './Song';
import PlaylistPreview from './PlaylistPreview';

const Feed = ({ songs, playlists }) => {
  return (
    <div className="feed">
      <h2>Recent Songs</h2>
      {songs.map((song, index) => (
        <Song key={index} name={song.name} artist={song.artist} link={song.link} />
      ))}
      
      <h2>Recent Playlists</h2>
      {playlists.map((playlist, index) => (
        <PlaylistPreview key={index} name={playlist.name} description={playlist.description} coverImage={playlist.coverImage} />
      ))}
    </div>
  );
};

export default Feed;
