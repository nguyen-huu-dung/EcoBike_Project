/**
 * @author Nguyen Cong Vinh
 */
interface UserServiceInterface {

    /**
     * Phương thức kiểm tra user đã thuê xe hay chưa
     * @param userId : Id của user
     * @returns : Boolean Or Error
     */
    checkUserRented(userId: string);

    /**
     * Phương thức cập nhật lại thông tin user
     * @param bikeId : Id của xe
     * @param transactionId : Id của giao dịch
     */
    updateUser(bikeId : string, transactionId : string);

    /**
     * Phương thức lấy thông tin xe đang thuê của user
     * @param userId : Id của user
     * @returns Bike Or Error
     */
    getRentBikeByUserId(userId : string);

}

export { UserServiceInterface };