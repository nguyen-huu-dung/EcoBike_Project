import { Router } from "express";
import { DetailsParkingScreenHandler } from "../views.screen.parking/DetailsParkingScreenHandler";
import { HomeScreenHandler } from "../views.screen.home/HomeScreenHandler";
import { SplashScreenHandler } from "../views.screen/SplashScreenHandler";

const router = Router();

router.get('/', (req, res) => new SplashScreenHandler(req, res, 'SplashScreen').show());

router.get('/home', (req, res) => {
    const homeScreenHandler = new HomeScreenHandler(req, res, 'HomeScreen')
    const key : String = req.query.search as String;
    if(key === undefined || key === null) {
        homeScreenHandler.show();
    }
    else {
        homeScreenHandler.search(key);
    }
});

router.get('/parking', (req, res) => new DetailsParkingScreenHandler(req, res, 'DetailsParkingScreen'));

router.get('/confirm-rent-bike', (req, res) => {
    res.render('ConfirmRentBikeScreen');
})

router.get('/payment', (req, res) => {
    res.render('PaymentScreen');
})

router.get('/result', (req, res) => {
    res.render('ResultScreen');
})

router.get('/rent-bike', (req, res) => {
    res.render('RentBikeScreen');
})

router.get('/return-bike', (req, res) => {
    res.render('ReturnBikeScreen');
})

export default router;