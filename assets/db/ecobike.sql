-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1:5050
-- Thời gian đã tạo: Th1 06, 2022 lúc 02:04 PM
-- Phiên bản máy phục vụ: 10.4.22-MariaDB
-- Phiên bản PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `ecobike`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bike`
--

CREATE TABLE `bike` (
  `id` int(11) NOT NULL,
  `category` varchar(45) NOT NULL,
  `barcode` varchar(45) NOT NULL,
  `isRented` tinyint(4) DEFAULT NULL,
  `licensePlate` varchar(45) NOT NULL,
  `deposit` int(11) NOT NULL,
  `rentalPrice1` int(11) NOT NULL,
  `rentalPrice2` int(11) NOT NULL,
  `rentalPrice3` int(11) NOT NULL,
  `parkingId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `bike`
--

INSERT INTO `bike` (`id`, `category`, `barcode`, `isRented`, `licensePlate`, `deposit`, `rentalPrice1`, `rentalPrice2`, `rentalPrice3`, `parkingId`) VALUES
(1, 'Xe đạp đơn', 'SB-0001', 0, 'SB-0001', 400, 0, 15, 5, 4),
(2, 'Xe đạp đơn', 'SB-0002', 0, 'SB-0002', 400, 0, 15, 5, 2),
(3, 'Xe đạp đơn', 'SB-0003', 0, 'SB-0003', 400, 0, 15, 5, 1),
(4, 'Xe đạp đơn', 'SB-0004', 0, 'SB-0004', 400, 0, 15, 5, 1),
(5, 'Xe đạp đơn', 'SB-0005', 0, 'SB-0005', 400, 0, 15, 5, 4),
(6, 'Xe đạp đôi', 'CB-0001', 0, 'CB-0001', 550, 0, 15, 10, 4),
(7, 'Xe đạp đôi', 'CB-0002', 0, 'CB-0002', 550, 0, 15, 10, 3),
(8, 'Xe đạp đôi', 'CB-0003', 0, 'CB-0003', 550, 0, 15, 10, 1),
(9, 'Xe đạp đôi', 'CB-0004', 0, 'CB-0004', 550, 0, 15, 10, 2),
(10, 'Xe đạp đôi', 'CB-0005', 0, 'CB-0005', 550, 0, 15, 10, 3),
(11, 'Xe đạp điện', 'EB-0001', 0, 'EB-0001', 700, 0, 15, 10, 5),
(12, 'Xe đạp điện', 'EB-0002', 0, 'EB-0002', 700, 0, 15, 10, 2),
(13, 'Xe đạp điện', 'EB-0003', 0, 'EB-0003', 700, 0, 15, 10, 4),
(14, 'Xe đạp điện', 'EB-0004', 0, 'EB-0004', 700, 0, 15, 10, 5),
(15, 'Xe đạp điện', 'EB-0005', 0, 'EB-0005', 700, 0, 15, 10, 5);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `couple_bike`
--

CREATE TABLE `couple_bike` (
  `id` int(11) NOT NULL,
  `bikeId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `couple_bike`
--

INSERT INTO `couple_bike` (`id`, `bikeId`) VALUES
(1, 6),
(2, 7),
(3, 8),
(4, 9),
(5, 10);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `electric_bike`
--

CREATE TABLE `electric_bike` (
  `id` int(11) NOT NULL,
  `bikeId` int(11) NOT NULL,
  `battery` int(11) NOT NULL,
  `estimatingTime` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `electric_bike`
--

INSERT INTO `electric_bike` (`id`, `bikeId`, `battery`, `estimatingTime`) VALUES
(1, 11, 11, 0),
(2, 12, 30, 30),
(3, 13, 38, 30),
(4, 14, 94, 105),
(5, 15, 62, 60);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `parking`
--

CREATE TABLE `parking` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `area` double DEFAULT NULL,
  `numSingle` int(11) DEFAULT NULL,
  `numCouple` int(11) DEFAULT NULL,
  `numElectric` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `parking`
--

INSERT INTO `parking` (`id`, `name`, `address`, `area`, `numSingle`, `numCouple`, `numElectric`) VALUES
(1, 'Bãi xe Hai Bà Trưng', '35 Trần Đại Nghĩa,Hà Nội', 75.57, 11, 5, 8),
(2, 'Bãi xe Hoàng Mai', '100 Hoàng Liệt,Hà Nội', 100, 21, 15, 18),
(3, 'Bãi xe Long Biên', '135 Nguyễn Văn Cừ Hà Nội', 86.67, 13, 7, 9),
(4, 'Bãi xe Gia Lâm', '45 Đặng Xá,Hà Nội', 75.57, 11, 5, 8),
(5, 'Bãi xe Ba Đình', '100 Trần Phú,Hà Nội', 85.67, 31, 15, 18);

-- --------------------------------------------------------
--
-- Cấu trúc bảng cho bảng `payment_transaction`
--

CREATE TABLE `payment_transaction` (
  `transactionId` varchar(100) NOT NULL,
  `transactionContent` varchar(100) DEFAULT NULL,
  `command` varchar(100) DEFAULT NULL,
  `createdAt` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Cấu trúc bảng cho bảng `rental_invoice`
--

CREATE TABLE `rental_invoice` (
  `id` int(11) NOT NULL,
  `totalPrice` int(11) DEFAULT NULL,
  `bikeId` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `paymentTransactionId` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------
--
-- Cấu trúc bảng cho bảng `single_bike`
--

CREATE TABLE `single_bike` (
  `id` int(11) NOT NULL,
  `bikeId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `single_bike`
--

INSERT INTO `single_bike` (`id`, `bikeId`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_ecobike`
--

CREATE TABLE `user_ecobike` (
  `id` int(11) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `bikeId` int(11) NOT NULL,
  `paymentTransactionId` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `user_ecobike`
--

INSERT INTO `user_ecobike` (`id`, `username`, `bikeId`, `paymentTransactionId`) VALUES
(1, 'admin', 0, '0');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `bike`
--
ALTER TABLE `bike`
  ADD PRIMARY KEY (`id`),
  ADD KEY `parkingId` (`parkingId`);

--
-- Chỉ mục cho bảng `couple_bike`
--
ALTER TABLE `couple_bike`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bikeId` (`bikeId`);

--
-- Chỉ mục cho bảng `electric_bike`
--
ALTER TABLE `electric_bike`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bikeId` (`bikeId`);

--
-- Chỉ mục cho bảng `parking`
--
ALTER TABLE `parking`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `payment_transaction`
--
ALTER TABLE `payment_transaction`
  ADD PRIMARY KEY (`transactionId`);

--
-- Chỉ mục cho bảng `rental_invoice`
--
ALTER TABLE `rental_invoice`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bikeId` (`bikeId`),
  ADD KEY `paymentTransactionId` (`paymentTransactionId`);

--
-- Chỉ mục cho bảng `single_bike`
--
ALTER TABLE `single_bike`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bikeId` (`bikeId`);

--
-- Chỉ mục cho bảng `user_ecobike`
--
ALTER TABLE `user_ecobike`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `bike`
--
ALTER TABLE `bike`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT cho bảng `couple_bike`
--
ALTER TABLE `couple_bike`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `electric_bike`
--
ALTER TABLE `electric_bike`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `parking`
--
ALTER TABLE `parking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `rental_invoice`
--
ALTER TABLE `rental_invoice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT cho bảng `single_bike`
--
ALTER TABLE `single_bike`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `user_ecobike`
--
ALTER TABLE `user_ecobike`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `bike`
--
ALTER TABLE `bike`
  ADD CONSTRAINT `bike_ibfk_1` FOREIGN KEY (`parkingId`) REFERENCES `parking` (`id`);

--
-- Các ràng buộc cho bảng `couple_bike`
--
ALTER TABLE `couple_bike`
  ADD CONSTRAINT `couple_bike_ibfk_1` FOREIGN KEY (`bikeId`) REFERENCES `bike` (`id`);

--
-- Các ràng buộc cho bảng `electric_bike`
--
ALTER TABLE `electric_bike`
  ADD CONSTRAINT `electric_bike_ibfk_1` FOREIGN KEY (`bikeId`) REFERENCES `bike` (`id`);

--
-- Các ràng buộc cho bảng `rental_invoice`
--
ALTER TABLE `rental_invoice`
  ADD CONSTRAINT `rental_invoice_ibfk_1` FOREIGN KEY (`bikeId`) REFERENCES `bike` (`id`),
  ADD CONSTRAINT `rental_invoice_ibfk_2` FOREIGN KEY (`paymentTransactionId`) REFERENCES `payment_transaction` (`transactionId`);

--
-- Các ràng buộc cho bảng `single_bike`
--
ALTER TABLE `single_bike`
  ADD CONSTRAINT `single_bike_ibfk_1` FOREIGN KEY (`bikeId`) REFERENCES `bike` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

CREATE TABLE `couple_electric_bike` (
  `id` int(11) NOT NULL,
  `bikeId` int(11) NOT NULL,
  `battery` int(11) NOT NULL,
  `estimatingTime` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `couple_electric_bike`
  ADD CONSTRAINT `couple_electric_bike_ibfk_1` FOREIGN KEY (`bikeId`) REFERENCES `bike` (`id`);

INSERT INTO `bike` (`id`, `category`, `barcode`, `isRented`, `licensePlate`, `deposit`, `rentalPrice1`, `rentalPrice2`, `rentalPrice3`, `parkingId`) VALUES
(16, 'Xe điện đôi', 'ECB-0001', 0, 'ECB-0001', 700, 0, 15, 20, 5),
(17, 'Xe điện đôi', 'ECB-0002', 0, 'ECB-0002', 700, 0, 15, 20, 2),
(18, 'Xe điện đôi', 'ECB-0003', 0, 'ECB-0003', 700, 0, 15, 20, 4),
(19, 'Xe điện đôi', 'ECB-0004', 0, 'ECB-0004', 700, 0, 15, 20, 5),
(20, 'Xe điện đôi', 'ECB-0005', 0, 'ECB-0005', 700, 0, 15, 20, 5);

INSERT INTO `couple_electric_bike` (`id`, `bikeId`, `battery`, `estimatingTime`) VALUES
(1, 16, 11, 0),
(2, 17, 30, 30),
(3, 18, 38, 30),
(4, 19, 94, 105),
(5, 20, 62, 60);