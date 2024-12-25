use db1;

CREATE TABLE student_details (
    student_id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    dob DATE,
    email VARCHAR(100) UNIQUE,
    course VARCHAR(50) NOT NULL,
    graduation_year INT,
    CHECK (graduation_year >= 2024) -- The graduation year must be 2024 or later.
);


INSERT INTO db1.student_details (student_id, first_name, last_name, dob, email, course, graduation_year)
VALUES
(1, 'John', 'Doe', '2000-05-15', 'john.doe@example.com', 'Computer Science', 2024),
(2, 'Jane', 'Smith', '1999-07-22', 'jane.smith@example.com', 'Mechanical Engineering', 2025),
(3, 'Emily', 'Johnson', '2001-03-10', 'emily.johnson@example.com', 'Electrical Engineering', 2024),
(4, 'Michael', 'Williams', '2000-11-05', 'michael.williams@example.com', 'Civil Engineering', 2026),
(5, 'Sarah', 'Brown', '1998-12-30', 'sarah.brown@example.com', 'Mathematics', 2024);


select * from db1.student_details; 
select first_name,last_name,graduation_year 
from db1.student_details 
where graduation_year>=2025;


CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    quantity INT CHECK (quantity > 0),
    price DECIMAL(10, 2) CHECK (price > 0),
    order_date DATE,
    status VARCHAR(20) CHECK (status IN ('Pending', 'Shipped', 'Delivered', 'Cancelled'))
);


INSERT INTO db1.orders (order_id, customer_name, product_name, quantity, price, order_date, status)
VALUES
(1, 'John Doe', 'Laptop', 1, 1200.50, '2024-12-01', 'Shipped'),
(2, 'Jane Smith', 'Smartphone', 2, 700.00, '2024-12-02', 'Pending'),
(3, 'Alice Johnson', 'Headphones', 1, 150.00, '2024-12-03', 'Delivered'),
(4, 'Bob Williams', 'Tablet', 1, 400.00, '2024-12-04', 'Cancelled'),
(5, 'Emily Brown', 'Smartwatch', 1, 250.00, '2024-12-05', 'Shipped');

select * from db1.orders;

SELECT * FROM db1.orders WHERE status = 'Shipped';
SELECT * FROM db1.orders WHERE status = 'Delivered';

SELECT * FROM db1.orders WHERE status = 'Pending' OR status = 'Cancelled';
SELECT * FROM db1.orders WHERE order_date BETWEEN '2024-12-01' AND '2024-12-04';

SELECT * FROM db1.orders WHERE status IN ('Shipped', 'Delivered');


select * from db1.orders limit 3; -- shows only 3 records of the table

-- order by clause :-
select * from db1.orders order by quantity asc; 

select * from db1.orders order by quantity desc limit 3; -- top 3 quantities





