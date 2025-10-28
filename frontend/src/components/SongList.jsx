import React, { useState, useEffect } from "react";
import { getSongsForMood, addSongToMood, deleteSong } from "../api/moodApi";
import '../App.css';

const SongList = ({ moodId }) => {
  const [songs, setSongs] = useState([]);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  useEffect(() => {
    if (moodId) {
      getSongsForMood(moodId).then(setSongs).catch(console.error);
    }
  }, [moodId]);

  const handleAddSong = (e) => {
    e.preventDefault();
    if (!title || !artist) return alert("Enter title and artist");

    addSongToMood(moodId, { title, artist })
      .then(song => {
        setSongs([...songs, song]);
        setTitle("");
        setArtist("");
      })
      .catch(console.error);
  };

  const handleDeleteSong = (songId) => {
    deleteSong(songId)
      .then(() => setSongs(songs.filter(s => s._id !== songId)))
      .catch(console.error);
  };

  return (
    <div className="m-5 ">
      <h3>Songs</h3>
      <form onSubmit={handleAddSong} className="mb-3 row g-2 align-items-center">
        <div className="col-sm-5 pb-3">
          <input
            type="text"
            placeholder="Song title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="form-control bg-dark text-white"
          />
        </div>
        <div className="col-sm-5 pb-3">
          <input
            type="text"
            placeholder="Artist"
            value={artist}
            onChange={e => setArtist(e.target.value)}
            className="form-control bg-dark text-white"
          />
        </div>
        <div className="col-sm-2 pb-3">
          <button type="submit" className="btn btn-outline-info py-2 w-100">
            Add Song
          </button>
        </div>
      </form>

      <ul className="list-group">
        {songs.map(song => (
          <li key={song._id} className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white">
            <span>{song.title} - {song.artist}</span>
            <button 
              onClick={() => handleDeleteSong(song._id)} 
              className="btn btn-sm btn-outline-danger"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
