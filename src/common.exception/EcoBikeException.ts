import { RuntimeException } from "./RuntimeException";

class EcoBikeException extends RuntimeException {
    constructor(message : string) {
        super(message)
    }
}

export { EcoBikeException };