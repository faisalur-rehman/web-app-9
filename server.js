const express = require("express");
const dataService = require("./data-service");
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

app.get("*", (req, res) => {
  res.status(404).send("404 - Page is not Found");
});

const PORT = process.env.PORT || 8080;

dataService
  .initialize()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Express http server is listening on port ${PORT}`)
    );
  })
  .catch((err) => console.log(err));
