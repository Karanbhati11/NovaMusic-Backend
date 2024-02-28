const ytdl = require("ytdl-core");

module.exports = async (req, res) => {
  try {
    const url = req.query.url;
    if (req.query.url.includes("youtube")) {
      const videoID = await ytdl.getURLVideoID(url);
      const metaInfo = await ytdl.getInfo(url);
      let audioFormats = ytdl.filterFormats(metaInfo.formats, "audioonly");
      const audiooo = audioFormats[0].url;
      const uuu = {
        video_url: url,
        id: videoID,
        url: audiooo,
        meta: {
          title: metaInfo.videoDetails.title,
          thumbnail: metaInfo.videoDetails.thumbnails.at(-1).url,
        },
      };
      return res.send(uuu);
    }
  } catch (err) {
    console.log(err);
  }
};
