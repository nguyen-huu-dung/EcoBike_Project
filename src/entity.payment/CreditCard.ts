class  CreditCard {
    
    private cardCode : String;
    private owner : String;
    private cvvCode : String;
    private dateExpired: String;

    constructor(cardCode, owner, cvvCode, dateExpired) {
        this.cardCode = cardCode;
        this.owner = owner;
        this.cvvCode = cvvCode;
        this.dateExpired = dateExpired;
    }
}

export { CreditCard };