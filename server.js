// General Dependencies
const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");


// General MYSQL Connection Info
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "MYSQLpassword@1",
  database: "employee_database"
});


// MYSQL Connection
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected as ID " + connection.threadId);
  startCommand();
});


// Primary Inquirer Prompt
function startCommand() {
    inquirer.prompt({
        type: "list",
        message: "What would you like to do?",
        name: "choices",
        choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add a Department",
        "Add a Role",
        "Add an Employee",
        "Update an Employee Role",
        "Exit",
        ]
    }) .then(function(selectedChoice) {
        console.log("You have selected: " + selectedChoice.choices);
  
        switch (selectedChoice.choices) {
            case "View All Departments":
                viewDepartments();
                break;

            case "View All Roles":
                viewRoles();
                break;

            case "View All Employees":
                viewEmployees();
                break;

            case "Add a Department":
                addDepartment();
                break;

            case "Add a Role":
                addRole();
                break;

            case "Add an Employee":
                addEmployee();
                break;

            case "Update an Employee Role":
                updateEmployeeRole();
                break;

            case "Exit":
                exit();
                break;
        }
    });
};
  

// View All Departments
function viewDepartments() {
    let query = "SELECT * FROM department";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        startCommand();
    });
};


// View All Roles
function viewRoles() {
    let query = "SELECT * FROM role";
    connection.query(query, function(err, res) {
      if (err) throw err;
      console.table(res);
      startCommand();
    });
};


// View All Employees
function viewEmployees() {
    let query = "SELECT * FROM employee";
    connection.query(query, function(err, res) {
      if (err) throw err;
      console.table(res);
      startCommand();
    });
};


// Add a Department
function addDepartment() {
    inquirer.prompt({
        type: "input",
        message: "Please enter the name of the department: ",
        name: "departmentName"
        })
        .then(function(answer) {
        connection.query("INSERT INTO department (name) VALUES (?)", [answer.departmentName] , function(err, res) {
            if (err) throw err;
            console.table(res)
            startCommand()
        })
    })
};
  

// Add a Role
function addRole() {
    inquirer.prompt([
        {
          type: "input",
          message: "Please enter the name of this role: ",
          name: "roleName"
        },
        {
          type: "input",
          message: "Please enter the salary for this role: ",
          name: "roleSalary"
        },
        {
          type: "input",
          message: "Please enter the Department ID: ",
          name: "departmentID"
        }
        ])
        .then(function(answer) {
        connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answer.roleName, answer.roleSalary, answer.departmentID], function(err, res) {
        if (err) throw err;
        console.table(res);
        startCommand();
        });
    });
};
  

// Add an Employee
function addEmployee() {
    inquirer.prompt([
        {
          type: "input",
          message: "Please enter the employee's first name: ",
          name: "employeeFirstName"
        },
        {
          type: "input",
          message: "Please enter the employee's last name: ",
          name: "employeeLastName"
        },
        {
          type: "input",
          message: "Please enter the employee's Role ID: ",
          name: "roleID"
        },
        {
          type: "input",
          message: "Please enter the Manager ID relative to this employee: ",
          name: "managerID"
        }
        ])
        .then(function(answer) {
        connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.employeeFirstName, answer.employeeLastName, answer.roleID, answer.managerID], function(err, res) {
          if (err) throw err;
          console.table(res);
          startCommand();
        });
    });
};
  

// Update an Employee Role  
function updateEmployeeRole() {
    inquirer.prompt([
        {
          type: "input",
          message: "Select an employee to update their role: ",
          name: "employeeUpdate"
        },
        {
          type: "input",
          message: "Please enter the Role ID: ",
          name: "updateRole"
        }
        ])
        .then(function(answer) { 
        connection.query('UPDATE employee SET role_id=? WHERE first_name= ?',[answer.updateRole, answer.employeeUpdate],function(err, res) {
          if (err) throw err;
          console.table(res);
          startCommand();
        });
    });
};
  

// Exit
function exit() {
    connection.end();
    process.exit();
};
