-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 24, 2022 at 08:38 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `meetingdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `development_groups`
--

CREATE TABLE `development_groups` (
  `groupId` int(11) NOT NULL,
  `groupName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `development_groups`
--

INSERT INTO `development_groups` (`groupId`, `groupName`) VALUES
(1, 'UI Team'),
(2, 'Mobile Team'),
(3, 'React Team');

-- --------------------------------------------------------

--
-- Table structure for table `meetings`
--

CREATE TABLE `meetings` (
  `meetingId` int(11) NOT NULL,
  `groupId` int(11) NOT NULL,
  `meetingStartDate` datetime NOT NULL,
  `meetingEndDate` datetime NOT NULL,
  `meetingDescription` varchar(200) NOT NULL,
  `meetingRoom` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `meetings`
--

INSERT INTO `meetings` (`meetingId`, `groupId`, `meetingStartDate`, `meetingEndDate`, `meetingDescription`, `meetingRoom`) VALUES
(1, 1, '2022-04-04 10:00:00', '2022-02-04 11:00:00', 'UI Bugs', 'Blue Room'),
(2, 3, '2022-03-29 12:00:00', '2022-03-24 13:00:00', 'React Bugs', 'New York Room'),
(3, 2, '2022-03-31 14:00:00', '2022-03-31 15:00:00', 'Mobile Bugs', 'Large Board Room'),
(4, 2, '2022-03-08 21:32:00', '2022-04-25 21:32:00', 'bvfdghb', 'hgtmtmk');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `development_groups`
--
ALTER TABLE `development_groups`
  ADD PRIMARY KEY (`groupId`);

--
-- Indexes for table `meetings`
--
ALTER TABLE `meetings`
  ADD PRIMARY KEY (`meetingId`),
  ADD KEY `groupId` (`groupId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `development_groups`
--
ALTER TABLE `development_groups`
  MODIFY `groupId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `meetings`
--
ALTER TABLE `meetings`
  MODIFY `meetingId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `meetings`
--
ALTER TABLE `meetings`
  ADD CONSTRAINT `meetings_ibfk_1` FOREIGN KEY (`groupId`) REFERENCES `development_groups` (`groupId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
