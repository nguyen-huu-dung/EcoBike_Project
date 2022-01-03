class Invoice {
    
    private id : string;
    private totalPrice : number;
    private bikeId : string;
    private createdAt : string;

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

    public getBikeId() : string {
        return this.bikeId;
    }

    public setBikeId(bikeId: string) : Invoice {
        this.bikeId = bikeId
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