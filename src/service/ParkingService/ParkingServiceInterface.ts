/**
 * @author Do Minh Hoang,Nguyen Cong Vinh
 */
interface ParkingServiceInterface {
    
    /**
     * Phương thức lấy tất cả thông tin của bãi xe
     * @returns Parking[] Or Error
     */
    getAllParking() : Promise<any>;

    /**
     * Phương thức lấy thông tin của bãi xe theo parkingId
     * @param parkingId : Id của bãi xe
     * @returns Parking Or Error
     */
    getParkingById(parkingId : string) : Promise<any>;

    /**
     * Phương thức lấy số xe đơn khả dụng có thể thuê trong bãi xe
     * @param id : Id của bãi xe
     */
    getNumFreeSingleBikeByParkingId(id: string) : Promise<any>;

    /**
     * Phương thức lấy số xe đôi khả dụng có thể thuê trong bãi xe
     * @param id : Id của bãi xe
     */
    getNumFreeCoupleBikeByParkingId(id: string) : Promise<any>;

    /**
     * Phương thức lấy số xe điện khả dụng có thể thuê trong bãi xe
     * @param id : Id của bãi xe
     */
    getNumFreeElectricBikeByParkingId(id: string) : Promise<any>;
}

export { ParkingServiceInterface };