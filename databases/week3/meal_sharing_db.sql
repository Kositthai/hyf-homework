DROP DATABASE IF EXISTS `meal-sharing`;

CREATE DATABASE IF NOT EXISTS `meal-sharing`;

USE `meal-sharing`;

CREATE TABLE `meal`(
	`id` INT(10) UNIQUE NOT NULL PRIMARY KEY, 
    `title` VARCHAR(100) NOT NULL, 
    `description` TEXT NULL, 
    `location` VARCHAR(100) NOT NULL, 
    `when` DATETIME NOT NULL, 
    `max_reservation` INT NULL, 
    `price` DECIMAL(10,2) NOT NULL, 
    `created_date` DATE NOT NULL
)ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE TABLE `reservation`(
	`id` INT(10) UNIQUE NOT NULL PRIMARY KEY, 
    `number_of_guests` INT NOT NULL, 
    `meal_id` INT NOT NULL, 
    `created_date` DATE NOT NULL, 
    `contact_phonenumber` VARCHAR(15) NULL,
    `contact_name` VARCHAR(60) NOT NULL, 
    `contact_email` VARCHAR(60) NOT NULL,
    CONSTRAINT fk_reservation_meal_id FOREIGN KEY(meal_id) REFERENCES meal(id)
)ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI; 

CREATE TABLE `review`(
	`id` INT(10) UNIQUE NOT NULL PRIMARY KEY, 
    `title` VARCHAR(200) NULL, 
    `description` TEXT NULL, 
    `meal_id` INT(10) NOT NULL, 
    `stars` INT(1) NOT NULL, 
    `created_date` DATE NOT NULL, 
    CONSTRAINT fk_review_meal_id FOREIGN KEY(meal_id) REFERENCES meal(id)
)ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

INSERT INTO `meal` (id, title, description, location, `when`, max_reservation, price, created_date) VALUES (1, 'Traditional Pad Thai', 'Noodles with spicy and sweet taste', 'Amager', '2023-02-01 13:00', 5, 45, '2023-01-30');
INSERT INTO `meal` (id, title, description, location, `when`, max_reservation, price, created_date) VALUES (2, 'Dim som', 'Dim som that you can should between meat or vegetables stuff', 'Nyhavn', '2023-02-05 11:00', 4, 65, '2023-02-02');
INSERT INTO `meal` (id, title, description, location, `when`, max_reservation, price, created_date) VALUES (3, 'Open face sandwiches', 'You will get open face sandwich with homemade onion marmalade, cheese, eggs and salmon', 'Gammel strand', '2023-01-25 10:00', 3, 79.50, '2023-01-24');
INSERT INTO `meal` (id, title, description, location, `when`, max_reservation, price, created_date) VALUES (4, 'Traditional indian food', 'Creamy butteer chicken with garlic naan bread', 'Nørreport', '2023-02-10 11:30', 6, 59.50, '2023-02-08');
INSERT INTO `meal` (Id, title, description, location, `when`, max_reservation, price, created_date) VALUES (5, 'Carbonara homemade pasta', 'Italia pasta dish with homemade pasta', 'strøget', '2023-02-03 17:30', 2, 105.90, '2023-02-02');

INSERT INTO `reservation` (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) VALUES(1, 2, 1, '2023-01-31', '42-42-45-85', 'Michel', 'michel01@test.com'); 
INSERT INTO `reservation` (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) VALUES(2, 2, 4, '2023-02-08', '78-56-01-72', 'Adam', 'adam_j@test.com'); 
INSERT INTO `reservation` (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) VALUES(3, 1, 5, '2023-01-02', NULL , 'Maria', 'maria@test.com'); 
INSERT INTO `reservation` (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) VALUES(4, 3, 3, '2023-01-24', NULL, 'John', 'John_cooking@test.com'); 
INSERT INTO `reservation` (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) VALUES(5, 1, 2, '2023-02-04', '96-20-63-55', 'Madrid', 'madrid@test.com'); 
INSERT INTO `reservation` (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) VALUES(6, 1, 1, '2023-01-30', '01-43-20-06', 'Nid', 'nid@test.com'); 
INSERT INTO `reservation` (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) VALUES(7, 2, 4, '2023-02-09', NULL, 'Sarah', 'sarah@test.com'); 

INSERT INTO review(id, title, description, meal_id, stars, created_date) VALUES(1, 'Tasty!', 'The food looks good and delicous',  1, 5, '2023-02-01'); 
INSERT INTO review(id, title, description, meal_id, stars, created_date) VALUES(2, 'Just okay', NULL, 3, 3, '2023-01-26'); 
INSERT INTO review(id, title, description, meal_id, stars, created_date) VALUES(3, 'Overall very good','Incredible homemade paste and the sauce also tasted nice!',  4, 5, '2023-02-11'); 
INSERT INTO review(id, title, description, meal_id, stars, created_date) VALUES(4, 'Last time', 'Some ingredients wasnt that fresh! The food was okay', 2, 2, '2023-02-06'); 
INSERT INTO review(id, title, description, meal_id, stars, created_date) VALUES(5, 'Big portion and delicious!','Lucas food always good and hign quality!',  5, 5, '2023-02-05'); 
INSERT INTO review(id, title, description, meal_id, stars, created_date) VALUES(6, 'We loved it!', NULL , 2, 4, '2023-02-06'); 
INSERT INTO review(id, title, description, meal_id, stars, created_date) VALUES(7, 'Curry could be more creamy','I expected to have more creamy curry than this and garlic naan is too small', 4, 2, '2023-02-10'); 
INSERT INTO review(id, title, description, meal_id, stars, created_date) VALUES(8, 'OK', 'The sauce is too sweet for me tho', 1, 2, '2023-02-01'); 
