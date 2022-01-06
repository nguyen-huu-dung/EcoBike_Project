import { PaymentException } from "./PaymentException";

class InvalidVersionException extends PaymentException {
    constructor() {
        super("Thiếu thông tin version");
    }
}

export { InvalidVersionException };