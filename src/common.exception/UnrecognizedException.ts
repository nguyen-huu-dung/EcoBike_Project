import { PaymentException } from "./PaymentException";

class UnrecognizedException extends PaymentException {
    constructor() {
        super("Lỗi không nhận diện");
    }
}

export { UnrecognizedException };