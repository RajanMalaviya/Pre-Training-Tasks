use db1;

create table employee(
id int primary key,
name varchar(50),
salary int not null);

insert into db1.employee (id,name,salary) values 
(101,"Adam",10000),
(102,"Bob",20000),
(103,"Carey",25000);

select * from employee;

create table emp(id int primary key,
salary int default 15000);

insert into db1.emp(id) values(1),(2);
select * from emp;

CREATE TABLE players (
    player_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    team VARCHAR(50),
    role VARCHAR(30),
    nationality VARCHAR(50)
);


INSERT INTO players (player_id, first_name, last_name, team, role, nationality)
VALUES 
(1, 'Virat', 'Kohli', 'India', 'Batsman', 'India'),
(2, 'Rohit', 'Sharma', 'India', 'Batsman', 'India'),
(3, 'Ben', 'Stokes', 'England', 'All-rounder', 'England'),
(4, 'Joe', 'Root', 'England', 'Batsman', 'England'),
(5, 'Steve', 'Smith', 'Australia', 'Batsman', 'Australia'),
(6, 'David', 'Warner', 'Australia', 'Batsman', 'Australia'),
(7, 'Jasprit', 'Bumrah', 'India', 'Bowler', 'India'),
(8, 'Kagiso', 'Rabada', 'South Africa', 'Bowler', 'South Africa'),
(9, 'Rashid', 'Khan', 'Afghanistan', 'Bowler', 'Afghanistan');

select * from players;
select player_id,first_name,last_name from players;

-- where clause

select * from players where (role="Batsman");




