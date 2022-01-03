import { Parking } from "../entity.parking/Parking";
import { HomeController } from "../controller/HomeController";
import { BaseScreenHandler } from "../views.screen/BaseScreenHandler";

class HomeScreenHandler extends BaseScreenHandler {

    constructor(req, res, viewPath) {
        super(req, res, viewPath);
        this.setBController(new HomeController());
    }

    public async show() : Promise<void> {
        try {
            let listParking : Parking[] = await this.getBController().getAllParking();
            this.setContent({listParking});
            super.show();
        } catch (error) {
            
        }
    }

    public async search(key: string) : Promise<void> {
        try {
            let listParking : Parking[] = await this.getBController().searchParking(key);
            this.setContent({listParking});
            super.show();    
        } catch (error) {
            
        }
    }  

    public getBController(): HomeController {
        return super.getBController() as HomeController;
    }
}

export { HomeScreenHandler }