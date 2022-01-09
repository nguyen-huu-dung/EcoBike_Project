/**
 * @author Nguyen Cong Vinh,Dang Tung Lam,Nguyen Huu Dung
 */
interface BikeServiceInterface {
    /**
     * Phương thức lấy thông tin tất cả các xe
     */
    getAllBike() : Promise<any>;

    /**
     * Phương thức lấy thông tin của xe theo id
     * @param bikeId : id của xe
     */
    getBikeById(bikeId : string) : Promise<any>;
    
    /**
     * Phương thức cập nhật trạng thái thuê xe
     * @param bikeId : id của xe
     * @param value : giá trị biểu thị trạng thái thuê xe(0-Chưa thuê, 1-Đã thuê)
     */
    updateIsRentedBikeById(bikeId : string, value : number) : Promise<any>;

    /**
     * Phương thức cập nhật id của bãi xe
     * @param bikeId : id của xe
     * @param parkingId : id của bãi xe
     */
    updateParkingIdByBikeId(bikeId : string, parkingId : string) : Promise<any>;
}

export { BikeServiceInterface };