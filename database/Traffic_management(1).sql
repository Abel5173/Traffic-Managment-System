-- drop database Traffic_management
-- create database Traffic_management
-- use Traffic_management;  

-- CREATE TABLE `Officer` (
--   `officer_id` int NOT NULL AUTO_INCREMENT,
--   `fullname` varchar(200),
--   `phone_no` int NOT NULL,
--   `password` varchar(100),
--   `username` varchar(100),
--   `status` varchar(100),
--   PRIMARY KEY (`officer_id`)
-- );


-- CREATE TABLE `address` (
--   `address_id` int NOT NULL AUTO_INCREMENT,
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
--   `penalty_id` int NOT NULL AUTO_INCREMENT,
--   `violation_type` varchar(200),
--   `date` date NOT NULL,
--   `penalty_leve` varchar(100),
--   `amount` varchar(1000),
--   PRIMARY KEY (`penalty_id`)
-- );

-- CREATE TABLE `accident_driver` (
--   `accident_driver_id` int NOT NULL AUTO_INCREMENT,
--   `accident_id` int NOT NULL,
--   `driver_id` varchar(100),
--   PRIMARY KEY (`accident_driver_id`),
--   FOREIGN KEY (`driver_id`) REFERENCES `driver` (`license_no`),
--   FOREIGN KEY (`accident_id`) REFERENCES `accident` (`accident_id`)
-- );

-- CREATE TABLE `accident_vehicle` (
--   `accident_vehicle_id` int NOT NULL AUTO_INCREMENT,
--   `accident_id` int NOT NULL,
--   `vehicle_id` varchar(100),
--   PRIMARY KEY (`accident_vehicle_id`),
--   FOREIGN KEY (`accident_id`) REFERENCES `accident` (`accident_id`),
--   FOREIGN KEY (`vehicle_id`) REFERENCES `vehicle` (`plate_no`)
-- );

-- CREATE TABLE `penalty_driver` (
--   `penalty_driver_id` int NOT NULL AUTO_INCREMENT,
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

-- CREATE TABLE `vehicle_owner` (
--   `vehicle_owner_id` int NOT NULL AUTO_INCREMENT,
--   `vehicle_id` varchar(100) NOT NULL,
--   `fullname` varchar(1000) NOT NULL,
--   `phone` varchar(20) NOT NULL,
--   PRIMARY KEY (`vehicle_owner_id`),
--   FOREIGN KEY (`vehicle_id`) REFERENCES `vehicle` (`plate_no`)
-- );

-- CREATE TABLE `reporter_address` (
--   `id` int NOT NULL AUTO_INCREMENT,
--   `reporter_id` int NOT NULL,
--   `address_id` int NOT NULL,
--   `accident_id` int NOT NULL,
--   PRIMARY KEY (`id`),
--   FOREIGN KEY (`reporter_id`) REFERENCES `Officer` (`officer_id`),
--   FOREIGN KEY (`address_id`) REFERENCES `address` (`address_id`),
--   FOREIGN KEY (`accident_id`) REFERENCES `accident` (`accident_id`)
-- );

-- INSERT INTO `Officer` (`officer_id`, `fullname`, `phone_no`, `password`, `username`, `status`)
-- VALUES (1, 'John Doe', 1234567890, 'password123', 'johndoe', 'Active');

-- INSERT INTO `Officer` (`officer_id`, `fullname`, `phone_no`, `password`, `username`, `status`)
-- VALUES (2, 'Abel Zeleke', 935353626, 'admin', 'admin', 'Active');

-- INSERT INTO `address` (`address_id`, `region`, `wereda`, `kebele`, `specific_location`, `zone`)
-- VALUES (1, 'Region A', 'Wereda 1', 'Kebele 1', 'Specific Location 1', 'Zone 1');
-- INSERT INTO `driver` (`license_no`, `fullname`, `phone_no`, `age`, `nationality`)
-- VALUES ('DL123456', 'Jane Smith', 987654321, 30, 'USA');
-- INSERT INTO `vehicle` (`plate_no`, `motor_no`, `purchased_date`)
-- VALUES ('ABC123', 'MTR123', '2022-01-01');
-- INSERT INTO `accident` (`accident_id`, `accident_type`, `date`, `life_lost`, `major_injury`, `minor_injury`, `property_loss`, `property_loss_in_money`, `description`)
-- VALUES (1, 'Car Crash', '2023-06-01', 1, 2, 5, 100000, '$10,000', 'Description of the accident.');
-- INSERT INTO `penalty` (`penalty_id`, `violation_type`, `date`, `penalty_leve`, `amount`)
-- VALUES (1, 'Speeding', '2023-06-02', 'Minor', '$100');
-- INSERT INTO `accident_driver` (`accident_driver_id`, `accident_id`, `driver_id`)
-- VALUES (1, 1, 'DL123456');
-- INSERT INTO `accident_vehicle` (`accident_vehicle_id`, `accident_id`, `vehicle_id`)
-- VALUES (1, 1, 'ABC123');
-- INSERT INTO `penalty_driver` (`penalty_driver_id`, `penalty_id`, `driver_id`)
-- VALUES (1, 1, 'DL123456');
-- INSERT INTO `vehicle_driver` (`vehicle_driver_id`, `vehicle_id`, `driver_id`)
-- VALUES (1, 'ABC123', 'DL123456');
-- INSERT INTO `vehicle_owner` (`vehicle_owner_id`, `vehicle_id`, `fullname`, `phone`)
-- VALUES (1, 'ABC123', 'John Smith', '9876543210');
-- INSERT INTO `reporter_address` (`id`, `reporter_id`, `address_id`, `accident_id`)
-- VALUES (1, 1, 1, 1);

-- DELETE FROM address;
-- DELETE FROM Officer;
-- DELETE FROM driver;
-- DELETE FROM vehicle_driver;
-- DELETE FROM vehicle_owner;
-- DELETE FROM penalty;
-- DELETE FROM penalty_driver;
-- DELETE FROM vehicle;
-- DELETE FROM accident;
-- DELETE FROM accident_vehicle;
-- DELETE FROM accident_driver;