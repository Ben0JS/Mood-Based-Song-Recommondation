import React, { useState, useEffect } from "react";
import { getMoods, deleteMood } from "../api/moodApi.js";
import '../App.css';

const MoodList = ({ onAddSong, refreshList }) => {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    getMoods().then(setMoods).catch(console.error);
  }, [refreshList]);

  const handleDelete = (id) => {
    deleteMood(id)
      .then(() => setMoods(moods.filter(m => m._id !== id)))
      .catch(console.error);
  };

  return (
    <div className="m-5">
      <h2>Moods</h2>
      <ul className="list-group">
        {moods.map(mood => (
          <li key={mood._id} className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white">
            <strong>{mood.name}</strong>
            <div>
              <button 
                onClick={() => onAddSong(mood)} 
                className="btn btn-sm btn-outline-info me-2"
              >
                Add Song
              </button>
              <button 
                onClick={() => handleDelete(mood._id)} 
                className="btn btn-sm btn-outline-danger"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoodList;
