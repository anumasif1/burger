-- Create the burgers_db.
DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;

-- Switch to or use the burgers_db.
USE burger_db;

-- Create a burgers table with these fields:
CREATE table burgers(
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.
id int NOT NULL AUTO_INCREMENT,
burger_name varchar (50) not null,
devoured boolean,
Primary key (id)
);

