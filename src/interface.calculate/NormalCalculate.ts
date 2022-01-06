import { Utils } from "../utils/Utils";
import { CalculateRentBikeInterface } from "./CalculateRentBikeInterface";

class NormalCalculate implements CalculateRentBikeInterface {
    
    calculateRentBike(beginTime: string, rentalPrice: any) {
        const currentTime = Date.now();
        const beginRentBikeTime = Utils.changeStringToDate(beginTime).getTime();
        const minutes = 100;
        let amount = 0;
        if(minutes < 15) {
            amount = rentalPrice[0];
        }
        if(minutes < 30) {
            amount = rentalPrice[1];
        }
        else {
            amount += rentalPrice[2] * Math.ceil((minutes - 30)/15);
        }
        return { totalRentBike: amount ,totalRentTime: minutes};
    }
    
}

export { NormalCalculate };