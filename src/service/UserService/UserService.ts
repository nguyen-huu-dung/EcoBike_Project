import { Database } from "../db";
import { UserServiceInterface } from "./UserServiceInterface";

class UserService implements UserServiceInterface {

    updateUser(bikeId, transactionId) {
        return new Promise((resolve, reject) => {
            
            const query = `UPDATE user_ecobike SET user_ecobike.rentBikeId=${bikeId},user_ecobike.rentBikePaymentTransactionId="${transactionId}"`;
            Database.getConnectDb().query(query, (err, result) => {
                if(err) return reject(err);
                resolve(result);
            })
        })
    }
    
}


export { UserService };