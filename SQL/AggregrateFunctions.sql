use db1;

select * from db1.orders o ;

select max(price) as max_price from db1.orders o ; 
select min(price) as min_price from db1.orders o ; 
select avg(price) as avg_price from db1.orders o ; 
select sum(quantity) as total_quantity from db1.orders o ;
select count(order_id) as cnt from db1.orders o ;

drop table student;

select  status,count(order_id) from db1.orders o group by status;







