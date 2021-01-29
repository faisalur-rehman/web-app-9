const fs = require("fs");

let employees = [];
let departments = [];

function initialize() {
  return new Promise((res, rej) => {
    fs.readFile("./data/employees.json", "utf8", (err, data) => {
      if (err) rej("Unable to read file");
      employees = JSON.parse(data);

      fs.readFile("./data/departments.json", "utf8", (_err, _data) => {
        if (_err) rej("Unable to read file");
        departments = JSON.parse(_data);

        res("Successfully read data from json files ..");
      });
    });
  });
}

function getAllEmployees() {
  return new Promise((res, rej) => {
    if (employees.length === 0) rej("No results returned");
    res(employees);
  });
}

function getManagers() {
  return new Promise((res, rej) => {
    const managers = employees.filter((emp) => emp.isManager === true);

    if (managers.length === 0) rej("No results returned");
    res(managers);
  });
}

function getDepartments() {
  return new Promise((res, rej) => {
    if (departments.length === 0) rej("No results returned");
    res(departments);
  });
}

module.exports = {
  initialize,
  getAllEmployees,
  getDepartments,
  getManagers,
};
