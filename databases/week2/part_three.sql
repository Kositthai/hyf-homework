USE hyf_lesson2;

-- Get all the tasks assigned to users whose email ends in @spotify.com -- 
SELECT user.name, task.title FROM user 
JOIN user_task ON user.id = user_task.user_id
JOIN task ON user_task.task_id = task.id
WHERE user.email LIKE '%spotify.com%';  

-- Get all the tasks for 'Donald Duck' with status 'Not started' -- 
SELECT user.name, task.title, task.status_id, status.name FROM task 
JOIN user_task ON task.id = user_task.task_id 
JOIN user ON user.id = user_task.user_id
JOIN status ON status.id = task.status_id
WHERE user.name = 'Donald Duck' AND status.name = 'Not started'; 

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number) -- 
SELECT user.name, task.title, task.created FROM task 
JOIN user_task ON user_task.task_id = task.id
JOIN user ON user.id = user_task.user_id
WHERE user.name = 'Maryrose Meadows' AND MONTH(created) = 9; 

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by) -- 
SELECT MONTH(created) AS month, COUNT(*) AS `number of task` FROM task GROUP BY MONTH(created); 