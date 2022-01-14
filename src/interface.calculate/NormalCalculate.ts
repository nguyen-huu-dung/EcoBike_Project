/**
 * @author Dang Tung Lam
 */
import { Utils } from "../utils/Utils";
import { CalculateRentBikeInterface } from "./CalculateRentBikeInterface";

class NormalCalculate implements CalculateRentBikeInterface {
    
    /**
     * Phương thức tính toán số tiền thuê
     * @param beginTime : thời gian bắt đầu thuê
     * @param rentalPrice : giá thuê
     * @returns Object
     */
    calculateRentBike(beginTime: string, rentalPrice: any) {
        const currentTime = Date.now();
        const beginRentBikeTime = Utils.changeStringToDate(beginTime).getTime();
        const minutes = Math.ceil((currentTime - beginRentBikeTime) / 1000) * 60;
        console.log(minutes);
        let amount = 0;
        console.log(rentalPrice);
        if(minutes < 15) {
            amount = rentalPrice[0];
        }
        else if(minutes < 30) {
            amount = rentalPrice[1];
        }
        else {
            amount = rentalPrice[1] + rentalPrice[2] * Math.ceil((minutes - 30)/15);
        }
        return { totalRentBike: amount ,totalRentTime: minutes};
    }
    
}

export { NormalCalculate };