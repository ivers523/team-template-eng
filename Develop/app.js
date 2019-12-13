// import packages
const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

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
      buildTeam();
    })
  // add "else" behavior here
}
// create function to ask about team (build team)
// get core info as data
function buildTeam() {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter employee e-mail address",
      name: "email"
    },
    {
      type: "input",
      message: "Enter employee ID number",
      name: "id"
    },
    {
      type: "list",
      message: "Finally, provide one of the following:",
      choices: ['School', 'Github', 'Office Number'],
      name: "role"
    }
  ])
  .then (function(res){
    if (res.role==='School'){
      console.log("Intern");
    } else if (res.role==='Github'){
      console.log("Engineer");
    } else {
      console.log("Manager")
    }
  }
  )
}  
startPrompt();