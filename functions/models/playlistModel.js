const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  playlists: {
    type: Object,
    required: true,
  },
});

const PlaylistModel = mongoose.model("playlistModel", playlistSchema);

module.exports = PlaylistModel;
