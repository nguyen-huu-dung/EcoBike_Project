import { Database } from "../db";
import { Invoice } from "../../entity.invoice/Invoice";
import { InvoiceServiceInterface } from "./InvoiceServiceInterface";

class InvoiceService implements InvoiceServiceInterface {
    
    saveInvoice(invoice : Invoice) {
        return new Promise((resolve, reject) => {

            const query = `INSERT INTO rental_invoice (totalPrice, createdAt, bikeId, paymentTransactionId) VALUES (${invoice.getTotalPrice()}, "${invoice.getCreatedAt()}", ${invoice.getBike().getId()}, "${invoice.getPaymentTransaction().getTransactionId()}")`;
            
            Database.getConnectDb().query(query, (err, result) => {
                if(err) return reject(err);
                resolve(result);
            })
        });
    }

}

export { InvoiceService };