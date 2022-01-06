import { RuntimeException } from "./RuntimeException";

class SQLException extends RuntimeException {
    constructor() {
        super("Xảy ra lỗi khi kết nối tới database");
    }
}

export { SQLException };