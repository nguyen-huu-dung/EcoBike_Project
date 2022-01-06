import { EcoBikeException } from "./EcoBikeException";

class NoRentBikeException extends EcoBikeException {
    constructor() {
        super("Chưa có xe nào được thuê");
    }
}

export { NoRentBikeException };