import { CreditCard } from "./CreditCard";

class PaymentTransaction {
    
    private card : CreditCard;
    private command : String;
    private transactionContent : String;
    private amount : Number;
    private createdAt : String;
    private transactionId : String;

    public savePaymentTransaction() : void {

    }

}

export { PaymentTransaction };