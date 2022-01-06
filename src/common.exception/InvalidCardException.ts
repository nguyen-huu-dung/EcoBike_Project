import { PaymentException } from "./PaymentException";

class InvalidCardException extends PaymentException {
    constructor() {
        super("Thẻ không hợp lệ");
    }
}

export { InvalidCardException };