USE `meal-sharing`;

-- Meal Queries -- 
-- get all meals
SELECT * FROM meal; 

-- Add a new meal
INSERT INTO `meal` (id, title, description, location, `when`, max_reservation, price, created_date) VALUES (6, 'Homestyle Vietnamese food', 'Crispy spring roll serve with sweet chili sauce', 'Christainshavn', '2023-02-01 10:00', 2, 45.50, '2023-01-31');

-- Get a meal with any id, fx 1
SELECT * FROM meal WHERE id = 1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal SET max_reservation = 3 WHERE id = 6; 

-- Delete a meal with any id, fx 1
DELETE FROM meal WHERE id = 6; 

-- Reservation Queries -- 
-- Get all reservations
SELECT * FROM reservation;
 
-- Add a new reservation
INSERT INTO `reservation` (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) VALUES(8, 1, 4, '2023-02-09', NULL , 'Linda', 'linda@test.com');

-- Get a reservation with any id, fx 1
SELECT * FROM reservation WHERE id = 8;  

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation 
SET number_of_guests = 2 
WHERE id = 8; 

-- Delete a reservation with any id, fx 
DELETE FROM reservation WHERE id = 8;
 
-- Review Queries -- 
-- Get all reviews
SELECT * FROM review; 

-- Add a new review
INSERT INTO review(id, title, description, meal_id, stars, created_date) VALUES(9, 'Amazing Food', NULL , 3, 5, '2023-01-26');
 
-- Get a review with any id, fx 1
SELECT * FROM review WHERE id = 9;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review SET description = 'Super recommended!' WHERE id = 9;
 
-- Delete a review with any id, fx 1
DELETE FROM review WHERE id = 9; 

--- additional queries -- 
-- Get meals that has a price smaller than a specific price fx 90
SELECT meal.title, meal.when, meal.price 
FROM meal 
WHERE price <= 60; 

-- Get meals that still has available reservations
SELECT meal.title, (meal.max_reservation - SUM(reservation.number_of_guests)) AS available_reservations 
FROM reservation JOIN meal ON meal.id = reservation.meal_id 
GROUP BY meal.id HAVING available_reservations != 0 
ORDER BY available_reservations ASC;  

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT title FROM meal 
WHERE (title LIKE '%traditional%'); 

-- Get meals that has been created between two dates
SELECT title, created_date FROM meal
WHERE created_date >= '2023-01-30' AND created_date <= '2023-02-02'; 

-- Get only specific number of meals fx return only 5 meals
SELECT * FROM meal LIMIT 5; 

-- Get the meals that have good reviews
SELECT meal.title, review.title, review.stars FROM meal 
JOIN review ON meal.id = review.meal_id WHERE review.stars >= 4; 

-- Get reservations for a specific meal sorted by created_date
SELECT reservation.contact_name, meal.title, meal.created_date FROM reservation
JOIN meal ON reservation.meal_id = meaL.id 
WHERE (title LIKE '%traditional%') 
ORDER BY meal.created_date ASC; 

-- Sort all meals by average number of stars in the reviews
SELECT meal.title, AVG(review.stars) AS average_stars FROM meal
JOIN review ON review.meal_id = meaL.id 
GROUP BY meal.id 
ORDER BY average_stars ASC; 
