CREATE TABLE `Officer` (
  `officer_id` int NOT NULL,
  `fullname` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `phone_no` int NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `username` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `status` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`officer_id`)
);

CREATE TABLE `address` (
  `address_id` int(255) NOT NULL,
  `region` varchar(200) NOT NULL,
  `wereda` varchar(200) NOT NULL,
  `kebele` varchar(200) NOT NULL,
  `specific_location` varchar(1000) NOT NULL,
  `zone` varchar(200) NOT NULL,
  PRIMARY KEY (`address_id`)
);

CREATE TABLE `accident` (
  `accident_id` int NOT NULL AUTO_INCREMENT,
  `accident_type` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `date` date NOT NULL,
  `reporter` int NOT NULL,
  `address` int NOT NULL,
  `life_lost` int NOT NULL,
  `major_injury` int NOT NULL,
  `minor_injury` int NOT NULL,
  `property_loss` int NOT NULL,
  `property_loss_in_money` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL,
  `description` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL, 
  PRIMARY KEY (`accident_id`)
);

CREATE TABLE `accident_driver` (
  `accident_driver_id` int NOT NULL,
  `accident_id` int NOT NULL,
  `driver_id` int DEFAULT NULL,
  PRIMARY KEY (`accident_driver_id`),
  FOREIGN KEY (`driver_id`) REFERENCES `driver` (`license_no`),
  FOREIGN KEY (`accident_id`) REFERENCES `accident` (`accident_id`)
);

CREATE TABLE `accident_vehicle` (
  `accident_vehicle_id` int NOT NULL,
  `accident_id` int NOT NULL,
  `vehicle_id` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`accident_vehicle_id`),
  FOREIGN KEY (`accident_id`) REFERENCES `accident` (`accident_id`),
  FOREIGN KEY (`vehicle_id`) REFERENCES `vehicle` (`plate_no`)
);

CREATE TABLE `driver` (
  `fullName` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `phone_no` int NOT NULL,
  `age` int NOT NULL,
  `nationality` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `license_no` int NOT NULL, 
  PRIMARY KEY (`license_no`) 
);

CREATE TABLE `penalty` (
  `penalty_id` int NOT NULL,
  `violation_type` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `date` date NOT NULL,
  `penalty_leve` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `amount` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL, 
  PRIMARY KEY (`penalty_id`)
);

CREATE TABLE `penalty_driver` (
  `penalty_driver_id` int NOT NULL,
  `penalty_id` int NOT NULL,
  `driver_id` int NOT NULL,
  `driver_name` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`penalty_driver_id`),
  FOREIGN KEY (`penalty_id`) REFERENCES `penalty` (`penalty_id`),
  FOREIGN KEY (`driver_id`) REFERENCES `driver` (`license_no`),
  FOREIGN KEY (`driver_name`) REFERENCES `driver` (`fullName`)
);

CREATE TABLE `vehicle` (
  `plate_no` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `motor_no` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `purchased_date` date NOT NULL,
  PRIMARY KEY (`plate_no`) 
);

CREATE TABLE `vehicle_driver` (
  `vehicle_driver_id` int NOT NULL AUTO_INCREMENT,
  `vehicle_id` int NOT NULL,
  `driver_id` int NOT NULL,
  PRIMARY KEY (`vehicle_driver_id`),
  FOREIGN KEY (`vehicle_id`) REFERENCES `vehicle` (`plate_no`),
  FOREIGN KEY (`driver_id`) REFERENCES `driver` (`license_no`)
);

CREATE TABLE `vehicle_owner` (
  `vehicle_owner_id` int NOT NULL,
  `vehicle_id` int NOT NULL,
  `fullname` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL,
  `phone` int NOT NULL,
  PRIMARY KEY (`vehicle_owner_id`),
  FOREIGN KEY (`vehicle_id`) REFERENCES `vehicle` (`plate_no`)
);

CREATE TABLE `reporter_address` (
  `id` int NOT NULL,
  `reporter_id` int NOT NULL,
  `address_id` int NOT NULL,
  `accident_id` int NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`reporter_id`) REFERENCES `Officer` (`officer_id`),
  FOREIGN KEY (`address_id`) REFERENCES `address` (`address_id`),
  FOREIGN KEY (`accident_id`) REFERENCES `accident` (`accident_id`)
);
