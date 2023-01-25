DROP DATABASE IF EXISTS `hw_lesson2_part2`;

CREATE DATABASE IF NOT EXISTS `hw_lesson2_part2`;

USE `hw_lesson2_part2`; 

CREATE TABLE class (
	id INT(10)NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    class_name VARCHAR(35) NOT NULL, 
    class_begins DATE NOT NULL, 
    class_ends DATE NOT NULL 
); 

CREATE TABLE student (
	id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(35) NOT NULL, 
    email VARCHAR(35) UNIQUE NOT NULL, 
    phone VARCHAR(20) NULL,
    class_id INT(10) NOT NULL, 
    CONSTRAINT fk_class_id FOREIGN KEY (class_id) REFERENCES class(id)
);

CREATE TABLE status (
	id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY, 
	name VARCHAR(35) NOT NULL 
); 

CREATE INDEX name ON student(name); 

ALTER TABLE class ADD status INT NOT NULL; 
ALTER TABLE class ADD FOREIGN KEY(status) REFERENCES status(id); 

-- INSERT -- 
-- status table
INSERT INTO status (id, name) VALUES (1, 'not started'); 
INSERT INTO status (id, name) VALUES (2, 'on going'); 
INSERT INTO status (id, name) VALUES (3, 'finished'); 

-- class table 
INSERT INTO class (id, class_name, class_begins, class_ends, status) VALUES (1,'HTML and CSS', '01-10-22', '30-10-22', 3); 
INSERT INTO class (id, class_name, class_begins, class_ends, status) VALUES (2,'Javascript', '01-11-22', '30-11-22', 3); 
INSERT INTO class (id, class_name, class_begins, class_ends, status) VALUES (3,'Database', '01-12-22', '30-01-23', 2); 
INSERT INTO class (id, class_name, class_begins, class_ends, status) VALUES (4,'Node.js', '01-02-23', '30-03-23', 1); 
INSERT INTO class (id, class_name, class_begins, class_ends, status) VALUES (5,'React', '01-04-23','30-06-23', 1); 

-- student table -- 
INSERT INTO student (id, name, email, phone, class_id) VALUES (1,'John', 'john@test.com', '12-34-56-78', 3);
INSERT INTO student (id, name, email, phone, class_id) VALUES (2,'Jane', 'jane@test.com', '42-20-23-00', 1);
INSERT INTO student (id, name, email, phone, class_id) VALUES (3,'Adam', 'adam@test.com', '59-63-85-14', 5);
INSERT INTO student (id, name, email, phone, class_id) VALUES (4,'Marie', 'marie@test.com', '03-20-20-63', 2);
INSERT INTO student (id, name, email, phone, class_id) VALUES (5,'Mads', 'mads@test.com', '98-85-63-66', 3);
INSERT INTO student (id, name, email, phone, class_id) VALUES (6,'Sofie', 'sofie@test.com', NULL, 3);
INSERT INTO student (id, name, email, phone, class_id) VALUES (7,'Alex', 'alex@test.com', '55-55-44-44', 4);
INSERT INTO student (id, name, email, phone, class_id) VALUES (8,'Charlie', 'charlie@test.com', '02-01-53-96', 3);
INSERT INTO student (id, name, email, phone, class_id) VALUES (9,'Shoa', 'shoa@test.com', NULL, 4);
INSERT INTO student (id, name, email, phone, class_id) VALUES (10,'Smith', 'smith@test.com', '74-45-63-82', 3);
INSERT INTO student (id, name, email, phone, class_id) VALUES (11,'Smith', 'smith01@test.com', NULL, 1);