import { PaymentTransaction } from "../entity.payment/PaymentTransaction";
import { CreditCard } from "../entity.payment/CreditCard";

interface InterbankInterface {

    pay(card : CreditCard, amount : number, contents : string);

    refund(card : CreditCard, amount : number, contents : string);
}

export { InterbankInterface };