const express = require('express');
const router = express.Router();
const Mood = require('../models/mood');
const Song = require('../models/song');

// Create Mood
router.post('/moods', async (req, res) => {
  try {
    const mood = new Mood({ name: req.body.name });
    await mood.save();
    res.json(mood);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Moods
router.get('/moods', async (req, res) => {
  try {
    const moods = await Mood.find();
    res.json(moods);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update Mood
router.put('/moods/:id', async (req, res) => {
  try {
    const mood = await Mood.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });
    res.json(mood);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete Mood
router.delete('/moods/:id', async (req, res) => {
  try {
    await Mood.findByIdAndDelete(req.params.id);
    await Song.deleteMany({ mood: req.params.id }); // Remove related songs
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Add Song to Mood
router.post('/moods/:moodId/songs', async (req, res) => {
  try {
    const song = new Song({ mood: req.params.moodId, title: req.body.title, artist: req.body.artist });
    await song.save();
    res.json(song);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get Songs for Mood
router.get('/moods/:moodId/songs', async (req, res) => {
  try {
    const songs = await Song.find({ mood: req.params.moodId });
    res.json(songs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete Song
router.delete('/songs/:id', async (req, res) => {
  try {
    await Song.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.get('/recommendations/:moodId', async (req, res) => {
  try {
    const songs = await Song.find({ mood: req.params.moodId });
    res.json(songs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
