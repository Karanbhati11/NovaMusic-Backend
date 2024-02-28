const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema({
  playlists: {
    type: Object,
    required: true,
  },
});

const PlaylistModel = mongoose.model("playlistModel", playlistSchema);

module.exports = PlaylistModel;
