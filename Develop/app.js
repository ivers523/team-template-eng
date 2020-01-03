// import packages
const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// empty array of team members
const teamArray = [];

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
      if (res.start === 'Yes') {
        console.log("build team");
        findRole();
      } else {
        console.log("Goodbye");
      }
    })
}

function findRole() {
  inquirer.prompt(
    {
      type: "list",
      message: "To add a new team member, please select one of the following:",
      choices: ['School', 'Github Username', 'Office Number'],
      name: "role"
    }
    // this was done with the intent of not asking their direct role, but assigning their class based on their input
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

  function buildIntern(res) {
    let intern = new Intern(res.school, res.name, res.id, res.email);
    inquirer.prompt([
      {
        type: "input",
        message: "Enter Intern School:",
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
      }
    ])
      .then(function (res) {
        intern.school = res.school;
        intern.name = res.name;
        intern.id = res.id;
        intern.email = res.email;
        teamArray.push(intern);
        handleSize();

      })
  }
  function buildEngineer(res) {
    let engineer = new Engineer(res.github, res.name, res.id, res.email);
    inquirer.prompt([
      {
        type: "input",
        message: "Enter Engineer Github username:",
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
      }
    ])
      .then(function (res) {
        engineer.github = res.github;
        engineer.name = res.name;
        engineer.id = res.id;
        engineer.email = res.email;
        teamArray.push(engineer);
        console.log(teamArray);
        handleSize();
      })
  }
  function buildManager(res) {
    let manager = new Manager(res.officenumber, res.name, res.id, res.email);
    inquirer.prompt([
      {
        type: "input",
        message: "Enter Manager office number:",
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
      }
    ])
      .then(function (res) {
        manager.officenumber = res.officenumber;
        manager.name = res.name;
        manager.id = res.id;
        manager.email = res.email;
        teamArray.push(manager);
        console.log(teamArray);
        handleSize();
      })
  }
}

function handleSize(){
  inquirer.prompt(
    {
      type: "list",
      message: "Add another member?",
      choices: ['Yes', 'No'],
      name: "add"
    }
  ).then(function (res) {
    if (res.add === 'Yes') {
      console.log("build team");
      findRole();
    } else {
      writeToHTML();
    }
  })
}

// build roles
function writeToHTML() {
  console.log("write to hmtl");
  // fs.writeFile("./output/team.html", buildHTML())
}
startPrompt();