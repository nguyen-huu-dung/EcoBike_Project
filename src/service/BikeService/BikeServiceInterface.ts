interface BikeServiceInterface {

    getAllBikeByParkingId () : Promise<any>;

    getBikeById () : Promise<any>;
}

export { BikeServiceInterface };