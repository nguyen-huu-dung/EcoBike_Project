import { Database } from "../db";
import { BikeServiceInterface } from "./BikeServiceInterface";

class CoupleBikeService implements BikeServiceInterface {


    public getAllBike(): Promise<any> {
        return new Promise((resolve, reject) => {

            const query = `SELECT * FROM bike`;

            Database.getConnectDb().query(query, (err, result) => {
                if(err) return reject(err);
                resolve(result);
            })
        })
    }


    public getBikeById(bikeId : string): Promise<any> {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM bike, couple_bike, parking where bike.id = ${bikeId} and couple_bike.bikeId = ${bikeId} and bike.parkingId = parking.id`;

            Database.getConnectDb().query(query, (err, result) => {
                if(err) return reject(err);
                resolve(result[0]);
            })
        })
    }
}

export { CoupleBikeService };