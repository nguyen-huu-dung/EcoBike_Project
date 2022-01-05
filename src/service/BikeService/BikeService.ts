import { Database } from "../db";
import { BikeServiceInterface } from "./BikeServiceInterface";

class BikeService implements BikeServiceInterface {


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
        throw new Error("Method not implemented.");
    }

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

export { BikeService };