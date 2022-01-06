import { Router } from "express";
import { DetailsParkingScreenHandler } from "../views.screen.parking/DetailsParkingScreenHandler";
import { HomeScreenHandler } from "../views.screen.home/HomeScreenHandler";
import { SplashScreenHandler } from "../views.screen/SplashScreenHandler";
import { DetailsBikeScreenHandler } from "../views.screen.rent/DetailsBikeScreenHandler";
import { Configs } from '../utils/Configs';
import { PaymentScreenHandler } from '../views.screen.payment/PaymentScreenHandler';
import { RentBikeScreenHandler } from '../views.screen.rent/RentBikeScreenHandler';
import { ReturnBikeScreenHandler } from "../views.screen.return/ReturnBikeScreenHandler";

const splashScreenHandler : SplashScreenHandler = new SplashScreenHandler();
const homeScreenHandler : HomeScreenHandler = new HomeScreenHandler();
const detailsParkingScreenHandler : DetailsParkingScreenHandler = new DetailsParkingScreenHandler();
const detailsBikeScreenHandler : DetailsBikeScreenHandler = new DetailsBikeScreenHandler();
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
    detailsParkingScreenHandler.setReq(req).setRes(res);
    detailsParkingScreenHandler.getParkingById();
});

router.post('/confirm-rent-bike', (req, res) => {
    detailsBikeScreenHandler.setReq(req).setRes(res);
    detailsBikeScreenHandler.rentBike();
})

router.post('/payment', (req, res) => {
    paymentScreenHandler.setReq(req).setRes(res);
    if(req.body.type === "rent") {
        detailsBikeScreenHandler.setReq(req).setRes(res);
        detailsBikeScreenHandler.confirmRentBike();
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