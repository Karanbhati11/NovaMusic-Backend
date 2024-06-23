const PlaylistModel = require("../models/playlistModel");

module.exports = async (req, res) => {
  console.log(req.body.playlist);
  try {
    const { playlist, email } = req.body;

    // Find the existing playlist by email
    let existingPlaylist = await PlaylistModel.findOne({ email: email });

    if (existingPlaylist) {
      // Update the existing playlist
      existingPlaylist.playlists = playlist;
      await existingPlaylist.save();
      res.status(200).json({
        message: "Playlist updated successfully",
        playlist: existingPlaylist,
      });
    } else {
      // Create a new playlist
      const newPlaylist = new PlaylistModel({
        email: email,
        playlists: playlist,
      });
      await newPlaylist.save();
      res.status(201).json({
        message: "Playlist saved successfully",
        playlist: newPlaylist,
      });
    }
  } catch (error) {
    console.error("Error saving playlist:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
