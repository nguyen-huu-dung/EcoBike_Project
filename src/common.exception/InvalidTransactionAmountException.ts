import { PaymentException } from "./PaymentException";

class InvalidTransactionAmountException extends PaymentException {
    constructor() {
        super("Không đủ thông tin giao dịch");
    }
}

export { InvalidTransactionAmountException };