import { Router } from "express";
import { DetailsParkingScreenHandler } from "../views.screen.parking/DetailsParkingScreenHandler";
import { HomeScreenHandler } from "../views.screen.home/HomeScreenHandler";
import { SplashScreenHandler } from "../views.screen/SplashScreenHandler";
import { DetailsBikeScreenHandler } from "../views.screen.rent/DetailsBikeScreenHandler";
import { Configs } from '../utils/Configs';
import { PaymentScreenHandler } from '../views.screen.payment/PaymentScreenHandler';
import { RentBikeScreenHandler } from '../views.screen.rent/RentBikeScreenHandler';
import { ReturnBikeScreenHandler } from "../views.screen.return/ReturnBikeScreenHandler";

// Khởi tạo các screen handler của các màn hình
const splashScreenHandler : SplashScreenHandler = new SplashScreenHandler();
const homeScreenHandler : HomeScreenHandler = new HomeScreenHandler();
const detailsParkingScreenHandler : DetailsParkingScreenHandler = new DetailsParkingScreenHandler();
const detailsBikeScreenHandler : DetailsBikeScreenHandler = new DetailsBikeScreenHandler();
export const paymentScreenHandler : PaymentScreenHandler = new PaymentScreenHandler();
const rentBikeScreenHandler : RentBikeScreenHandler = new RentBikeScreenHandler();
const returnBikeScreenHandler : ReturnBikeScreenHandler = new ReturnBikeScreenHandler();

// định nghĩa ra các tuyến đường path đến server
const router = Router();

/**
 *  phương thức get
 *  path : /,
 *  hiển thị màn hình splash
 */
router.get('/', (req, res) => {
    splashScreenHandler.setReq(req)
                        .setRes(res)
                        .show(Configs.VIEW_SPLASH_PATH, {});
});

/**
 * phương thức get
 * path: /home
 * hiển thị màn hình home
 * lấy toàn bộ parking trong db
 */
router.get('/home', (req, res) => {
    homeScreenHandler.setReq(req).setRes(res);
    homeScreenHandler.getAllParking();
});

/**
 * phương thức post
 * path: /home
 * hiển thị màn hình home
 * trả về kết quả tìm kiếm bãi xe
 */
router.post('/home', (req, res) => {
    homeScreenHandler.setReq(req).setRes(res);
    homeScreenHandler.searchParking();
})

/**
 * phương thức post
 * path: /parking
 * hiển thị màn hình details parking
 */
router.post('/parking', (req, res) => {
    detailsParkingScreenHandler.setReq(req).setRes(res);
    detailsParkingScreenHandler.getParkingById();
});

/**
 * phương thức post
 * path: /details-bike
 * hiển thị màn hình details bike
 */
router.post('/details-bike-bike', (req, res) => {
    detailsBikeScreenHandler.setReq(req).setRes(res);
    detailsBikeScreenHandler.rentBike();
})

/**
 * phương thức post
 * path: /payment
 * hiển thị màn hình payment
 * điều hướng hai loại màn hình: thanh toán khi thuê xe ( đặt cọc xe) và thanh toán khi trả xe dựa vào trường type trong req.body
 */
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

/**
 * phương thức post
 * path: /result
 * hiển thị màn hình result
 */
router.post('/result', (req, res) => {
    paymentScreenHandler.setReq(req).setRes(res);
    paymentScreenHandler.confirmPayment();
})

/**
 * phương thức post 
 * path: /rent-bike
 * hiển thị màn hình rent bike
 */
router.post('/rent-bike', (req, res) => {
    rentBikeScreenHandler.setReq(req).setRes(res);
    rentBikeScreenHandler.getRentBike();
})

/**
 * phương thức post
 * path: /return-bike
 * hiển thị màn hình return bike
 */
router.post('/return-bike', (req, res) => {
    returnBikeScreenHandler.setReq(req).setRes(res);
    returnBikeScreenHandler.getAllAvailabilityParking();
})

export default router;