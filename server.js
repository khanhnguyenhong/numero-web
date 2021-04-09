const express = require("express");
const morgan = require("morgan");
const chalk = require("chalk");
const debug = require("debug")("app");
const path = require("path");

const apiRouter = require('./api/routes/api.route');

const app = express();

app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "/dist/numero-web")));

app.use("/api", apiRouter);

//web application
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "/dist/numero-web/index.html"));
});

app.listen(process.env.PORT || 8080, function () {
  debug("Listening on port " + chalk.green(process.env.PORT || 8080));
});
