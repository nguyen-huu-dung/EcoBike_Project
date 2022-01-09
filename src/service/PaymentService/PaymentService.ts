/**
 * @author Nguyen Huu Dung, Dang Tung Lam
 */
import { PaymentTransaction } from "entity.payment/PaymentTransaction";
import { Database } from "../db";
import { PaymentServiceInterface } from "./PaymentServiceInterface";

class PaymentService implements PaymentServiceInterface {

    /**
     * Phương thức dùng để truy vấn database
     */
    savePaymentTransaction(paymentTransaction: PaymentTransaction) {
        return new Promise((resolve, reject) => {

            const query = `INSERT INTO payment_transaction (transactionId, transactionContent, command, createdAt) VALUES ("${paymentTransaction.getTransactionId()}", "${paymentTransaction.getTransactionContent()}", "${paymentTransaction.getCommand()}", "${paymentTransaction.getCreatedAt()}")`;
            
            Database.getConnectDb().query(query, (err, result) => {
                if(err) return reject(err);
                resolve(result);
            })
        })
    }
    
}

export { PaymentService };