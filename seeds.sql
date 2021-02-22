-- Department Table Seeds
INSERT INTO department (name)
VALUES ("Sales"), ("Development"), ("Support"), ("Finance"), ("Legal");


-- Role Table Seeds
INSERT INTO role (title, salary, department_id)
VALUE ("Sales Team Rep", 45000.00, 1), ("Full Stack Dev", 80000.00, 2), ("Customer Support Rep", 30000.00, 3), ("Accountant", 50000.00, 4), ("Lawyer", 120000.00, 5)


-- Employee Table Seeds
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Jack", "McSales", 1, 10), ("Jane", "McDev", 2, 20), ("Alyssa", "McSupport", 3, 30), ("Erin", "McFinance", 4, 40), ("John", "McLaw", 5, 50);