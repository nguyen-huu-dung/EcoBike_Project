import { PaymentTransaction } from "../entity.payment/PaymentTransaction";
import { CreditCard } from "../entity.payment/CreditCard";

interface InterbankInterface {

    payOrder(card : CreditCard, amount : Number, contents : String) : PaymentTransaction;

    refund(card : CreditCard, amount : Number, contents : String) : PaymentTransaction;
}

export { InterbankInterface };