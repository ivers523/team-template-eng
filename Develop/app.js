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
        case 'Github Username':
          buildEngineer(res);
          break;
        case 'Office Number':
          buildManager(res);
          break;
      }
    })
}
// build roles
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
      intern.email = res.email;
      team.push(intern);
      console.log(team);
    })
}
function buildEngineer(res) {
  let engineer = new Engineer(res.github, res.name, res.id, res.email);
  inquirer.prompt([
    {
      type: "input",
      message: "Enter Github username:",
      name: "github"
    },
    {
      type: "input",
      message: "Enter Engineer Name:",
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
      engineer.github = res.github;
      engineer.name = res.name;
      engineer.id = res.id;
      engineer.email = res.email;
      team.push(engineer);
      console.log(team);
    })
}
function buildManager(res) {
  let manager = new Manager(res.officenumber, res.name, res.id, res.email);
  inquirer.prompt([
    {
      type: "input",
      message: "Enter office number:",
      name: "officenumber"
    },
    {
      type: "input",
      message: "Enter Manager Name:",
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
      manager.officenumber = res.officenumber;
      manager.name = res.name;
      manager.id = res.id;
      manager.email = res.email;
      team.push(manager);
      console.log(team);
    })
}

startPrompt();

