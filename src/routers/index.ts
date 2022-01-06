import { Router } from "express";
import { DetailsParkingScreenHandler } from "../views.screen.parking/DetailsParkingScreenHandler";
import { HomeScreenHandler } from "../views.screen.home/HomeScreenHandler";
import { SplashScreenHandler } from "../views.screen/SplashScreenHandler";
import { InvoiceRentScreenHandler } from "../views.screen.rent/InvoiceRentScreenHandler";
import { Configs } from '../utils/Configs';
import { PaymentScreenHandler } from '../views.screen.payment/PaymentScreenHandler';
import { RentBikeScreenHandler } from '../views.screen.rent/RentBikeScreenHandler';
import { ReturnBikeScreenHandler } from "../views.screen.return/ReturnBikeScreenHandler";

const splashScreenHandler : SplashScreenHandler = new SplashScreenHandler();
const homeScreenHandler : HomeScreenHandler = new HomeScreenHandler();
const detailsParkingScreenController : DetailsParkingScreenHandler = new DetailsParkingScreenHandler();
const invoiceRentScreenHandler : InvoiceRentScreenHandler = new InvoiceRentScreenHandler();
export const paymentScreenHandler : PaymentScreenHandler = new PaymentScreenHandler();
const rentBikeScreenHandler : RentBikeScreenHandler = new RentBikeScreenHandler();
const returnBikeScreenHandler : ReturnBikeScreenHandler = new ReturnBikeScreenHandler();

const router = Router();

router.get('/', (req, res) => {
    splashScreenHandler.setReq(req)
                        .setRes(res)
                        .show(Configs.VIEW_SPLASH_PATH, {});
});

router.get('/home', (req, res) => {
    homeScreenHandler.setReq(req).setRes(res);
    homeScreenHandler.getAllParking();
});

router.post('/home', (req, res) => {
    homeScreenHandler.setReq(req).setRes(res);
    homeScreenHandler.searchParking();
})

router.post('/parking', (req, res) => {
    detailsParkingScreenController.setReq(req).setRes(res);
    detailsParkingScreenController.getParkingById();
});

router.post('/confirm-rent-bike', (req, res) => {
    invoiceRentScreenHandler.setReq(req).setRes(res);
    invoiceRentScreenHandler.rentBike();
})

router.post('/payment', (req, res) => {
    paymentScreenHandler.setReq(req).setRes(res);
    if(req.body.type === "rent") {
        invoiceRentScreenHandler.setReq(req).setRes(res);
        invoiceRentScreenHandler.invoiceRent();
    }
    else if (req.body.type === "return") {
        returnBikeScreenHandler.setReq(req).setRes(res);
        returnBikeScreenHandler.requestReturnBike();
    }
})

router.post('/result', (req, res) => {
    paymentScreenHandler.setReq(req).setRes(res);
    paymentScreenHandler.confirmPayment();
})

router.post('/rent-bike', (req, res) => {
    rentBikeScreenHandler.setReq(req).setRes(res);
    rentBikeScreenHandler.getRentBike();
})

router.post('/return-bike', (req, res) => {
    returnBikeScreenHandler.setReq(req).setRes(res);
    returnBikeScreenHandler.getAllAvailabilityParking();
})

export default router;