import * as data from '../../assets/db/bike.json';

class Bike {

    protected id: String;
    protected category: String;
    protected barcode: String;
    protected isRented: Boolean;
    protected deposit: Number;
    protected licensePlate: String;
    protected rentalPrice: Array<Number>;
    protected parkingId: String;

    constructor(...params: any[]) {
        if(params.length === 8) {
            this.id = params[0];
            this.category = params[1];
            this.barcode = params[2];
            this.isRented = params[3];
            this.deposit = params[4];
            this.licensePlate = params[5];
            this.rentalPrice = params[6];
            this.parkingId = params[7];
        }
    }

    public getAllAvailabilityBikes(parkingId: String): Array<Bike> {
        let listBike : Array<Bike> = [];
        data.forEach((bike) => {
            if(bike.parkingId === parkingId && !bike.isRented ) {
                listBike.push(this.getBikeById(bike.id));
            }
        })
        return listBike;
    }

    public getBikeById(bikeId: String): Bike {
        let bike : any = data.filter((bike) => bike.id === bikeId)[0];
        const { id, category, barcode, isRented, deposit, licensePlate, rentalPrice, parkingId } = bike;
        bike = new Bike(id, category, barcode, isRented, deposit, licensePlate, rentalPrice, parkingId);
        return bike;
    }

    public getId() : String {
        return this.id;
    }

    private setId(id: String) : Bike {
        this.id = id;
        return this;
    }

    public getCategory() : String {
        return this.category;
    }

    public setCategory(category: String) : Bike {
        this.category = category;
        return this;
    }

    public getBarcode() : String {
        return this.barcode;
    }

    public setBarcode(barcode: String) : Bike {
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

    public getDeposit() : Number {
        return this.deposit;
    }

    public setDeposite(deposit: Number) : Bike {
        this.deposit = deposit;
        return this;
    }

    public getLicensePlate() : String {
        return this.licensePlate;
    }

    public setLicensePlatee(licensePlate: String) : Bike {
        this.licensePlate = licensePlate;
        return this;
    }

    public getRentalPrice() : Array<Number> {
        return this.rentalPrice;
    }

    public setRentalPrice(rentalPrice: Array<Number>) : Bike {
        this.rentalPrice = rentalPrice;
        return this;
    }

    public getParkingId() : String {
        return this.parkingId;
    }

    private setParkingId(parkingId: String) : Bike {
        this.parkingId = parkingId;
        return this;
    }
}

export { Bike };