import { Database } from '../db';
import { ParkingServiceInterface } from "./ParkingServiceInterface";

class ParkingService implements ParkingServiceInterface {
    
    public getAllParking() : Promise<any> {
        return new Promise ((resolve, reject) => {

            const query = "SELECT * FROM parking";

            Database.getConnectDb().query(query, (err, result) => {
                if(err) return reject(err);
                resolve(result);
            })
        })
    }
    
    getNumFreeSingleBikeByParkingId(id: string) : Promise<any> {
        return new Promise ((resolve, reject) => {

            const query = `SELECT COUNT * FROM bike where isRented = 0 and parkingId = ${id} and category = "Xe đạp đơn"`;

            Database.getConnectDb().query(query, (err, result) => {
                if(err) return reject(err);
                resolve(result);
            })
        })
    }
    getNumFreeCoupleBikeByParkingId(id: string) : Promise<any> {
        return new Promise ((resolve, reject) => {

            const query = `SELECT COUNT (* FROM bike where isRented = 0 and parkingId = ${id} and category = "Xe đạp đôi"`;

            Database.getConnectDb().query(query, (err, result) => {
                if(err) return reject(err);
                resolve(result);
            })
        })
    }
    getNumFreeElectricBikeByParkingId(id: string) : Promise<any> {
        return new Promise ((resolve, reject) => {

            const query = `SELECT COUNT (*) FROM bike where isRented = 0 and parkingId = ${id} and category = "Xe đạp điện"`;

            Database.getConnectDb().query(query, (err, result) => {
                if(err) return reject(err);
                resolve(result);
            })
        })
    }

}

export { ParkingService };