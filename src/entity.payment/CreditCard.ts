class  CreditCard {
    
    private cardCode : string;
    private owner : string;
    private cvvCode : string;
    private dateExpired: string;

    constructor(cardCode, owner, cvvCode, dateExpired) {
        this.cardCode = cardCode;
        this.owner = owner;
        this.cvvCode = cvvCode;
        this.dateExpired = dateExpired;
    }
}

export { CreditCard };