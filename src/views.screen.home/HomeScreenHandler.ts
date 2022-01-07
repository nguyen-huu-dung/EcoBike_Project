import { HomeController } from "../controller/HomeController";
import { BaseScreenHandler } from "../views.screen/BaseScreenHandler";
import { Configs } from "../utils/Configs";

/**
 * class định nghĩa các attribute và method cho màn hình home
 */
class HomeScreenHandler extends BaseScreenHandler {

    /**
     * phương thức khởi tạo class
     */
    constructor() {
        super();
        this.setBController(new HomeController());
    }

    /**
     * phương thức lấy ra toàn bộ bãi xe trong db và hiển thị ra màn hình home
     */
    public async getAllParking() {
        let data = await this.getBController().getAllParking();
        this.show(Configs.VIEW_HOME_PATH, { data });
    }

    /**
     * phương thức lấy ra các bãi xe có từ khóa cần tìm và hiển thị ra màn hình home
     */
    public async searchParking() {
        let data = await this.getBController().searchParking(this.getReq().body.search);
        this.show(Configs.VIEW_HOME_PATH, { data });    
    }  

    // getter và setter
    public getBController(): HomeController {
        return super.getBController() as HomeController;
    }
}

export { HomeScreenHandler }