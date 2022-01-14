/**
 * @author Dang Tung Lam, Nguyen Huu Dung
 */
import { Utils } from '../utils/Utils';
import { SQLException } from '../common.exception/SQLException';
import { BikeServiceInterface } from '../service/BikeService/BikeServiceInterface';
import { CalculateRentBikeInterface } from "../interface.calculate/CalculateRentBikeInterface";
import { BikeService } from 'service/BikeService/BikeService';

class Bike {

    protected bikeServiceInterface : BikeServiceInterface;
    protected calculateRentBikeInterface : CalculateRentBikeInterface;

    protected id: string;
    protected category: string;
    protected barcode: string;
    protected isRented: number;
    protected deposit: number;
    protected licensePlate: string;
    protected rentalPrice: Array<number>;
    protected parkingName: string;
    protected parkingId: string;

    /**
     * Phương thức khởi tạo
     */
    constructor() {

    }
    

    /**
     * Phương thức lấy thông tin tất cả xe
     * @returns : Bike[] Or Error
     */
    public async getAllBike() {
        try {
            let list = await this.bikeServiceInterface.getAllBike();
            list = list.map((bike) => {
                const newBike = new Bike()
                                    .setId(bike.id)
                                    .setCategory(bike.category)
                                    .setBarcode(bike.barcode)
                                    .setIsRented(bike.isRented)
                                    .setLicensePlate(bike.licensePlate)
                                    .setParkingId(bike.parkingId);
                return newBike;
            })
            return list;
        } catch (error) {
            return new SQLException().getError();
        }
    }

    /**
     * Phương thức lấy thông tin của xe theo Id
     * @param bikeId : Id của xe cần lấy thông tin
     * @returns : Bike Or Error
     */
    public async getBikeById(bikeId: string) {
        try {
            const bike = await this.bikeServiceInterface.getBikeById(bikeId);
            const newBike : Bike = new Bike()
                                        .setId(bike.id)
                                        .setCategory(bike.category)
                                        .setBarcode(bike.barcode)
                                        .setIsRented(bike.isRented)
                                        .setDeposit(bike.deposit)
                                        .setLicensePlate(bike.licensePlate)
                                        .setRentalPrice([bike.rentalPrice1, bike.rentalPrice2, bike.rentalPrice3])
                                        .setParkingName(bike.name)
                                        .setParkingId(bike.parkingId)
                                        .setBikeServiceInterface(this.bikeServiceInterface);
            return newBike;
        } catch (error) {
            return new SQLException().getError();
        }
    }

    /**
     * Phương thức cập nhật trạng thái của xe theo Id
     * @param bikeId : Id của xe
     * @param value : Giá trị biểu thị trạng thái của xe[0: Chưa được thuê - 1: Đã được thuê]
     * @returns Object Or Error
     */
    public async updateIsRentedBikeById(bikeId : string, value : number) {
        try {
            const updateBike = await this.bikeServiceInterface.updateIsRentedBikeById(bikeId, value);
            return updateBike;
        } catch (error) {
            return new SQLException().getError();
        }
    } 

    /**
     * Phương thức cập nhật id của bãi xe theo id của xe
     * @param bikeId : Id của xe 
     * @param parkingId : Id của bãi xe
     * @returns Object Or Error
     */
    public async updateParkingIdByBikeId(bikeId : string, parkingId : string) {
        try {
            const updateBike = await this.bikeServiceInterface.updateParkingIdByBikeId(bikeId, parkingId);
            return updateBike;
        } catch (error) {
            return new SQLException().getError();
        }
    }

    /**
     * Phương thức tính số tiền thuê xe
     * @param beginTime : Thời gian bắt đầu
     * @param rentalPrice : Giá thuê xe 
     * @returns 
     */
    public calculateRentBike(beginTime : string, rentalPrice) {
        return this.calculateRentBikeInterface.calculateRentBike(beginTime, rentalPrice);
    }

   /// Getter vs Setter
    public setCalculateRentBikeInterface(calculateRentBikeInterface : CalculateRentBikeInterface) : Bike {
        this.calculateRentBikeInterface = calculateRentBikeInterface;
        return this;
    } 

    public setBikeServiceInterface(bikeServiceInterface : BikeServiceInterface) : Bike {
        this.bikeServiceInterface = bikeServiceInterface;
        return this;
    }

    public getId() : string {
        return this.id;
    }

    public setId(id: string) : Bike {
        this.id = id;
        return this;
    }

    public getCategory() : string {
        return this.category;
    }

    public setCategory(category: string) : Bike {
        this.category = category;
        return this;
    }

    public getBarcode() : string {
        return this.barcode;
    }

    public setBarcode(barcode: string) : Bike {
        this.barcode = barcode;
        return this;
    }

    public getIsRented() : number {
        return this.isRented;
    }

    public setIsRented(isRented: number) : Bike {
        this.isRented = isRented;
        return this;
    }

    public getDeposit() : number {
        return this.deposit;
    }

    public setDeposit(deposit: number) : Bike {
        this.deposit = deposit;
        return this;
    }

    public getLicensePlate() : string {
        return this.licensePlate;
    }

    public setLicensePlate(licensePlate: string) : Bike {
        this.licensePlate = licensePlate;
        return this;
    }

    public getRentalPrice() : Array<number> {
        return this.rentalPrice;
    }

    public setRentalPrice(rentalPrice: Array<number>) : Bike {
        this.rentalPrice = rentalPrice;
        return this;
    }

    public getParkingId() : string {
        return this.parkingId;
    }

    public setParkingId(parkingId: string) : Bike {
        this.parkingId = parkingId;
        return this;
    }

    public getParkingName() : string {
        return this.parkingName;
    }

    public setParkingName(parkingName: string) : Bike {
        this.parkingName = parkingName;
        return this;
    }
}

export { Bike };