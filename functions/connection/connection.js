const mongoose = require("mongoose");

module.exports = () => {
  const ConnectionString =
    "mongodb+srv://deadlygmerx:FZbyMob9szjf8Zxz@cluster0.jz4ugew.mongodb.net/";

  try {
    mongoose.connect(ConnectionString).then((response) => {
      console.log("Database Connected");
    });
  } catch (err) {
    console.log("something went wrong" + err);
  }
};
