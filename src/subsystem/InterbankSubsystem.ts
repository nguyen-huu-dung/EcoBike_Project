import { CreditCard } from "entity.payment/CreditCard";
import { PaymentTransaction } from "entity.payment/PaymentTransaction";
import { InterbankSubsystemController } from "../subsystem.interbank/InterbankSubsystemController";
import { InterbankInterface } from "./InterbankInterface";

class InterbankSubsystem implements InterbankInterface {

    private interbankSubsystemController : InterbankSubsystemController;

    constructor() {
        this.interbankSubsystemController = new InterbankSubsystemController();
    }

    payOrder(card: CreditCard, amount: Number, contents: String): PaymentTransaction {
        
    }

    refund(card: CreditCard, amount: Number, contents: String): PaymentTransaction {
        
    }
}

export { InterbankSubsystem };