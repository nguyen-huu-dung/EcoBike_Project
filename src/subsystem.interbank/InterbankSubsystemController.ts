import { PaymentTransaction } from "../entity.payment/PaymentTransaction";
import { CreditCard } from "../entity.payment/CreditCard";
import { InterbankBoundary } from "./InterbankBoundary";

class InterbankSubsystemController {
    
    private static interbankBoundary : InterbankBoundary = new InterbankBoundary();
    
    public payOrder(card : CreditCard, amount : number, contents : string) : void{

    }

    public refund(card : CreditCard, amount : number, contents : string) : void{

    }
}

export { InterbankSubsystemController };