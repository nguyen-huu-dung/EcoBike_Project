interface ParkingServiceInterface {
    
    getAllParking() : any;

    getNumFreeSingleBikeByParkingId(id: string) : any;

    getNumFreeCoupleBikeByParkingId(id: string) : any;

    getNumFreeElectricBikeByParkingId(id: string) : any;
}

export { ParkingServiceInterface };