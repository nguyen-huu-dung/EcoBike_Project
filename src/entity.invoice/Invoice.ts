import { Utils } from "../utils/Utils";

class Invoice {
    
    private id : string;
    private totalPrice : number;
    private bike : any;
    private createdAt : string;

    constructor() {

    }

    public static createInvoice(bike, totalPrice) {
        return new Invoice().setBike(bike).setTotalPrice(totalPrice).setCreatedAt(Utils.getTimeNow());
    }

    public saveInvoice() : void {
        
    }

    public getId() : string {
        return this.id;
    }

    public setId(id: string) : Invoice {
        this.id = id;
        return this;
    }

    public getTotalPrice() : number {
        return this.totalPrice;
    }

    public setTotalPrice(totalPrice: number) : Invoice {
        this.totalPrice = totalPrice;
        return this;
    }

    public getBike() : string {
        return this.bike;
    }

    public setBike(bike: any) : Invoice {
        this.bike = bike;
        return this;
    }

    public getCreatedAt() : string {
        return this.createdAt;
    }

    public setCreatedAt(createdAt: string) : Invoice {
        this.createdAt = createdAt;
        return this;
    }
}

export { Invoice };