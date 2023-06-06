-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 06, 2023 at 09:08 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Traffic_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `accident`
--

CREATE TABLE `accident` (
  `accident_id` int(200) NOT NULL,
  `accident_type` varchar(200) NOT NULL,
  `date` date NOT NULL,
  `reporter` int(255) NOT NULL,
  `address` varchar(1000) NOT NULL,
  `life_lost` int(255) NOT NULL,
  `major_injury` int(255) NOT NULL,
  `minor_injury` int(255) NOT NULL,
  `property_loss` int(255) NOT NULL,
  `property_loss_in_money` varchar(1000) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `accident_vechile_id` int(200) NOT NULL,
  `accident_driver_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `accident_driver`
--

CREATE TABLE `accident_driver` (
  `accident_driver_id` int(255) NOT NULL,
  `accident_id` int(255) NOT NULL,
  `driver_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `accident_vehicle`
--

CREATE TABLE `accident_vehicle` (
  `accident_vehicle_id` int(255) NOT NULL,
  `accident_id` int(255) NOT NULL,
  `vehicle_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `address_id` int(255) NOT NULL,
  `region` varchar(200) NOT NULL,
  `wereda` varchar(200) NOT NULL,
  `kebele` varchar(200) NOT NULL,
  `specific_location` varchar(1000) NOT NULL,
  `zone` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `driver`
--

CREATE TABLE `driver` (
  `fullName` varchar(100) NOT NULL,
  `phone_no` int(100) NOT NULL,
  `age` int(200) NOT NULL,
  `nationality` varchar(100) NOT NULL,
  `license_no` int(200) NOT NULL,
  `accident_driver_id` int(200) NOT NULL,
  `penalty_driver_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Officer`
--

CREATE TABLE `Officer` (
  `officer_id` int(200) NOT NULL,
  `fullname` varchar(200) NOT NULL,
  `phone_no` int(200) NOT NULL,
  `password` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `penalty`
--

CREATE TABLE `penalty` (
  `penalty_id` int(200) NOT NULL,
  `driver_license` int(200) NOT NULL,
  `driver_name` varchar(200) NOT NULL,
  `violation_type` varchar(200) NOT NULL,
  `date` date NOT NULL,
  `penalty_leve` varchar(100) NOT NULL,
  `amount` varchar(1000) NOT NULL,
  `penalty_driver_id` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `penalty_driver`
--

CREATE TABLE `penalty_driver` (
  `penalty_driver_id` int(255) NOT NULL,
  `penalty_id` int(255) NOT NULL,
  `driver_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vehicle`
--

CREATE TABLE `vehicle` (
  `plate_no` varchar(100) NOT NULL,
  `motor_no` varchar(100) NOT NULL,
  `purchased_date` date NOT NULL,
  `owner_name` varchar(100) NOT NULL,
  `owner_phone` int(100) NOT NULL,
  `accident_vehicle_id` int(100) NOT NULL,
  `vehicle_owner_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_driver`
--

CREATE TABLE `vehicle_driver` (
  `vehicle_driver_id` int(255) NOT NULL,
  `vehicle_id` int(255) NOT NULL,
  `driver_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_owner`
--

CREATE TABLE `vehicle_owner` (
  `vehicle_owner_id` int(255) NOT NULL,
  `vehicle_id` int(255) NOT NULL,
  `fullname` varchar(1000) NOT NULL,
  `phone` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accident`
--
ALTER TABLE `accident`
  ADD PRIMARY KEY (`accident_id`),
  ADD KEY `accident_driver_id` (`accident_driver_id`),
  ADD KEY `accident_vechile_id` (`accident_vechile_id`),
  ADD KEY `reporter` (`reporter`);

--
-- Indexes for table `accident_driver`
--
ALTER TABLE `accident_driver`
  ADD PRIMARY KEY (`accident_driver_id`);

--
-- Indexes for table `accident_vehicle`
--
ALTER TABLE `accident_vehicle`
  ADD PRIMARY KEY (`accident_vehicle_id`);

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`address_id`);

--
-- Indexes for table `driver`
--
ALTER TABLE `driver`
  ADD PRIMARY KEY (`license_no`),
  ADD KEY `accident_driver_id` (`accident_driver_id`),
  ADD KEY `penalty_driver_id` (`penalty_driver_id`);

--
-- Indexes for table `Officer`
--
ALTER TABLE `Officer`
  ADD PRIMARY KEY (`officer_id`);

--
-- Indexes for table `penalty`
--
ALTER TABLE `penalty`
  ADD PRIMARY KEY (`penalty_id`);

--
-- Indexes for table `penalty_driver`
--
ALTER TABLE `penalty_driver`
  ADD PRIMARY KEY (`penalty_driver_id`);

--
-- Indexes for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD PRIMARY KEY (`plate_no`),
  ADD KEY `vehicle_owner_id` (`vehicle_owner_id`);

--
-- Indexes for table `vehicle_driver`
--
ALTER TABLE `vehicle_driver`
  ADD PRIMARY KEY (`vehicle_driver_id`);

--
-- Indexes for table `vehicle_owner`
--
ALTER TABLE `vehicle_owner`
  ADD PRIMARY KEY (`vehicle_owner_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `accident`
--
ALTER TABLE `accident`
  ADD CONSTRAINT `accident_ibfk_1` FOREIGN KEY (`accident_driver_id`) REFERENCES `accident_driver` (`accident_driver_id`),
  ADD CONSTRAINT `accident_ibfk_2` FOREIGN KEY (`accident_vechile_id`) REFERENCES `accident_vehicle` (`accident_vehicle_id`),
  ADD CONSTRAINT `accident_ibfk_3` FOREIGN KEY (`reporter`) REFERENCES `Officer` (`officer_id`);

--
-- Constraints for table `driver`
--
ALTER TABLE `driver`
  ADD CONSTRAINT `driver_ibfk_1` FOREIGN KEY (`accident_driver_id`) REFERENCES `accident_driver` (`accident_driver_id`),
  ADD CONSTRAINT `driver_ibfk_2` FOREIGN KEY (`penalty_driver_id`) REFERENCES `penalty_driver` (`penalty_driver_id`);

--
-- Constraints for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD CONSTRAINT `vehicle_ibfk_1` FOREIGN KEY (`vehicle_owner_id`) REFERENCES `vehicle_owner` (`vehicle_owner_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
