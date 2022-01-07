import { paymentScreenHandler } from '../routers';
import { BikeService } from '../service/BikeService/BikeService';
import { ParkingService } from "../service/ParkingService/ParkingService";
import { Parking } from "../entity.parking/Parking";
import { BaseController } from "./BaseController";
import { Bike } from "../entity.bike/Bike";
import { Invoice } from "../entity.invoice/Invoice";
import { InvoiceService } from '../service/InvoiceService/InvoiceService';

class ReturnBikeController extends BaseController {

    private parking : Parking;
    private bike : Bike;

    constructor() {
        super();
        this.parking = new Parking().setParkingService(new ParkingService());
        this.bike = new Bike().setBikeServiceInterface(new BikeService());
    }

    public getAllAvailabilityParking(category : string) {
        return this.parking.getAllAvailabilityParking(category);
    }

    public async returnBike({ bikeId , totalRentBike }) {
        const bike = await this.bike.getBikeById(bikeId);
        // console.log(bike);
        const invoice = Invoice.createInvoice(bike, totalRentBike, new InvoiceService());
        paymentScreenHandler.setInvoice(invoice).requestToPayment();
    }
}

export { ReturnBikeController };