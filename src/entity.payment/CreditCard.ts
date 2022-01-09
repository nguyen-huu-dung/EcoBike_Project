
/**
 * @author Nguyen Huu Dung, Dang Tung Lam
 */
import { InvalidCardException } from "../common.exception/InvalidCardException";

class  CreditCard {
    
    private cardCode : string;
    private owner : string;
    private cvvCode : string;
    private dateExpired: string;

    /**
     * Phương thức khởi tạo 
     */
    constructor() {

    }

    /**
     * Phương thức kiểm tra định dạng thông tin của thẻ tín dụng
     * @returns Boolean
     */
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

    /**
     * Phương thức kiểm tra định mã thẻ
     * @param cardCode : Mã thẻ
     * @returns Error
     */
    public checkCardCodeFormat(cardCode : string) {
        if(cardCode === null || cardCode === undefined) {
            return new InvalidCardException().getError();
        }
        return { error: false };
    }
    /**
     * Phương thức kiểm tra chủ thẻ
     * @param owner : Chủ thẻ
     * @returns Error
     */
    public checkOwnerCardFormat(owner : string) {
        if(owner === null || owner === undefined) {
            return new InvalidCardException().getError();
        }
        return { error: false };
    }

    /**
     * Phương thức kiểm tra định dạng mã bí mật
     * @param cvvCode : Mã bí mật
     * @returns Error
     */
    public checkCvvCodeFormat(cvvCode : string) {
        if(cvvCode === null || cvvCode === undefined) {
            return new InvalidCardException().getError();
        }
        return { error: false };
    }
    
    /**
     * Phương thức kiểm tra định dạng ngày hết hạn
     * @param date : Ngày hết hạn
     * @returns Error
     */
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