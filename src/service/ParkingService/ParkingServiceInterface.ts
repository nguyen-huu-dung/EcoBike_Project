interface ParkingServiceInterface {
    
    getAllParking() : Promise<any>;

    getParkingById(parkingId : string) : Promise<any>;

    getNumFreeSingleBikeByParkingId(id: string) : Promise<any>;

    getNumFreeCoupleBikeByParkingId(id: string) : Promise<any>;

    getNumFreeElectricBikeByParkingId(id: string) : Promise<any>;
}

export { ParkingServiceInterface };