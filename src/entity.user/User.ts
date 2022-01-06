import { RentedBikeBeforeException } from "../common.exception/RentedBikeBeforeException";
import { SQLException } from "../common.exception/SQLException";
import { UserServiceInterface } from "../service/UserService/UserServiceInterface";

class User {

    private userServiceInterface : UserServiceInterface;

    constructor() {
        
    }

    public async getRentBikeByUserId(userId : string) {
        try {
            const response = await this.userServiceInterface.getRentBikeByUserId(userId);
            return { bike: response[0], error: false };
        } catch (error) {
            return new SQLException().getError();
        }
    }

    public async checkRentedBike(userId : string) {
        try {
            const user = await this.userServiceInterface.checkUserRented(userId);
            if(user[0].bikeId != 0) {
                return new RentedBikeBeforeException().getError();
            }
            return true;
        } catch (error) {
            console.log(error);
            return new SQLException().getError();
        }
    }

    public setUserServiceInterface(userServiceInterface : UserServiceInterface) : User {
        this.userServiceInterface = userServiceInterface;
        return this;
    }
}

export { User };