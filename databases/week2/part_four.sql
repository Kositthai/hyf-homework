DROP DATABASE IF EXISTS `hw_lesson2_part4`;

CREATE DATABASE IF NOT EXISTS `hw_lesson2_part4`;

USE `hw_lesson2_part4`;

CREATE TABLE employee_details( 
	id INT NOT NULL PRIMARY KEY, 
    salary INT NOT NULL,
    department_id INT UNIQUE NOT NULL, 
    start_date DATE NOT NULL,
    end_date DATE NULL,
    status_id INT UNIQUE NOT NULL,
    INDEX(start_date, end_date) 
)ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE=UTF8MB4_UNICODE_CI;

CREATE TABLE employees( 
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(255) NOT NULL, 
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(255) NULL, 
    CONSTRAINT fk_emp_id FOREIGN KEY(id) REFERENCES employee_details(id),
    INDEX(name)
)ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE=UTF8MB4_UNICODE_CI;

CREATE TABLE employee_status( 
	status_id INT NOT NULL PRIMARY KEY, 
    name VARCHAR(255) NOT NULL, 
    CONSTRAINT fk_emp_status_id FOREIGN KEY(status_id) REFERENCES employee_details(status_id)
)ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE=UTF8MB4_UNICODE_CI; 

CREATE TABLE shops( -- parent table 
	shop_id INT NOT NULL PRIMARY KEY, 
    name VARCHAR(255) NOT NULL UNIQUE, 
    phone VARCHAR(255) NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 

CREATE TABLE employee_shops (
	shop_id INT NOT NULL AUTO_INCREMENT, 
	id INT NOT NULL, 
    PRIMARY KEY(id, shop_id), 
    CONSTRAINT fk_emp_id_for_employee_shops FOREIGN KEY(id) REFERENCES employees(id), 
    CONSTRAINT fk_shop_id FOREIGN KEY(shop_id) REFERENCES shops(shop_id) 
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 

CREATE TABLE departments(
	department_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    department_name VARCHAR(255) NOT NULL, 
    title_id INT UNIQUE NOT NULL, 
    CONSTRAINT fk_department_id FOREIGN KEY(department_id) REFERENCES employee_details(department_id) 
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE job_titles(
	title_id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    title_name VARCHAR(255), 
    CONSTRAINT fk_title_id FOREIGN KEY(title_id) REFERENCES departments(title_id)
)ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE=UTF8MB4_UNICODE_CI;