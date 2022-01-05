interface BikeServiceInterface {

    getAllBike() : Promise<any>;

    getBikeById(bikeId : string) : Promise<any>;
    
    updateIsRentedBikeById(bikeId : string, value : number) : Promise<any>;
}

export { BikeServiceInterface };