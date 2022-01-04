import { CreditCard } from "entity.payment/CreditCard";
import { PaymentTransaction } from "entity.payment/PaymentTransaction";
import { InterbankSubsystemController } from "../subsystem.interbank/InterbankSubsystemController";
import { InterbankInterface } from "./InterbankInterface";

class InterbankSubsystem implements InterbankInterface {

    private interbankSubsystemController : InterbankSubsystemController;

    constructor() {
        this.interbankSubsystemController = new InterbankSubsystemController();
    }

    public pay(card: CreditCard, amount: number, contents: string) {
        return this.interbankSubsystemController.pay(card, amount, contents);
    }

    public async refund(card: CreditCard, amount: number, contents: string) {
        return this.interbankSubsystemController.refund(card, amount, contents);
    }
}

export { InterbankSubsystem };