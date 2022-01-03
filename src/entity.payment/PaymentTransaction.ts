import { CreditCard } from "./CreditCard";

class PaymentTransaction {
    
    private card : CreditCard;
    private command : string;
    private transactionContent : string;
    private amount : number;
    private createdAt : string;
    private transactionId : string;

    public savePaymentTransaction() : void {

    }

}

export { PaymentTransaction };