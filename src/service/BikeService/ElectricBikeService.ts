/**
 * @author Nguyen Cong Vinh,Dang Tung Lam,Nguyen Huu Dung
 */
import { Database } from "../db";
import { BikeServiceInterface } from "./BikeServiceInterface";

class ElectricBikeService implements BikeServiceInterface {
    updateParkingIdByBikeId(bikeId: string, parkingId: string): Promise<any> {
        throw new Error("Method not implemented.");
    }

    /**
     * Phương thức dùng để truy vấn database
     */
    public getAllBike(): Promise<any> {
        return new Promise((resolve, reject) => {

            const query = `SELECT * FROM bike`;

            Database.getConnectDb().query(query, (err, result) => {
                if(err) return reject(err);
                resolve(result);
            })
        })
    }


    /**
     * Phương thức dùng để truy vấn database
     */
    public getBikeById(bikeId : string): Promise<any> {
        return new Promise((resolve, reject) => {
            //const query = `SELECT * FROM bike, electric_bike, parking where bike.id = ${bikeId} and electric_bike.bikeId = ${bikeId} and bike.parkingId = parking.id`;
            const query = `SELECT bike.id,bike.category,bike.barcode,bike.isRented,bike.licensePlate,bike.deposit,bike.rentalPrice1,bike.rentalPrice2,bike.rentalPrice2,bike.rentalPrice3, electric_bike.battery, electric_bike.estimatingTime, bike.parkingId,parking.name FROM bike, electric_bike, parking where bike.id = ${bikeId} and electric_bike.bikeId = ${bikeId} and bike.parkingId = parking.id;`
            Database.getConnectDb().query(query, (err, result) => {
                if(err) return reject(err);
                resolve(result[0]);
            })
        })
    }

    /**
     * Phương thức dùng để truy vấn database
     */
    public updateIsRentedBikeById(bikeId: string, value: number): Promise<any> {
        return new Promise((resolve, reject) => {

            const query = `UPDATE bike SET bike.isRented = ${value} WHERE id = ${bikeId}`;
            Database.getConnectDb().query(query, (err, result) => {
                if(err) return reject(err);
                resolve(result);
            })
        })
    }
}

export { ElectricBikeService };