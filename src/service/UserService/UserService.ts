import { Database } from "../db";
import { UserServiceInterface } from "./UserServiceInterface";

class UserService implements UserServiceInterface {
    
    checkUserRented(userId: string) {
        return new Promise((resolve, reject) => {
            
            const query = `SELECT * FROM user_ecobike WHERE id = ${userId}`;
            Database.getConnectDb().query(query, (err, result) => {
                if(err) return reject(err);
                resolve(result);
            })
        })
    }

    updateUser(bikeId, transactionId) {
        return new Promise((resolve, reject) => {
            
            const query = `UPDATE user_ecobike SET user_ecobike.bikeId=${bikeId},user_ecobike.paymentTransactionId="${transactionId}"`;
            Database.getConnectDb().query(query, (err, result) => {
                if(err) return reject(err);
                resolve(result);
            })
        })
    }
    
    getRentBikeByUserId(userId: string) {
        return new Promise((resolve, reject) => {
            
            const query = `SELECT bike.id,bike.category,bike.barcode,bike.licensePlate,bike.deposit,bike.rentalPrice1,bike.rentalPrice2,bike.rentalPrice3,bike.parkingId,payment_transaction.createdAt FROM bike,user_ecobike,payment_transaction WHERE user_ecobike.id = ${userId} AND user_ecobike.bikeId=bike.id AND payment_transaction.transactionId = user_ecobike.paymentTransactionId;`;
            Database.getConnectDb().query(query, (err, result) => {
                if(err) return reject(err);
                resolve(result);
            })
        })
    }
}


export { UserService };