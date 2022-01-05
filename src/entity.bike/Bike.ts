import { BikeServiceInterface } from '../service/BikeService/BikeServiceInterface';

class Bike {

    protected bikeServiceInterface : BikeServiceInterface;

    protected id: string;
    protected category: string;
    protected barcode: string;
    protected isRented: number;
    protected deposit: number;
    protected licensePlate: string;
    protected rentalPrice: Array<number>;
    protected parkingName: string;
    protected parkingId: string;

    constructor() {

    }

    public async getAllBike(): Promise<Bike[]> {
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
            console.log(error);
        }
    }

    public async getBikeById(bikeId: string): Promise<any> {
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
            console.log(error);
        }
    }

    public async updateIsRentedBikeById(bikeId : string, value : number) {
        try {
            const updateBike = await this.bikeServiceInterface.updateIsRentedBikeById(bikeId, value);
            return updateBike;
        } catch (error) {
            
        }
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