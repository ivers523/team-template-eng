function buildEngineer(res){
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
    .then(function (res){
    engineer.github = res.github;
    engineer.name = res.name;
    engineer.id = res.id;
    engineer.email = res.email;
    teamArray.push(engineer);
    console.log(teamArray);
    if (teamArray.length < 3){
      findRole();
    } else {
      writeToHTML();
    }
  
 })
}
function buildManager(res){
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
    .then(function (res){
    manager.officenumber = res.officenumber;
    manager.name = res.name;
    manager.id = res.id;
    manager.email = res.email;
    teamArray.push(manager);
    console.log(teamArray);
    if (teamArray.length < 3){
      findRole();
    } else {
      writeToHTML();
    }
  
 })
}



