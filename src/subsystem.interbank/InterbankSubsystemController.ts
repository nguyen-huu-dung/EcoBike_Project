/**
 * @author Nguyen Huu Dung, Dang Tung Lam
 */
import { PaymentTransaction } from "../entity.payment/PaymentTransaction";
import { CreditCard } from "../entity.payment/CreditCard";
import { InterbankBoundary } from "./InterbankBoundary";
import { API } from "../utils/API";
import { Utils } from "../utils/Utils";
import { InvalidCardException } from "../common.exception/InvalidCardException";
import { NotEnoughBalanceException } from "../common.exception/NotEnoughBalanceException";
import { InternalServerErrorException } from "../common.exception/InternalServerErrorException";
import { SuspiciousTransactionException } from "../common.exception/SuspiciousTransactionException";
import { InvalidTransactionAmountException } from "../common.exception/InvalidTransactionAmountException";
import { InvalidVersionException } from "../common.exception/InvalidVersionException";
import { NotEnoughTransactionInfoException } from "../common.exception/NotEnoughTransactionInfoException";
import { UnrecognizedException } from "../common.exception/UnrecognizedException";

class InterbankSubsystemController {

    private interbankBoundary : InterbankBoundary = new InterbankBoundary();



     /**
     * Phương thức thực hiện hoàn trả
     * @param invoice : Hóa đơn
     * @param card : Object chứa thông tin nội dung của trang PaymentScreen
     * @returns : Object chứa thông tin trả về sau khi thanh toán
     */
    public async refund(card : CreditCard, amount : number, contents : string){
        const data = {
            "version": API.VERSION,
            "transaction": {
                "cardCode": card.getCardCode(),
                "owner": card.getOwner(),
                "cvvCode": card.getCvvCode(),
                "dateExpired": card.getDateExpired(),
                "command": API.REFUND_COMMAND,
                "transactionContent": contents,
                "amount": amount,
                "createdAt": Utils.getTimeNow()
            },
            "appCode": API.APP_CODE,
            "hashCode": API.HASH_CODE
        };

        console.log(data);

        const response = await this.interbankBoundary.query(API.REFUND_URL, data);
        return {
            ...response.data,
            ...this.processResponse(response.data)
        } 
    }
    

    /**
     * Phương thức thực hiện thanh toán
     * @param invoice : Hóa đơn
     * @param card : Object chứa thông tin nội dung của trang PaymentScreen
     * @returns : Object chứa thông tin trả về sau khi thanh toán
     */
    public async pay(card : CreditCard, amount : number, contents : string){
        const data = {
            "version": API.VERSION,
            "transaction": {
                "cardCode": card.getCardCode(),
                "owner": card.getOwner(),
                "cvvCode": card.getCvvCode(),
                "dateExpired": card.getDateExpired(),
                "command": API.PAY_COMMAND,
                "transactionContent": contents,
                "amount": amount,
                "createdAt": Utils.getTimeNow()
            },
            "appCode": API.APP_CODE,
            "hashCode": API.HASH_CODE
        };

        const response = await this.interbankBoundary.query(API.PAY_URL, data);
        return {
            ...response.data,
            ...this.processResponse(response.data)
        } 
    }
    /**
     * Phương thực thực hiện xử lý thông tin trả về
     * @param response : Thông tin trả về
     * @returns 
     */
    public processResponse(response) {
        switch(response.errorCode) {
            case "00": return {
                message: "Thành công",
                error: false
                
            }
            case "01": return new InvalidCardException().getError();
            case "02": return new NotEnoughBalanceException().getError();
            case "03": return new InternalServerErrorException().getError();
            case "04": return new SuspiciousTransactionException().getError();
            case "05": return new NotEnoughTransactionInfoException().getError();
            case "06": return new InvalidVersionException().getError();
            case "07": return new InvalidTransactionAmountException().getError();
            default : return new UnrecognizedException().getError();
        }

    }
}

export { InterbankSubsystemController };