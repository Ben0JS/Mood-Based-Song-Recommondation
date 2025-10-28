import React, { useState, useEffect } from "react";
import { getMoods, getRecommendations } from "../api/moodApi";

const Recommendations = ({ refreshKey }) => {
  const [moods, setMoods] = useState([]);
  const [selectedMoodId, setSelectedMoodId] = useState("");
  const [recommendedSongs, setRecommendedSongs] = useState([]);

  useEffect(() => {
    getMoods().then(setMoods).catch(console.error);
  }, [refreshKey]);

  useEffect(() => {
    if (selectedMoodId) {
      getRecommendations(selectedMoodId)
        .then(setRecommendedSongs)
        .catch(console.error);
    } else {
      setRecommendedSongs([]); // Clear songs when no mood selected
    }
  }, [selectedMoodId]);

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Song Recommendations</h2>

      <div className="row justify-content-center mb-4">
        <div className="col-12 col-sm-8 col-md-6">
          <select
            value={selectedMoodId}
            onChange={e => setSelectedMoodId(e.target.value)}
            className="form-select bg-dark text-white"
            aria-label="Select Mood for Recommendations"
          >
            <option value="">Select a mood</option>
            {moods.map(mood => (
              <option key={mood._id} value={mood._id}>
                {mood.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {recommendedSongs.length > 0 ? (
        <ul className="list-group ">
          {recommendedSongs.map(song => (
            <li key={song._id} className="list-group-item bg-dark text-white">
              {song.title} - {song.artist}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-muted">Select a mood to see recommendations.</p>
      )}
    </div>
  );
};

export default Recommendations;
