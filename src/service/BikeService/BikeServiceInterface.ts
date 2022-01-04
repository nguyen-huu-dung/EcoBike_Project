interface BikeServiceInterface {

    getAllBike() : Promise<any>;

    getBikeById(bikeId : string) : Promise<any>;
}

export { BikeServiceInterface };