/**
 * @author Do Minh Hoang,Nguyen Cong Vinh
 */
import { Database } from '../db';
import { ParkingServiceInterface } from "./ParkingServiceInterface";

class ParkingService implements ParkingServiceInterface {
    
    /**
     * Phương thức dùng để truy vấn database
     */
    public getAllParking() : Promise<any> {
        return new Promise ((resolve, reject) => {

            const query = "SELECT * FROM parking";

            Database.getConnectDb().query(query, (err, result) => {
                if(err) return reject(err);
                resolve(result);
            })
        })
    }
    
    /**
     * Phương thức dùng để truy vấn database
     */
    public getNumFreeSingleBikeByParkingId(id: string) : Promise<any> {
        return new Promise ((resolve, reject) => {

            const query = `SELECT COUNT(*) as numFreeSingle FROM bike where isRented = 0 and parkingId = ${id} and category = "Xe đạp đơn"`;

            Database.getConnectDb().query(query, (err, result) => {
                if(err) return reject(err);
                resolve(result[0].numFreeSingle);
            })
        })
    }

    /**
     * Phương thức dùng để truy vấn database
     */
    public getNumFreeCoupleBikeByParkingId(id: string) : Promise<any> {
        return new Promise ((resolve, reject) => {

            const query = `SELECT COUNT(*) as numFreeCouple FROM bike where isRented = 0 and parkingId = ${id} and category = "Xe đạp đôi"`;

            Database.getConnectDb().query(query, (err, result) => {
                if(err) return reject(err);
                resolve(result[0].numFreeCouple);
            })
        })
    }

    /**
     * Phương thức dùng để truy vấn database
     */
    public getNumFreeElectricBikeByParkingId(id: string) : Promise<any> {
        return new Promise ((resolve, reject) => {

            const query = `SELECT COUNT(*) as numFreeElectric FROM bike where isRented = 0 and parkingId = ${id} and category = "Xe đạp điện"`;

            Database.getConnectDb().query(query, (err, result) => {
                if(err) return reject(err);
                resolve(result[0].numFreeElectric);
            })
        })
    }

    /**
     * Phương thức dùng để truy vấn database
     */
    public getParkingById(parkingId : string): Promise<any> {
        return new Promise ((resolve, reject) => {

            const query = `SELECT * FROM parking where id = ${parkingId}`;

            Database.getConnectDb().query(query, (err, result) => {
                if(err) return reject(err);
                resolve(result[0]);
            })
        })
    }
}

export { ParkingService };