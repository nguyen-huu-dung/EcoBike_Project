import { PaymentTransaction } from "../entity.payment/PaymentTransaction";
import { CreditCard } from "../entity.payment/CreditCard";
import { InterbankBoundary } from "./InterbankBoundary";
import { API } from "../utils/API";
import { Utils } from "../utils/Utils";

class InterbankSubsystemController {

    private interbankBoundary : InterbankBoundary = new InterbankBoundary();

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

        try {
            const response = await this.interbankBoundary.query(API.PAY_URL, data);
            return this.processResponse(response.data);
        } catch (error) {
            console.log(error)
        }
    }
    
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

        try {
            const response = await this.interbankBoundary.query(API.PAY_URL, data);
            return this.processResponse(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    public processResponse(response) {
        if(response.errorCode === "00") {
            response["message"] = "Thành công";
        }
        else {
            response["message"] = "Thất bại";
        }
        return response;
    }
}

export { InterbankSubsystemController };