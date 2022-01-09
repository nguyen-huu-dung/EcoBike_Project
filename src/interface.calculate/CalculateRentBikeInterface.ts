/**
 * @author Dang Tung Lam
 */
interface CalculateRentBikeInterface {
    
    /**
     * Phương thức tính số tiền thuê
     * @param beginTime : Thời gian bắt đầu
     * @param rentalPrice : Giá thuê
     */
    calculateRentBike(beginTime: string, rentalPrice);

}

export { CalculateRentBikeInterface };