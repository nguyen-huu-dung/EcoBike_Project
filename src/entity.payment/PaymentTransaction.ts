import { PaymentServiceInterface } from "../service/PaymentService/PaymentServiceInterface";
import { CreditCard } from "./CreditCard";

class PaymentTransaction {
    
    private card : CreditCard;
    private command : string;
    private transactionContent : string;
    private createdAt : string;
    private transactionId : string;
    private paymentServiceInterface : PaymentServiceInterface;

    constructor(command, transactionContent, createdAt, transactionId) {
        this.command = command;
        this.transactionContent = transactionContent;
        this.createdAt = createdAt;
        this.transactionId = transactionId;
    }

    public savePaymentTransaction() : void {
        return this.paymentServiceInterface.savePaymentTransaction(this);
    }

    public setPaymentServiceInterface(paymentServiceInterface : PaymentServiceInterface) : PaymentTransaction {
        this.paymentServiceInterface = paymentServiceInterface;
        return this;
    }

    public getTransactionId() : string {
        return this.transactionId;
    }

    public getTransactionContent() : string {
        return this.transactionContent;
    }

    public getCommand() : string {
        return this.command;
    }

    public getCreatedAt() : string {
        return this.createdAt;
    }
}

export { PaymentTransaction };