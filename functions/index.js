const express = require("express");
const serverless = require("serverless-http");
const connection = require("./connection/connection");
const rootRoute = require("./routes/rootRoute");
const retrieveRoute = require("./routes/retrieveRoute");
const saveRoute = require("./routes/saveRoute");
const loginRoute = require("./routes/loginRoute");
const signUpRoute = require("./routes/signUpRoute");
const playlistRoute = require("./routes/playlistRoute");
const playerRoute = require("./routes/playerRoute");
const middlewares = require("./middleware/middleware");
const app = express();

// middlewares
app.use(middlewares.corsOptions);
app.use(middlewares.bodyParse);
app.use(middlewares.expressJson);

// connection
connection();

// routes
app.use("/", rootRoute);
app.use("/login", loginRoute);
app.use("/signup", signUpRoute);
app.use("/save", saveRoute);
app.use("/retrieve", retrieveRoute);
app.use("/playlist", playlistRoute);
app.use("/player", playerRoute);

module.exports.handler = serverless(app);
