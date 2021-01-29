const express = require("express");
const joinWithBasePath = require("./utils/base_path");

global.__basedir = __dirname;
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(joinWithBasePath("/home.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(joinWithBasePath("/about.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`Express http server is listening on port ${PORT}`)
);
