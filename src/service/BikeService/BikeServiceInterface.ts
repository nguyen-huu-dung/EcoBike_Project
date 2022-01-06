interface BikeServiceInterface {

    getAllBike() : Promise<any>;

    getBikeById(bikeId : string) : Promise<any>;
    
    updateIsRentedBikeById(bikeId : string, value : number) : Promise<any>;

    updateParkingIdById(bikeId : string, parkingId : string) : Promise<any>;
}

export { BikeServiceInterface };