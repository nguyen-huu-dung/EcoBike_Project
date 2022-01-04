import { Parking } from "../entity.parking/Parking";
import { HomeController } from "../controller/HomeController";
import { BaseScreenHandler } from "../views.screen/BaseScreenHandler";
import { Configs } from "../utils/Configs";

class HomeScreenHandler extends BaseScreenHandler {

    constructor() {
        super();
        this.setBController(new HomeController());
    }

    public async getAllParking() : Promise<void> {
        try {
            let listParking : Parking[] = await this.getBController().getAllParking();
            this.show(Configs.VIEW_HOME_PATH, { listParking });
        } catch (error) {
            
        }
    }

    public async searchParking() : Promise<void> {
        try {
            let listParking : Parking[] = await this.getBController().searchParking(this.getReq().body.search);
            this.show(Configs.VIEW_HOME_PATH, { listParking });    
        } catch (error) {
            
        }
    }  

    public getBController(): HomeController {
        return super.getBController() as HomeController;
    }
}

export { HomeScreenHandler }