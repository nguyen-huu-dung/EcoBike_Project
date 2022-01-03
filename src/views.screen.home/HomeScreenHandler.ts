import { Parking } from "../entity.parking/Parking";
import { HomeController } from "../controller/HomeController";
import { BaseScreenHandler } from "../views.screen/BaseScreenHandler";

class HomeScreenHandler extends BaseScreenHandler {

    constructor(req, res, viewPath) {
        super(req, res, viewPath);
        this.setBController(new HomeController());
    }

    public async show() {
        try {
            let listParking = await this.getBController().getAllParking();
            this.setContent({listParking});
            super.show();
        } catch (error) {
            
        }
    }

    public search(key: String) : void {
        try {
            let listParking: Array<Parking> = this.getBController().searchParking(key);
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