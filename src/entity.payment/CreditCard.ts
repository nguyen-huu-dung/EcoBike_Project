import { InvalidCardException } from "../common.exception/InvalidCardException";

class  CreditCard {
    
    private cardCode : string;
    private owner : string;
    private cvvCode : string;
    private dateExpired: string;

    constructor() {

    }

    public checkCreditCardFormat() {
        let check;
        check = this.checkCardCodeFormat(this.cardCode);
        if(check.error) return check;
        check = this.checkOwnerCardFormat(this.owner);
        if(check.error) return check;
        check = this.checkCvvCodeFormat(this.cvvCode);
        if(check.error) return check;
        check = this.checkDateExpiredFormat(this.dateExpired);
        return check;
    }

    public checkCardCodeFormat(cardCode : string) {
        if(cardCode === null || cardCode === undefined) {
            return new InvalidCardException().getError();
        }
        return { error: false };
    }

    public checkOwnerCardFormat(owner : string) {
        if(owner === null || owner === undefined) {
            return new InvalidCardException().getError();
        }
        return { error: false };
    }

    public checkCvvCodeFormat(cvvCode : string) {
        if(cvvCode === null || cvvCode === undefined) {
            return new InvalidCardException().getError();
        }
        return { error: false };
    }

    public checkDateExpiredFormat(date : string) {
        if(date === null || date === undefined) {
            return new InvalidCardException().getError();
        }
        return { error: false };
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