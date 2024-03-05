const PlaylistModel = require("../models/playlistModel");

module.exports = async (req, res) => {
  const { email } = req.body;
  try {
    // const { playlist } = req.body; // Assuming the playlist data is sent as an array of objects
    // Save playlistData to MongoDB using Mongoose model
    const savedPlaylist = await PlaylistModel.findOne({ email: email });
    // res.status(201).json({
    //   message: "Playlist saved successfully",
    //   playlist: savedPlaylist,
    // });
    res.status(200).json({ playlist: savedPlaylist });
  } catch (error) {
    console.error("Error saving playlist:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
