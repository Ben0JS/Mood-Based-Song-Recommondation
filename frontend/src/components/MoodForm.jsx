import React, { useState, useEffect } from "react";
import { addMood, updateMood } from "../api/moodApi";
import '../App.css';

const MoodForm = ({ selectedMood, onSuccess }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    if (selectedMood) {
      setName(selectedMood.name);
    } else {
      setName("");
    }
  }, [selectedMood]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return alert("Mood name is required");

    if (selectedMood) {
      updateMood(selectedMood._id, { name })
        .then(() => {
          onSuccess();
        })
        .catch(console.error);
    } else {
      addMood({ name })
        .then(() => {
          onSuccess();
        })
        .catch(console.error);
    }
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="m-5">
      <h2>{selectedMood ? "Edit Mood" : "Add Mood"}</h2>
      <div className="mb-3 ">
        <input
          type="text"
          placeholder="Mood name"
          value={name}
          onChange={e => setName(e.target.value)}
          className=" form-control bg-dark text-white"
        />
      </div>
      <button type="submit" className=" btn btnclr fw-bold px-5">
        {selectedMood ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default MoodForm;
