CREATE TABLE parking (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100),
    address VARCHAR(255),
    area double,
    numSingle INT,
    numCouple INT,
    numElectric INT,
    PRIMARY KEY (id)
);

CREATE TABLE user_ecobike(
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(100),
    rentBikeId INT NOT NULL,
    rentBikePaymentTransactionId VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);
    

CREATE TABLE bike (
    id INT NOT NULL AUTO_INCREMENT,
    category VARCHAR(45) NOT NULL,
    barcode VARCHAR(45) NOT NULL,
    isRented TINYINT,
    licensePlate VARCHAR(45) NOT NULL,
    deposit INT NOT NULL,
    rentalPrice1 INT NOT NULL,
    rentalPrice2 INT NOT NULL,
    rentalPrice3 INT NOT NULL,
    parkingId INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (parkingId) REFERENCES parking(id)
);

CREATE TABLE single_bike (
    id INT NOT NULL AUTO_INCREMENT,
    bikeId INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (bikeId) REFERENCES bike(id)
);

CREATE TABLE couple_bike (
    id INT NOT NULL AUTO_INCREMENT,
    bikeId INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (bikeId) REFERENCES bike(id)
);

CREATE TABLE electric_bike (
    id INT NOT NULL AUTO_INCREMENT,
    bikeId INT NOT NULL,
    battery INT NOT NULL,
    estimatingTime INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (bikeId) REFERENCES bike(id)
);

CREATE TABLE payment_transaction(
    transactionId VARCHAR(100) NOT NULL ,
    transactionContent  VARCHAR(100),
    command  VARCHAR(100),
    createdAt DATETIME,
    bikeId INT,
    PRIMARY KEY (transactionId)
);


CREATE TABLE rental_invoice(
    id INT NOT NULL AUTO_INCREMENT,
    totalPrice INT,
    bikeId INT,
    createdAt DATETIME,
    paymentTransactionId VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (bikeId) REFERENCES bike(id),
    FOREIGN KEY (paymentTransactionId) REFERENCES payment_transaction(transactionId)
);

INSERT INTO user_ecobike(username,
    rentBikeId,rentBikePaymentTransactionId) VALUES (
        "admin",0,"0"
    );

INSERT INTO parking(name,
    address,
    area ,
    numSingle,
    numCouple,
    numElectric) VALUES (
        "Bãi xe Hai Bà Trưng","35 Trần Đại Nghĩa,Hà Nội", 75.57, 11,5,8
    );

INSERT INTO parking(name,
    address,
    area,
    numSingle,
    numCouple,
    numElectric) VALUES (
        "Bãi xe Hoàng Mai","100 Hoàng Liệt,Hà Nội", 100, 21,15,18
    );

INSERT INTO parking(name,
    address,
    area,
    numSingle,
    numCouple,
    numElectric) VALUES (
        "Bãi xe Long Biên","135 Nguyễn Văn Cừ Hà Nội", 86.67, 13,7,9
    );

INSERT INTO parking(name,
    address,
    area,
    numSingle,
    numCouple,
    numElectric) VALUES (
        "Bãi xe Gia Lâm","45 Đặng Xá,Hà Nội", 75.57, 11,5,8
    );


INSERT INTO parking(name,
    address,
    area,
    numSingle,
    numCouple,
    numElectric) VALUES (
        "Bãi xe Ba Đình","100 Trần Phú,Hà Nội", 85.67, 31,15,18
    );

INSERT INTO bike(category ,barcode,isRented,licensePlate,deposit ,rentalPrice1,rentalPrice2,rentalPrice3,parkingId)VALUES("Xe đạp đơn","SB-0001",0,"SB-0001",400,0,15,5,4);
INSERT INTO bike(category ,barcode,isRented,licensePlate,deposit ,rentalPrice1,rentalPrice2,rentalPrice3,parkingId)VALUES("Xe đạp đơn","SB-0002",0,"SB-0002",400,0,15,5,2);
INSERT INTO bike(category ,barcode,isRented,licensePlate,deposit ,rentalPrice1,rentalPrice2,rentalPrice3,parkingId)VALUES("Xe đạp đơn","SB-0003",0,"SB-0003",400,0,15,5,1);
INSERT INTO bike(category ,barcode,isRented,licensePlate,deposit ,rentalPrice1,rentalPrice2,rentalPrice3,parkingId)VALUES("Xe đạp đơn","SB-0004",0,"SB-0004",400,0,15,5,1);
INSERT INTO bike(category ,barcode,isRented,licensePlate,deposit ,rentalPrice1,rentalPrice2,rentalPrice3,parkingId)VALUES("Xe đạp đơn","SB-0005",0,"SB-0005",400,0,15,5,4);
INSERT INTO single_bike(bikeId) VALUES(1);
INSERT INTO single_bike(bikeId) VALUES(2);
INSERT INTO single_bike(bikeId) VALUES(3);
INSERT INTO single_bike(bikeId) VALUES(4);
INSERT INTO single_bike(bikeId) VALUES(5);
INSERT INTO bike(category ,barcode,isRented,licensePlate,deposit ,rentalPrice1,rentalPrice2,rentalPrice3,parkingId)VALUES("Xe đạp đôi","CB-0001",0,"CB-0001",550,0,15,10,4);
INSERT INTO bike(category ,barcode,isRented,licensePlate,deposit ,rentalPrice1,rentalPrice2,rentalPrice3,parkingId)VALUES("Xe đạp đôi","CB-0002",0,"CB-0002",550,0,15,10,3);
INSERT INTO bike(category ,barcode,isRented,licensePlate,deposit ,rentalPrice1,rentalPrice2,rentalPrice3,parkingId)VALUES("Xe đạp đôi","CB-0003",0,"CB-0003",550,0,15,10,2);
INSERT INTO bike(category ,barcode,isRented,licensePlate,deposit ,rentalPrice1,rentalPrice2,rentalPrice3,parkingId)VALUES("Xe đạp đôi","CB-0004",0,"CB-0004",550,0,15,10,2);
INSERT INTO bike(category ,barcode,isRented,licensePlate,deposit ,rentalPrice1,rentalPrice2,rentalPrice3,parkingId)VALUES("Xe đạp đôi","CB-0005",0,"CB-0005",550,0,15,10,3);
INSERT INTO couple_bike(bikeId) VALUES(6);
INSERT INTO couple_bike(bikeId) VALUES(7);
INSERT INTO couple_bike(bikeId) VALUES(8);
INSERT INTO couple_bike(bikeId) VALUES(9);
INSERT INTO couple_bike(bikeId) VALUES(10);
INSERT INTO bike(category ,barcode,isRented,licensePlate,deposit ,rentalPrice1,rentalPrice2,rentalPrice3,parkingId)VALUES("Xe đạp điện","EB-0001",0,"EB-0001",700,0,15,10,5);
INSERT INTO bike(category ,barcode,isRented,licensePlate,deposit ,rentalPrice1,rentalPrice2,rentalPrice3,parkingId)VALUES("Xe đạp điện","EB-0002",0,"EB-0002",700,0,15,10,1);
INSERT INTO bike(category ,barcode,isRented,licensePlate,deposit ,rentalPrice1,rentalPrice2,rentalPrice3,parkingId)VALUES("Xe đạp điện","EB-0003",0,"EB-0003",700,0,15,10,4);
INSERT INTO bike(category ,barcode,isRented,licensePlate,deposit ,rentalPrice1,rentalPrice2,rentalPrice3,parkingId)VALUES("Xe đạp điện","EB-0004",0,"EB-0004",700,0,15,10,5);
INSERT INTO bike(category ,barcode,isRented,licensePlate,deposit ,rentalPrice1,rentalPrice2,rentalPrice3,parkingId)VALUES("Xe đạp điện","EB-0005",0,"EB-0005",700,0,15,10,5);
INSERT INTO electric_bike(bikeId,battery,estimatingTime) VALUES(11,11,0);
INSERT INTO electric_bike(bikeId,battery,estimatingTime) VALUES(12,30,30);
INSERT INTO electric_bike(bikeId,battery,estimatingTime) VALUES(13,38,30);
INSERT INTO electric_bike(bikeId,battery,estimatingTime) VALUES(14,94,105);
INSERT INTO electric_bike(bikeId,battery,estimatingTime) VALUES(15,62,60);






