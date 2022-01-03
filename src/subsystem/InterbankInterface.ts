import { PaymentTransaction } from "../entity.payment/PaymentTransaction";
import { CreditCard } from "../entity.payment/CreditCard";

interface InterbankInterface {

    payOrder(card : CreditCard, amount : number, contents : string) : PaymentTransaction;

    refund(card : CreditCard, amount : number, contents : string) : PaymentTransaction;
}

export { InterbankInterface };