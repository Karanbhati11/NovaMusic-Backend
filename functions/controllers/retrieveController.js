const PlaylistModel = require("../models/playlistModel");

module.exports = async (req, res) => {
  const { email } = req.query;
  try {
    if (!email) {
      console.log("Email not provided in request");
      return res.status(400).json({ error: "Email is required" });
    }

    console.log("Querying database for email:", email);
    const savedPlaylist = await PlaylistModel.findOne({ email: email });

    if (!savedPlaylist) {
      console.log(`No playlist found for email: ${email}`);
      return res
        .status(404)
        .json({ error: "No playlist found for this email" });
    }

    console.log("Retrieved playlist from database:", savedPlaylist);
    res.status(200).json({ playlist: savedPlaylist.playlists });
  } catch (error) {
    console.error("Error retrieving playlist:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
