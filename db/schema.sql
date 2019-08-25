-- Create the burgers_db.
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

-- Switch to or use the burgers_db.
USE burgers_db;

-- Create a burgers table with these fields:
CREATE table burgers(
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.
id int NOT NULL AUTO_INCREMENT,
burger_name varchar (50) not null,
devoured boolean default false,
Primary key (id)
);

Select * from burgers;

