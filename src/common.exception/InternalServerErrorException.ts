import { PaymentException } from "./PaymentException";

class InternalServerErrorException extends PaymentException {
    constructor() {
        super("Lỗi kết nối tới server interbank");
    }
}

export { InternalServerErrorException };