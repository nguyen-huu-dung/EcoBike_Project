import { PaymentException } from "./PaymentException";

class NotEnoughBalanceException extends PaymentException {
    constructor() {
        super("Không đủ số dư");
    }
}

export { NotEnoughBalanceException };