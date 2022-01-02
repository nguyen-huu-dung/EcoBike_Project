import { PaymentTransaction } from "../entity.payment/PaymentTransaction";
import { CreditCard } from "../entity.payment/CreditCard";
import { InterbankBoundary } from "./InterbankBoundary";

class InterbankSubsystemController {
    
    private static interbankBoundary : InterbankBoundary = new InterbankBoundary();
    
    public payOrder(card : CreditCard, amount : Number, contents : String) : void{

    }

    public refund(card : CreditCard, amount : Number, contents : String) : void{

    }
}

export { InterbankSubsystemController };