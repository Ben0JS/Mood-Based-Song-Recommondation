const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSchema = new Schema({
  mood: { type: Schema.Types.ObjectId, ref: 'Mood', required: true },
  title: { type: String, required: true },
  artist: { type: String },
});

module.exports = mongoose.model('Song', SongSchema);
