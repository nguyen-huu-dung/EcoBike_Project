import { BaseScreenHandler } from "./BaseScreenHandler";

class SplashScreenHandler extends BaseScreenHandler {

    constructor(req, res, viewPath) {
        super(req, res, viewPath);
        this.show();
    }
    
}

export { SplashScreenHandler };