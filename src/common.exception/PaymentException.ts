import { RuntimeException } from "./RuntimeException";

class PaymentException extends RuntimeException {
    constructor(message) {
        super(message);
    }
}

export { PaymentException };