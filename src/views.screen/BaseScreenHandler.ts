import { BaseController } from "../controller/BaseController";

/**
 * class định nghĩa các attribute và phương thức chung của các màn hình
 */
class BaseScreenHandler {
    
    protected req;
    protected res;
    protected content;
    private bController: BaseController;

    constructor() {
    }

    /**
     * phương thức hiển thị ra màn hình 
     * @param viewPath đường dẫn đến màn hình tương ứng
     * @param content nội dung của màn hình
     */
    public show(viewPath : string, content : any) : void {
        this.setContent(content);
        this.res.render(viewPath , this.content);
    }

    // getter và setter
    public getReq() {
        return this.req;
    }

    public setReq(req) : BaseScreenHandler {
        this.req = req;
        return this;
    }

    public getRes() {
        return this.res;
    }

    public setRes(res) : BaseScreenHandler {
        this.res = res;
        return this;
    }

    public setContent(content: any) : BaseScreenHandler {
        this.content = content;
        return this;
    } 

    public setBController(bController: BaseController) : BaseScreenHandler {
        this.bController = bController;
        return this;
    }

    public getBController(): BaseController{ 
        return this.bController;
    }
}

export { BaseScreenHandler };
