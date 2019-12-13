// import packages
const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const team = [];

// prompt user for information
function startPrompt() {
  inquirer.prompt(
    {
      type: "list",
      message: "Would you like to create a team?",
      choices: ['Yes', 'No'],
      name: "start"
    }
  )
    .then(function (res) {
      if (res.start === 'Yes')
        console.log("build team")
      findRole();
    })
  // add "else" behavior here
}
// create function to ask about team (build team)
// find role
function findRole() {
  inquirer.prompt(
    {
      type: "list",
      message: "To create new employee, please input one of the following:",
      choices: ['School', 'Github Username', 'Office Number'],
      name: "role"
    }
  )
    .then(function (res) {
      switch (res.role) {
        case 'School':
          buildIntern(res);
          break;
        case 'Github Profile':
          buildEngineer(res);
          break;
        case 'Office Number':
          buildManager(res);
          break;
      }
    })
}
// 
function buildIntern(res) {
  let intern = new Intern(res.school, res.name, res.id, res.email);
  inquirer.prompt([
    {
      type: "input",
      message: "Enter School:",
      name: "school"
    },
    {
      type: "input",
      message: "Enter Intern Name:",
      name: "name"
    },
    {
      type: "input",
      message: "Enter ID:",
      name: "id"
    },
    {
      type: "input",
      message: "Enter email addres:",
      name: "email"
    },
  ])
    .then(function (res) {
      intern.school = res.school;
      intern.name = res.name;
      intern.id = res.id;
      intern.email=res.email;
      team.push(intern);
      console.log(team);
    })
}

startPrompt();

