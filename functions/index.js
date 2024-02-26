const express = require("express");
const serverless = require("serverless-http");
const connection = require("./connection/connection");
const rootRoute = require("./routes/rootRoute");
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

module.exports.handler = serverless(app);
