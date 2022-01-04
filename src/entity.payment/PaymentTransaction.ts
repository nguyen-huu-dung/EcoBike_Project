import { CreditCard } from "./CreditCard";

class PaymentTransaction {
    
    private card : CreditCard;
    private command : string;
    private transactionContent : string;
    private createdAt : string;
    private transactionId : string;
    private invoiceId : string;

    constructor(command, transactionContent, createdAt, invoiceId) {
        this.command = command;
        this.transactionContent = transactionContent;
        this.createdAt = createdAt;
        this.invoiceId = invoiceId;
    }

    public savePaymentTransaction() : void {

    }

}

export { PaymentTransaction };