import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api`;

export const getMoods = async () => {
  const res = await axios.get(`${BASE_URL}/moods`);
  return res.data;
};

export const addMood = async (mood) => {
  const res = await axios.post(`${BASE_URL}/moods`, mood);
  return res.data;
};

export const updateMood = async (id, mood) => {
  const res = await axios.put(`${BASE_URL}/moods/${id}`, mood);
  return res.data;
};

export const deleteMood = async (id) => {
  const res = await axios.delete(`${BASE_URL}/moods/${id}`);
  return res.data;
};

export const getSongsForMood = async (moodId) => {
  const res = await axios.get(`${BASE_URL}/moods/${moodId}/songs`);
  return res.data;
};

export const addSongToMood = async (moodId, song) => {
  const res = await axios.post(`${BASE_URL}/moods/${moodId}/songs`, song);
  return res.data;
};

export const deleteSong = async (songId) => {
  const res = await axios.delete(`${BASE_URL}/songs/${songId}`);
  return res.data;
};

export const getRecommendations = async (moodId) => {
  const res = await axios.get(`${BASE_URL}/recommendations/${moodId}`);
  return res.data;
};
