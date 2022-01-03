import * as data from '../../assets/db/bike.json';

class Bike {

    protected id: string;
    protected category: string;
    protected barcode: string;
    protected isRented: Boolean;
    protected deposit: number;
    protected licensePlate: string;
    protected rentalPrice: Array<number>;
    protected parkingId: string;

    constructor() {

    }

    public static getAllBikes(parkingId: string): any {
        // let listBike : Array<Bike> = [];
        // data.forEach((bike) => {
        //     if(bike.parkingId === parkingId && !bike.isRented ) {
        //         listBike.push(this.getBikeById(bike.id));
        //     }
        // })
        // return listBike;
    }

    public getBikeById(bikeId: string): any {
        // let bike : any = data.filter((bike) => bike.id === bikeId)[0];
        // const { id, category, barcode, isRented, deposit, licensePlate, rentalPrice, parkingId } = bike;
        // bike = new Bike(id, category, barcode, isRented, deposit, licensePlate, rentalPrice, parkingId);
        // return bike;
    }

    public getId() : string {
        return this.id;
    }

    private setId(id: string) : Bike {
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

    public getIsRented() : Boolean {
        return this.isRented;
    }

    public setIsRented(isRented: Boolean) : Bike {
        this.isRented = isRented;
        return this;
    }

    public getDeposit() : number {
        return this.deposit;
    }

    public setDeposite(deposit: number) : Bike {
        this.deposit = deposit;
        return this;
    }

    public getLicensePlate() : string {
        return this.licensePlate;
    }

    public setLicensePlatee(licensePlate: string) : Bike {
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

    private setParkingId(parkingId: string) : Bike {
        this.parkingId = parkingId;
        return this;
    }
}

export { Bike };