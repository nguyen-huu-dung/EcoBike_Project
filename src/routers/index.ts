import { CreditCard } from '../entity.payment/CreditCard';
import { Router } from "express";
import { DetailsParkingScreenHandler } from "../views.screen.parking/DetailsParkingScreenHandler";
import { HomeScreenHandler } from "../views.screen.home/HomeScreenHandler";
import { SplashScreenHandler } from "../views.screen/SplashScreenHandler";
import { ConfirmRentBikeScreenHandler } from "../views.screen.rent/ConfirmRentBikeScreenHandler";
import { InterbankSubsystemController } from '../subsystem.interbank/InterbankSubsystemController';
import { Configs } from '../utils/Configs';
import { PaymentScreenHandler } from '../views.screen.payment/PaymentScreenHandler';

const splashScreenHandler : SplashScreenHandler = new SplashScreenHandler();
const homeScreenHandler : HomeScreenHandler = new HomeScreenHandler();
const detailsParkingScreenController : DetailsParkingScreenHandler = new DetailsParkingScreenHandler();
const confirmRentBikeScreenHandler : ConfirmRentBikeScreenHandler = new ConfirmRentBikeScreenHandler();
export const paymentScreenHandler : PaymentScreenHandler = new PaymentScreenHandler();

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
    confirmRentBikeScreenHandler.setReq(req).setRes(res);
    confirmRentBikeScreenHandler.rentBike();
})

router.post('/payment', (req, res) => {
    confirmRentBikeScreenHandler.setReq(req).setRes(res);
    paymentScreenHandler.setReq(req).setRes(res);
    confirmRentBikeScreenHandler.confirmRentBike();
})

router.post('/result', (req, res) => {
    paymentScreenHandler.setReq(req).setRes(res);
    paymentScreenHandler.confirmPayment();
})

router.get('/rent-bike', (req, res) => {
    
})

router.get('/return-bike', (req, res) => {
    res.render('ReturnBikeScreen');
})

export default router;