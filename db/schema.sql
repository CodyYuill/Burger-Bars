### Schema

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE waiting
(
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(120)
);

CREATE TABLE devoured
(
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(120)
);
