DROP DATABASE IF EXISTS `hw_lesson2_part4`;

CREATE DATABASE IF NOT EXISTS `hw_lesson2_part4`;

USE `hw_lesson2_part4`;

CREATE TABLE customer (
	id INT(10) NOT NULL PRIMARY KEY, 
    name VARCHAR(35) NOT NULL, 
    email VARCHAR(35) NOT NULL UNIQUE, 
    phone VARCHAR(20) NULL
);
CREATE TABLE room(
	id INT(10) NOT NULL UNIQUE PRIMARY KEY, 
    name VARCHAR(35) NOT NULL UNIQUE
);

CREATE TABLE payment(
	id INT(10) NOT NULL PRIMARY KEY, 
    name VARCHAR(35) NOT NULL UNIQUE
);
CREATE TABLE booking (
	id INT(10) NOT NULL PRIMARY KEY, 
    customer_id INT(10) NOT NULL,
	room_id INT(10) NOT NULL, 
    payment_id INT(10) NOT NULL,
    checkin DATE NOT NULL, 
	checkout DATE NULL, 
    CONSTRAINT fk_cutomer_id FOREIGN KEY (customer_id) REFERENCES customer(id), 
    CONSTRAINT fk_payment FOREIGN KEY(payment_id) REFERENCES payment(id)
); 

CREATE TABLE booking_room(
	booking_id INT(10), 
    room_id INT(10), 
    PRIMARY KEY(booking_id, room_id),
    CONSTRAINT fk_booking_id FOREIGN KEY(booking_id) REFERENCES booking(id), 
	CONSTRAINT fk_room_id FOREIGN KEY(room_id) REFERENCES room(id)
);

INSERT INTO customer (id, name, email, phone) VALUES (1, 'John', 'john@test.com', NULL);
INSERT INTO customer (id, name, email, phone) VALUES (2, 'Adam', 'adam@test.com', '42-52-63-85');
INSERT INTO customer (id, name, email, phone) VALUES (3, 'Marie', 'marie@test.com', '01-78-52-33');
INSERT INTO customer (id, name, email, phone) VALUES (4, 'Mads', 'mads@test.com', '85-32-41-65');
INSERT INTO customer (id, name, email, phone) VALUES (5, 'Sofie', 'sofie@test.com', NULL);

INSERT INTO payment(id, name) VALUES (1, 'Pay at hotel'); 
INSERT INTO payment(id, name) VALUES (2, 'Credit card'); 
INSERT INTO payment(id, name) VALUES (3, 'Debit card');

INSERT INTO room (id, name) VALUES(1, 'Standard room'); 
INSERT INTO room (id, name) VALUES(2, 'Deluxe room'); 
INSERT INTO room (id, name) VALUES(3, 'Suit room'); 

INSERT INTO booking (id, customer_id, room_id, payment_id, checkin, checkout) VALUES (1, 1, 2, 2, '2023-01-23', '2023-01-26');
INSERT INTO booking (id, customer_id, room_id, payment_id, checkin, checkout) VALUES (2, 1, 1, 2, '2023-01-24', '2023-01-26');
INSERT INTO booking (id, customer_id, room_id, payment_id, checkin, checkout) VALUES (3, 2, 2, 1, '2023-01-20', '2023-01-22');
INSERT INTO booking (id, customer_id, room_id, payment_id, checkin, checkout) VALUES (4, 3, 3, 2, '2023-01-22', '2023-01-23');
INSERT INTO booking (id, customer_id, room_id, payment_id, checkin, checkout) VALUES (5, 4, 1, 3, '2023-01-30', '2023-01-31');
INSERT INTO booking (id, customer_id, room_id, payment_id, checkin, checkout) VALUES (6, 5, 2, 3, '2023-01-19', '2023-01-24');
INSERT INTO booking (id, customer_id, room_id, payment_id, checkin, checkout) VALUES (7, 2, 3, 2, '2023-02-15', '2023-01-19');