import { InvalidCardException } from "../common.exception/InvalidCardException";

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

    public checkCardCodeFormat(cardCode : string) {
        const regex =  new RegExp('[a-zA-Z0-9_]');
        if(!cardCode.match(regex)) {
            return new InvalidCardException().getError();
        }
        return { error: false };
    }

    public checkOwnerCardFormat(owner : string) {
        const regex =  new RegExp('[a-zA-Z0-9 ]');
        if(!owner.match(regex)) {
            return new InvalidCardException().getError();
        }
        return { error: false };
    }

    public checkCvvCodeFormat(cvvCode : string) {
        const regex =  new RegExp('[0-9, (4)]');
        if(!cvvCode.match(regex)) {
            return new InvalidCardException().getError();
        }
        return { error: false };
    }

    public checkDateExpiredFormat(date : string) {
        const regex =  new RegExp('[a-zA-Z0-9_]');
        if(!date.match(regex)) {
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