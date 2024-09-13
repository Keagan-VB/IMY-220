import React from 'react';
import PlaylistPreview from './PlaylistPreview'; // Assuming you have this component

const ListPlaylists = ({ playlists }) => {
  return (
    <div>
      {playlists.length > 0 ? (
        <ul>
          {playlists.map((playlist) => (
            <li key={playlist.id}>
              <PlaylistPreview playlist={playlist} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No playlists yet.</p>
      )}
    </div>
  );
};

export default ListPlaylists;
