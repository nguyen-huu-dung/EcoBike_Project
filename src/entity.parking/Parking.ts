import { Utils } from '../utils/Utils';
import { Bike } from '../entity.bike/Bike';
import { ParkingServiceInterface } from '../service/ParkingService/ParkingServiceInterface';
import { BikeService } from '../service/BikeService/BikeService';
import { SQLException } from '../common.exception/SQLException';

class Parking {

    private parkingServiceInterface : ParkingServiceInterface;

    private id: string;
    private name: string;
    private address: string;
    private area: number;
    private numSingle: number;
    private numCouple: number;
    private numElectric: number;
    private numFreeSingle: number;
    private numFreeCouple: number;
    private numFreeElectric: number;
    private availabilityBikes: Array<any>;

    constructor() {

    }

    public async getAllParking() : Promise<Parking[]> {
        try {
            let list : Array<any> = await this.parkingServiceInterface.getAllParking();
            let listParking : Array<Parking> = await Promise.all(list.map(async (parking, index) => {
                const numFreeSingle : number = await this.parkingServiceInterface.getNumFreeSingleBikeByParkingId(parking.id);
                const numFreeCouple : number = await this.parkingServiceInterface.getNumFreeCoupleBikeByParkingId(parking.id);
                const numFreeElectric :number = await this.parkingServiceInterface.getNumFreeElectricBikeByParkingId(parking.id);
                const newParking : Parking = new Parking()
                                        .setId(parking.id)
                                        .setName(parking.name)
                                        .setAddress(parking.address)
                                        .setNumFreeSingle(numFreeSingle)
                                        .setNumFreeCouple(numFreeCouple)
                                        .setNumFreeElectric(numFreeElectric);
                return newParking;
            }))
            return listParking;
        } catch (error) {
            console.log(error);
        }
    }

    public async searchParking(key: string): Promise<Parking[]> {
        try {
            let list : Array<any> = await this.parkingServiceInterface.getAllParking();
            const keyFormat : string = Utils.cleanAccents(key);
            list = list.filter((parking) => {
                const nameFormat = Utils.cleanAccents(parking.name);
                const addressFormat = Utils.cleanAccents(parking.address);
                return (nameFormat.toLocaleLowerCase().includes(keyFormat as string) || addressFormat.toLocaleLowerCase().includes(keyFormat as string))
            })
            let searchParking : Array<Parking> = await Promise.all(list.map(async (parking, index) => {
                const numFreeSingle : number = await this.parkingServiceInterface.getNumFreeSingleBikeByParkingId(parking.id);
                const numFreeCouple : number = await this.parkingServiceInterface.getNumFreeCoupleBikeByParkingId(parking.id);
                const numFreeElectric :number = await this.parkingServiceInterface.getNumFreeElectricBikeByParkingId(parking.id);
                const newParking : Parking = new Parking()
                                        .setId(parking.id)
                                        .setName(parking.name)
                                        .setAddress(parking.address)
                                        .setNumFreeSingle(numFreeSingle)
                                        .setNumFreeCouple(numFreeCouple)
                                        .setNumFreeElectric(numFreeElectric);
                return newParking;
            }))
            return searchParking;
        } catch (error) {
            console.log(error);
        }
    }

    public async getParkingById(parkingId: string): Promise<Parking> {
        try {
            const parking = await this.parkingServiceInterface.getParkingById(parkingId);
            const numFreeSingle : number = await this.parkingServiceInterface.getNumFreeSingleBikeByParkingId(parking.id);
            const numFreeCouple : number = await this.parkingServiceInterface.getNumFreeCoupleBikeByParkingId(parking.id);
            const numFreeElectric :number = await this.parkingServiceInterface.getNumFreeElectricBikeByParkingId(parking.id);
            const newParking : Parking = new Parking()
                                    .setId(parking.id)
                                    .setName(parking.name)
                                    .setAddress(parking.address)
                                    .setArea(parking.area)
                                    .setNumSingle(parking.numSingle)
                                    .setNumCouple(parking.numCouple)
                                    .setNumElectric(parking.numElectric)
                                    .setNumFreeSingle(numFreeSingle)
                                    .setNumFreeCouple(numFreeCouple)
                                    .setNumFreeElectric(numFreeElectric);
            const availabilityBikes = (await new Bike().setBikeServiceInterface(new BikeService()).getAllBike()).filter((bike : Bike) => bike.getIsRented() === 0 && bike.getParkingId() == parkingId);
            newParking.setAvailabilityBikes(availabilityBikes);
            return newParking;
        } catch (error) {
            console.log(error);
        }
    }

    public async getAllAvailabilityParking() {
        try {
            const listAllParking = await this.getAllParking();
        } catch (error) {
            
        }
    }

    public setParkingService(parkingServiceInterface : ParkingServiceInterface) : Parking {
        this.parkingServiceInterface = parkingServiceInterface;
        return this;
    }

    public getId() : string {
        return this.id;
    }

    private setId(id: string) : Parking {
        this.id = id;
        return this;
    }

    public getName() : string {
        return this.name;
    }

    public setName(name: string) : Parking {
        this.name = name;
        return this;
    }

    public getAddress() : string {
        return this.address;
    }

    public setAddress(address: string) : Parking {
        this.address = address;
        return this;
    }

    public getArea() : number {
        return this.area;
    }

    public setArea(area: number) : Parking {
        this.area = area;
        return this;
    }

    public getNumSingle() : number {
        return this.numSingle;
    }

    public setNumSingle(numSingle: number) : Parking {
        this.numSingle = numSingle;
        return this;
    }

    public getNumCouple() : number {
        return this.numCouple;
    }

    public setNumCouple(numCouple: number) : Parking {
        this.numCouple = numCouple;
        return this;
    }

    public getNumElectric() : number {
        return this.numElectric;
    }

    public setNumElectric(numElectric: number) : Parking {
        this.numElectric = numElectric;
        return this;
    }

    public getNumFreeSingle() : number {
        return this.numFreeSingle;
    }

    public setNumFreeSingle(numFreeSingle: number) : Parking {
        this.numFreeSingle = numFreeSingle;
        return this;
    }
    public getNumFreeCouple() : number {
        return this.numFreeCouple;
    }

    public setNumFreeCouple(numFreeCouple: number) : Parking {
        this.numFreeCouple = numFreeCouple;
        return this;
    }
    public getNumFreeElectric() : number {
        return this.numFreeElectric;
    }

    public setNumFreeElectric(numFreeElectric: number) : Parking {
        this.numFreeElectric = numFreeElectric;
        return this;
    }

    public getAvailabilityBikes() : Array<any> {
        return this.availabilityBikes;
    }

    public setAvailabilityBikes(availabilityBikes: Array<any>) : Parking {
        this.availabilityBikes = availabilityBikes;
        return this;
    }
}

export { Parking };