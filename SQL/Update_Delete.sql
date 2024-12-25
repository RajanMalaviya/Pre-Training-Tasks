create database db2;
use db2;

CREATE TABLE student (
    id INT PRIMARY KEY,               
    name VARCHAR(100) NOT NULL,       
    age INT CHECK (age >= 18),         
    marks DECIMAL(5, 2),         
    grades CHAR(1) CHECK (grades IN ('A', 'B', 'C', 'D', 'F','O')),  
    dob DATE                         
);

INSERT INTO db2.student student (id, name, age, marks, grades, dob)
VALUES
(1, 'John Doe', 20, 85.75, 'A', '2004-01-15'),
(2, 'Jane Smith', 22, 78.50, 'B', '2002-08-10'),
(3, 'Emily Johnson', 21, 92.30, 'A', '2003-12-05'),
(4, 'Michael Brown', 23, 65.40, 'C', '2001-06-20'),
(5, 'Sarah Williams', 19, 88.60, 'B', '2005-03-30'),
(6, 'David Clark', 24, 77.40, 'B', '2000-11-18'),
(7, 'Olivia Harris', 20, 90.50, 'A', '2004-05-25'),
(8, 'Daniel White', 22, 80.20, 'B', '2002-07-10'),
(9, 'Sophia Lewis', 21, 95.80, 'A', '2003-02-14'),
(10, 'Liam Martin', 19, 70.60, 'C', '2005-09-07');

select * from db2.student s;

update student set name ='ABC' where name='John Doe';

update student set marks = marks+5 where(marks<=95);

delete from student where marks<71;


CREATE TABLE dept (
    dept_id INT PRIMARY KEY,        -- Department ID (Primary Key)
    dept_name VARCHAR(100) NOT NULL  -- Department Name
);

CREATE TABLE teacher (
    teacher_id INT PRIMARY KEY,          -- Teacher ID (Primary Key)
    teacher_name VARCHAR(100) NOT NULL,   -- Teacher Name
    age INT,                             -- Teacher Age
    salary DECIMAL(10, 2),                -- Teacher Salary
    dept_id INT,                          -- Foreign Key reference to dept table
    FOREIGN KEY (dept_id) REFERENCES dept(dept_id)  -- Foreign Key constraint
);

INSERT INTO db2.student dept (dept_id, dept_name)
VALUES
(1, 'Computer Science'),
(2, 'Mathematics'),
(3, 'Physics'),
(4, 'Chemistry'),
(5, 'Biology');

INSERT INTO db2.teacher (teacher_id, teacher_name, age, salary, dept_id)
VALUES
(1, 'Dr. Alice Williams', 40, 60000.00, 1),  -- Computer Science
(2, 'Dr. Bob Smith', 45, 65000.00, 2),      -- Mathematics
(3, 'Dr. Charlie Brown', 38, 55000.00, 3),   -- Physics
(4, 'Dr. David Clark', 50, 70000.00, 4),     -- Chemistry
(5, 'Dr. Emily Johnson', 42, 62000.00, 5),   -- Biology
(6, 'Dr. Frank Miller', 37, 58000.00, 1),    -- Computer Science
(7, 'Dr. Grace Lee', 44, 63000.00, 2);       -- Mathematics

-- View data from dept table
SELECT * FROM db2.dept;

-- View data from teacher table
SELECT * FROM db2.teacher;

ALTER TABLE student
ADD email VARCHAR(100);

ALTER TABLE student
RENAME COLUMN name TO student_name;

select * from db2.student s ;

ALTER TABLE student
DROP COLUMN email;

ALTER TABLE student
MODIFY age SMALLINT;

ALTER TABLE student
ADD email VARCHAR(100);

ALTER TABLE student
ADD CONSTRAINT unique_email UNIQUE (email);







