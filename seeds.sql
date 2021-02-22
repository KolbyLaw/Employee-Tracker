-- I originally had shorthand value entries for all three tables, but ended up writing every entry out as I thought it was causing a syntax error.

-- Department Table Seeds
INSERT INTO department (name)
VALUE ("Sales");
INSERT INTO department (name)
VALUE ("Development");
INSERT INTO department (name)
VALUE ("Support");
INSERT INTO department (name)
VALUE ("Finance");
INSERT INTO department (name)
VALUE ("Legal");


-- Role Table Seeds
INSERT INTO role (title, salary, department_id)
VALUE ("Sales Team Rep", 45000.00, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Full Stack Dev", 80000.00, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Customer Support Rep", 30000.00, 3);
INSERT INTO role (title, salary, department_id)
VALUE ("Accountant", 50000.00, 4);
INSERT INTO role (title, salary, department_id)
VALUE ("Lawyer", 120000.00, 5);



-- Employee Table Seeds
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Jack", "McSales", 1, 10);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Jane", "McDev", 2, 20);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Alyssa", "McSupport", 3, 30);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Erin", "McFinance", 4, 40);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("John", "McLaw", 5, 50);