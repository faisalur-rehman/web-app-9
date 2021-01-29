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

app.get("/employees", (req, res) => {
  res.send("Getting all employees");
});

app.get("/managers", (req, res) => {
  res.send("Getting all managers");
});

app.get("/departments", (req, res) => {
  res.send("Getting all departments");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`Express http server is listening on port ${PORT}`)
);
