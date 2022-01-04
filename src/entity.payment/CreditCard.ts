class  CreditCard {
    
    private cardCode : string;
    private owner : string;
    private cvvCode : string;
    private dateExpired: string;

    constructor() {

    }

    public checkCreditCardFormat() {
        return true;
    }

    public getCardCode() : string {
        return this.cardCode;
    }

    public setCardCode(cardCode : string) : CreditCard {
        this.cardCode = cardCode;
        return this;
    }

    public getOwner() : string {
        return this.owner;
    }

    public setOwner(owner : string) : CreditCard {
        this.owner = owner;
        return this;
    }

    public getCvvCode() : string {
        return this.cvvCode;
    }

    public setCvvCode(cvvCode : string) : CreditCard {
        this.cvvCode = cvvCode;
        return this;
    }

    public getDateExpired() : string {
        return this.dateExpired;
    }

    public setDateExpired(dateExpired : string) : CreditCard {
        this.dateExpired = dateExpired;
        return this;
    }
}

export { CreditCard };