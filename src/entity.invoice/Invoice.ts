import { Bike } from "../entity.bike/Bike";
import { PaymentTransaction } from "../entity.payment/PaymentTransaction";
import { InvoiceServiceInterface } from "../service/InvoiceService/InvoiceServiceInterface";
import { Utils } from "../utils/Utils";

class Invoice {
    
    private invoiceServiceInterface : InvoiceServiceInterface;

    private totalPrice : number;
    private bike : Bike;
    private createdAt : string;
    private paymentTransaction : PaymentTransaction;

    constructor() {

    }

    public static createInvoice(bike, totalPrice, invoiceServiceInterface) {
        return new Invoice().setBike(bike)
                            .setTotalPrice(totalPrice)
                            .setCreatedAt(Utils.getTimeNow())
                            .setInvoiceServiceInterface(invoiceServiceInterface);
    }

    public saveInvoice() : void {
        try {
            this.invoiceServiceInterface.saveInvoice(this);
        } catch (error) {
            
        }
    }

    public setInvoiceServiceInterface(invoiceServiceInterface : InvoiceServiceInterface) : Invoice {
        this.invoiceServiceInterface = invoiceServiceInterface;
        return this;
    }

    public getTotalPrice() : number {
        return this.totalPrice;
    }

    public setTotalPrice(totalPrice: number) : Invoice {
        this.totalPrice = totalPrice;
        return this;
    }

    public getBike() : Bike {
        return this.bike;
    }

    public setBike(bike: Bike) : Invoice {
        this.bike = bike;
        return this;
    }

    public getCreatedAt() : string {
        return this.createdAt;
    }

    public setCreatedAt(createdAt: string) : Invoice {
        this.createdAt = createdAt;
        return this;
    }

    public getPaymentTransaction() : PaymentTransaction {
        return this.paymentTransaction;
    }

    public setPaymentTransaction(paymentTransaction : PaymentTransaction) : Invoice {
        this.paymentTransaction = paymentTransaction;
        return this;
    }
}

export { Invoice };