import { EcoBikeException } from "./EcoBikeException";

class RentedBikeBeforeException extends EcoBikeException {
    constructor() {
        super("Bạn đã thuê xe trước đó rồi!")
    }
}

export { RentedBikeBeforeException };