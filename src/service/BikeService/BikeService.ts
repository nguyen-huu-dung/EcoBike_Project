import { BikeServiceInterface } from "./BikeServiceInterface";

class BikeService implements BikeServiceInterface {


    public getAllBikeByParkingId(): Promise<any> {
        throw new Error("Method not implemented.");
    }


    public getBikeById(): Promise<any> {
        throw new Error("Method not implemented.");
    }
}

export { BikeService };