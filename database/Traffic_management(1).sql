-- use Traffic_management;  

-- CREATE TABLE `Officer` (
--   `officer_id` int NOT NULL,
--   `fullname` varchar(200),
--   `phone_no` int NOT NULL,
--   `password` varchar(100),
--   `username` varchar(100),
--   `status` varchar(100),
--   PRIMARY KEY (`officer_id`)
-- );

-- CREATE TABLE `address` (
--   `address_id` int(255) NOT NULL,
--   `region` varchar(200) NOT NULL,
--   `wereda` varchar(200) NOT NULL,
--   `kebele` varchar(200) NOT NULL,
--   `specific_location` varchar(1000) NOT NULL,
--   `zone` varchar(200) NOT NULL,
--   PRIMARY KEY (`address_id`)
-- );

-- CREATE TABLE `driver` (
--   `license_no` varchar(100),
--   `fullname` varchar(200),
--   `phone_no` int NOT NULL,
--   `age` int NOT NULL,
--   `nationality` varchar(100),
--   PRIMARY KEY (`license_no`)
-- );

-- CREATE TABLE `vehicle` (
--   `plate_no` varchar(100),
--   `motor_no` varchar(100),
--   `purchased_date` date NOT NULL,
--   PRIMARY KEY (`plate_no`)
-- );

-- CREATE TABLE `accident` (
--   `accident_id` int NOT NULL AUTO_INCREMENT,
--   `accident_type` varchar(200),
--   `date` date NOT NULL,
--   `life_lost` int NOT NULL,
--   `major_injury` int NOT NULL,
--   `minor_injury` int NOT NULL,
--   `property_loss` int NOT NULL,
--   `property_loss_in_money` varchar(1000),
--   `description` varchar(1000),
--   PRIMARY KEY (`accident_id`)
-- );

-- CREATE TABLE `penalty` (
--   `penalty_id` int NOT NULL,
--   `violation_type` varchar(200),
--   `date` date NOT NULL,
--   `penalty_leve` varchar(100),
--   `amount` varchar(1000),
--   PRIMARY KEY (`penalty_id`)
-- );

-- CREATE TABLE `accident_driver` (
--   `accident_driver_id` int NOT NULL,
--   `accident_id` int NOT NULL,
--   `driver_id` varchar(100),
--   PRIMARY KEY (`accident_driver_id`),
--   FOREIGN KEY (`driver_id`) REFERENCES `driver` (`license_no`),
--   FOREIGN KEY (`accident_id`) REFERENCES `accident` (`accident_id`)
-- );

-- CREATE TABLE `accident_vehicle` (
--   `accident_vehicle_id` int NOT NULL,
--   `accident_id` int NOT NULL,
--   `vehicle_id` varchar(100),
--   PRIMARY KEY (`accident_vehicle_id`),
--   FOREIGN KEY (`accident_id`) REFERENCES `accident` (`accident_id`),
--   FOREIGN KEY (`vehicle_id`) REFERENCES `vehicle` (`plate_no`)
-- );

-- CREATE TABLE `penalty_driver` (
--   `penalty_driver_id` int NOT NULL,
--   `penalty_id` int NOT NULL,
--   `driver_id` varchar(100),
--   PRIMARY KEY (`penalty_driver_id`),
--   FOREIGN KEY (`penalty_id`) REFERENCES `penalty` (`penalty_id`),
--   FOREIGN KEY (`driver_id`) REFERENCES `driver` (`license_no`)
-- );

-- CREATE TABLE `vehicle_driver` (
--   `vehicle_driver_id` int NOT NULL AUTO_INCREMENT,
--   `vehicle_id` varchar(100),
--   `driver_id` varchar(100),
--   PRIMARY KEY (`vehicle_driver_id`),
--   FOREIGN KEY (`vehicle_id`) REFERENCES `vehicle` (`plate_no`),
--   FOREIGN KEY (`driver_id`) REFERENCES `driver` (`license_no`)
-- );