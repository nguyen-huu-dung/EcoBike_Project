import { Parking } from "../entity.parking/Parking";
import { HomeController } from "../controller/HomeController";
import { BaseScreenHandler } from "../views.screen/BaseScreenHandler";

class HomeScreenHandler extends BaseScreenHandler {

    constructor(req, res, viewPath) {
        super(req, res, viewPath);
        this.setBController(new HomeController());
    }

    public show() : void {
        try {
            let listParking: Array<Parking> = this.getBController().getAllParking();
            this.setContent({listParking});
            this.show();
        } catch (error) {
            
        }
    }

    public search(key: String) : void {
        let listParking: Array<Parking> = this.getBController().searchParking(key);
        this.setContent({listParking});
        this.show();    
    }  

    public getBController(): HomeController {
        return super.getBController() as HomeController;
    }
}

export { HomeScreenHandler }