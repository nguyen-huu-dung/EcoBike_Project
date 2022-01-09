/**
 * @author Nguyen Huu Dung, Dang Tung Lam
 */
import { PaymentServiceInterface } from "../service/PaymentService/PaymentServiceInterface";
import { CreditCard } from "./CreditCard";

class PaymentTransaction {
    
    private card : CreditCard;
    private command : string;
    private transactionContent : string;
    private createdAt : string;
    private transactionId : string;
    private paymentServiceInterface : PaymentServiceInterface;

    /**
     * Phương thức khởi tạo
     * @param command : Loại giao dịch
     * @param transactionContent : Nội dung giao dịch
     * @param createdAt : Thời gian khởi tạo
     * @param transactionId : Id giao dịch
     */
    constructor(command, transactionContent, createdAt, transactionId) {
        this.command = command;
        this.transactionContent = transactionContent;
        this.createdAt = createdAt;
        this.transactionId = transactionId;
    }
    /**
     * Phương thức lưu giao dịch
     * @returns 
     */
    public savePaymentTransaction() : void {
        return this.paymentServiceInterface.savePaymentTransaction(this);
    }

    // Getter vs setter
    public setPaymentServiceInterface(paymentServiceInterface : PaymentServiceInterface) : PaymentTransaction {
        this.paymentServiceInterface = paymentServiceInterface;
        return this;
    }

    public getTransactionId() : string {
        return this.transactionId;
    }

    public getTransactionContent() : string {
        return this.transactionContent;
    }

    public getCommand() : string {
        return this.command;
    }

    public getCreatedAt() : string {
        return this.createdAt;
    }
}

export { PaymentTransaction };