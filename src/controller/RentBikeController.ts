import { BaseController } from "./BaseController";
import { SingleBikeService } from "../service/BikeService/SingleBikeService";
import { CoupleBikeService } from "../service/BikeService/CoupleBikeService";
import { ElectricBikeService } from "../service/BikeService/ElectricBikeService";
import { Invoice } from "../entity.invoice/Invoice";
import { SingleBike } from "../entity.bike/SingleBike";
import { CoupleBike } from "../entity.bike/CoupleBike";
import { ElectricBike } from "../entity.bike/ElectricBike";
import { paymentScreenHandler } from "../routers";
import { InvoiceService } from "../service/InvoiceService/InvoiceService";

class RentBikeController extends BaseController {

    private bike : any;

    constructor() {
        super();
    }

    public setBike(category) {
        switch(category) {
            case "Xe đạp đơn": {
                this.bike =  new SingleBike().setBikeServiceInterface(new SingleBikeService());
                return
            }
            case "Xe đạp đôi": {
                this.bike = new CoupleBike().setBikeServiceInterface(new CoupleBikeService());
            }
            case "Xe đạp điện": {
                this.bike = new ElectricBike().setBikeServiceInterface(new ElectricBikeService());
            }
            default: return
        }
        // this.bike = new Bike().setBikeServiceInterface(this.getBikeService(category));
    }

    // private getBikeService(category: string) : BikeServiceInterface {
    //     switch(category) {
    //         case "Xe đạp đơn": return ;
    //         case "Xe đạp đôi": return new CoupleBikeService();
    //         case "Xe đạp điện": return new ();
    //         default: return
    //     }
    // }
    
    public async rentBike(bikeId : string) {
        const bike =  await this.bike.getBikeById(bikeId);
        const invoice = Invoice.createInvoice(bike, bike.deposit, new InvoiceService());
        return invoice;
    }


    public async invoiceRent(invoice : Invoice) {
        paymentScreenHandler.setInvoice(invoice).requestToPayment();
    }
}

export { RentBikeController };