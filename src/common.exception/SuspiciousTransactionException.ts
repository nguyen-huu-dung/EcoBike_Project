import { PaymentException } from "./PaymentException";

class SuspiciousTransactionException extends PaymentException {
    constructor() {
        super("Giao dịch nghi ngờ gian lận");
    }
}

export { SuspiciousTransactionException };