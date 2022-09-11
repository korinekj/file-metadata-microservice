const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const indexRouter = require("./controllers/index.js");
const uploadRouter = require("./controllers/upload.js");

app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views");

app.use("/", indexRouter);
app.use("/api/fileanalyse", uploadRouter);

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
