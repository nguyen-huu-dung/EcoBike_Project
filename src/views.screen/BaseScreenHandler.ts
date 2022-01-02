import { BaseController } from "../controller/BaseController";

class BaseScreenHandler {
    
    protected req;
    protected res;
    protected content;
    protected viewPath;
    private bController: BaseController;

    constructor(req, res, viewPath) {
        this.req = req;
        this.res = res;
        this.viewPath = viewPath;
    }

    public show() : void {
        this.res.render(this.viewPath, this.content);
    }

    public setContent(content: any) : void {
        this.content = content;
    } 

    public setBController(bController: BaseController):void {
        this.bController = bController;
    }

    public getBController(): BaseController{ 
        return this.bController;
    }
}

export { BaseScreenHandler };
