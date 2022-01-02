class Invoice {
    
    private id : String;
    private totalPrice : Number;
    private bikeId : String;
    private createdAt : String;

    public saveInvoice() : void {

    }

    public getId() : String {
        return this.id;
    }

    public setId(id: String) : Invoice {
        this.id = id;
        return this;
    }

    public getTotalPrice() : Number {
        return this.totalPrice;
    }

    public setTotalPrice(totalPrice: Number) : Invoice {
        this.totalPrice = totalPrice;
        return this;
    }

    public getBikeId() : String {
        return this.bikeId;
    }

    public setBikeId(bikeId: String) : Invoice {
        this.bikeId = bikeId
        return this;
    }

    public getCreatedAt() : String {
        return this.createdAt;
    }

    public setCreatedAt(createdAt: String) : Invoice {
        this.createdAt = createdAt;
        return this;
    }
}

export { Invoice };