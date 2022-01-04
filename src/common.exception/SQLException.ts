import { RuntimeException } from "./RuntimeException";

class SQLException extends RuntimeException {
    constructor(message) {
        super(message);
    }
}

export { SQLException };