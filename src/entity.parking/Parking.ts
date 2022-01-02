import { Utils } from '../utils/Utils';
import * as data from '../../assets/db/parking.json';
import { Bike } from '../entity.bike/Bike';

class Parking {

    private id: String;
    private name: String;
    private address: String;
    private area: Number;
    private numSingle: Number;
    private numCouple: Number;
    private numElectric: Number;
    private numFreeSingle: Number;
    private numFreeCouple: Number;
    private numFreeElectric: Number;
    private availabilityBikes: Array<Bike>;

    constructor(...params : any[]) {
        if(params.length === 10) {
            this.id = params[0];
            this.name = params[1];
            this.address = params[2];
            this.area = params[3];
            this.numSingle = params[4];
            this.numCouple = params[5];
            this.numElectric = params[5];
            this.numFreeSingle = params[7];
            this.numFreeCouple = params[8];
            this.numFreeElectric = params[9];
        }
    }

    public getAllParking(): Array<Parking> {
        let listParking : Array<Parking> = [];
        data.forEach((parking) => {
            const { id, name, address, area, numSingle, numCouple, numElectric, numFreeSingle, numFreeCouple, numFreeElectric } = parking;
            listParking.push(new Parking(id, name, address, area, numSingle, numCouple, numElectric, numFreeSingle, numFreeCouple, numFreeElectric));
        })
        return listParking;
    }

    public searchParking(key: String): Array<Parking> {
        let keyFormat: String = Utils.cleanAccents(key);
        let searchParking: Array<Parking> = [];
        data.forEach((parking) => {
            let nameFormat = Utils.cleanAccents(parking.name);
            let addressFormat = Utils.cleanAccents(parking.address);
            if(nameFormat.toLocaleLowerCase().includes(keyFormat as string) || addressFormat.toLocaleLowerCase().includes(keyFormat as string)) {
                const { id, name, address, area, numSingle, numCouple, numElectric, numFreeSingle, numFreeCouple, numFreeElectric } = parking;
                searchParking.push(new Parking(id, name, address, area, numSingle, numCouple, numElectric, numFreeSingle, numFreeCouple, numFreeElectric));
            };
        })
        return searchParking;
    }

    public getParkingById(id: String): Parking {
        let parkingFilter : any = data.filter((parking) => parking.id === id)[0];
        const { name, address, area, numSingle, numCouple, numElectric, numFreeSingle, numFreeCouple, numFreeElectric } = parkingFilter;
        let parking = new Parking(id, name, address, area, numSingle, numCouple, numElectric, numFreeSingle, numFreeCouple, numFreeElectric);
        parking.setAvailabilityBikes(new Bike().getAllAvailabilityBikes(id));
        return parking;
    }

    public getId() : String {
        return this.id;
    }

    private setId(id: String) : Parking {
        this.id = id;
        return this;
    }

    public getName() : String {
        return this.name;
    }

    public setName(name: String) : Parking {
        this.name = name;
        return this;
    }

    public getAddress() : String {
        return this.address;
    }

    public setAddress(address: String) : Parking {
        this.address = address;
        return this;
    }

    public getArea() : Number {
        return this.area;
    }

    public setArea(area: Number) : Parking {
        this.area = area;
        return this;
    }

    public getNumSingle() : Number {
        return this.numSingle;
    }

    public setNumsingle(numSingle: Number) : Parking {
        this.numSingle = numSingle;
        return this;
    }

    public getNumCouple() : Number {
        return this.numCouple;
    }

    public setNumCouple(numCouple: Number) : Parking {
        this.numCouple = numCouple;
        return this;
    }

    public getNumElectric() : Number {
        return this.numElectric;
    }

    public setNumElectric(numElectric: Number) : Parking {
        this.numElectric = numElectric;
        return this;
    }

    public getNumFreeSingle() : Number {
        return this.numFreeSingle;
    }

    public setNumFreeSingle(numFreeSingle: Number) : Parking {
        this.numFreeSingle = numFreeSingle;
        return this;
    }
    public getNumFreeCouple() : Number {
        return this.numFreeCouple;
    }

    public setNumFreeCouple(numFreeCouple: Number) : Parking {
        this.numFreeCouple = numFreeCouple;
        return this;
    }
    public getNumFreeElectric() : Number {
        return this.numFreeElectric;
    }

    public setNumFreeElectric(numFreeElectric: Number) : Parking {
        this.numFreeElectric = numFreeElectric;
        return this;
    }

    public getAvailabilityBikes() : Array<Bike> {
        return this.availabilityBikes;
    }

    public setAvailabilityBikes(availabilityBikes: Array<Bike>) : Parking {
        this.availabilityBikes = availabilityBikes;
        return this;
    }
}

export { Parking };