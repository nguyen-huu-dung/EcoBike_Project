import { Database } from '../db';
import { ParkingServiceInterface } from "./ParkingServiceInterface";

class ParkingService implements ParkingServiceInterface {
    
    getAllParking() {
        let query = "SELECT * FROM parking";
        console.log(2);
        Database.getConnectDb().query(query, (err, result) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log(result);
        })
    }
    
}

export { ParkingService };