USE hyf_lesson2; 

-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id --
INSERT INTO `task`(title, description, created, updated, due_date, status_id, id)
	VALUES('Study DB', 'Do homework', '2023-01-15 20:17:00', '2023-01-20 12:00:00', NULL , 1, 36);  

-- Change the title of a task
UPDATE task SET title = 'Study database' WHERE id = 36; 

-- Change a task due date 
UPDATE task SET due_date = '2023-01-21 12:00:00' WHERE id = 36; 
 
-- Change a task status
UPDATE task SET status_id = 2 WHERE id = 36; 

-- Mark a task as complete
UPDATE task SET status_id = 3 WHERE id = 36; 

-- Delete a task
DELETE FROM task WHERE id = 38; 