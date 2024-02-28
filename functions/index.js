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

// Middlewares
app.use(middlewares.corsOptions);
app.use(middlewares.bodyParse);
app.use(middlewares.expressJson);

// Connection
connection();

// Routes
app.use("/", rootRoute); // No authentication needed
app.use("/login", loginRoute); // No authentication needed for login
app.use("/signup", signUpRoute); // No authentication needed for signup
app.use("/player", playerRoute);
app.use(middlewares.authenticateJWT); // Apply authentication to subsequent routes
app.use("/save", saveRoute);
app.use("/retrieve", retrieveRoute);
app.use("/playlist", playlistRoute);

module.exports.handler = serverless(app);
