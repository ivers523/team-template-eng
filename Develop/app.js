// import packages
const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// prompt user for information
function startPrompt(){
  inquirer.prompt(
    {
        type: "list",
        message: "Would you like to create a team?",
        choices: ['Yes', 'No'],
        name: "start"
      }
  )
  .then(function(res){
    if(res.start === 'Yes')
    console.log("build team")
    buildTeam();
  })
}

// create function to ask about team (build team)







startPrompt();
