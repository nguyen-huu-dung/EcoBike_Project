/**
 * @author Nguyen Huu Dung, Dang Tung Lam
 */
import { SQLException } from '../common.exception/SQLException';
import { PaymentTransaction } from '../entity.payment/PaymentTransaction';
import { CreditCard } from '../entity.payment/CreditCard';
import { Invoice } from "../entity.invoice/Invoice";
import { BaseController } from "./BaseController";
import { InterbankSubsystem } from '../subsystem/InterbankSubsystem';
import { PaymentService } from '../service/PaymentService/PaymentService';
import { UserService } from '../service/UserService/UserService';

class PaymentController extends BaseController {

    private interbankSubsystem : InterbankSubsystem;



    /**
     * Phương thức thực hiện thanh toán
     * @param invoice : Hóa đơn
     * @param card : Object chứa thông tin nội dung của trang PaymentScreen
     * @returns : Object chứa thông tin trả về sau khi thanh toán
     */
    public async payment(invoice : Invoice, card) {
        const creditCard = new CreditCard().setCardCode(card.cardCode)
                                            .setCvvCode(card.cvvCode)
                                            .setOwner(card.owner)
                                            .setDateExpired(card.dateExpired);
        const check =  creditCard.checkCreditCardFormat();
        if(check.error) return check;
        let response;
        if(card.type === "rent") {
            response = await this.interbankSubsystem.pay(creditCard, invoice.getTotalPrice(), "pay rent bike");
            if(response.error === false) {
                const paymentTransaction : PaymentTransaction = new PaymentTransaction(response.transaction.command, 
                    response.transaction.transactionContent, 
                    response.transaction.createdAt,
                    response.transaction.transactionId)
                    .setPaymentServiceInterface(new PaymentService());
                try {
                    await invoice.getBike().updateIsRentedBikeById(invoice.getBike().getId(), 1);
                    await new UserService().updateUser(invoice.getBike().getId(), paymentTransaction.getTransactionId());
                    await paymentTransaction.savePaymentTransaction();
                    invoice.setPaymentTransaction(paymentTransaction);
                    await invoice.saveInvoice();
                } catch (error) {
                    return new SQLException().getError();
                }
            }
        }
        else if (card.type === "return") {
            response = await this.interbankSubsystem.pay(creditCard, invoice.getTotalPrice(), "pay return bike");
            if(response.error === false) {
                const paymentTransaction : PaymentTransaction = new PaymentTransaction(response.transaction.command, 
                    response.transaction.transactionContent, 
                    response.transaction.createdAt,
                    response.transaction.transactionId)
                    .setPaymentServiceInterface(new PaymentService());
                try {
                    await invoice.getBike().updateIsRentedBikeById(invoice.getBike().getId(), 0);
                    await invoice.getBike().updateParkingIdByBikeId(invoice.getBike().getId(), card.parkingId);
                    await new UserService().updateUser(0, 0);
                    await paymentTransaction.savePaymentTransaction();
                    invoice.setPaymentTransaction(paymentTransaction);
                    await invoice.saveInvoice();
                } catch (error) {
                    return new SQLException().getError();
                }
            }
        }
        return response;
    }

    /**
     * Phương thức thực hiện hoàn trả
     * @param invoice : Hóa đơn
     * @param card : Object chứa thông tin nội dung của trang PaymentScreen
     * @returns : Object chứa thông tin trả về sau khi thanh toán
     */
    public async refund(invoice : Invoice, card) {
        const creditCard = new CreditCard().setCardCode(card.cardCode)
                                            .setCvvCode(card.cvvCode)
                                            .setOwner(card.owner)
                                            .setDateExpired(card.dateExpired);
        const check =  creditCard.checkCreditCardFormat();
        if(check.error) return check;
        const response = await this.interbankSubsystem.refund(creditCard, invoice.getBike().getDeposit(), "refund return bike");
        if(response.error === false) {
            const paymentTransaction : PaymentTransaction = new PaymentTransaction(response.transaction.command, 
                response.transaction.transactionContent, 
                response.transaction.createdAt,
                response.transaction.transactionId)
                .setPaymentServiceInterface(new PaymentService());
            try {
                await invoice.getBike().updateIsRentedBikeById(invoice.getBike().getId(), 0);
                await invoice.getBike().updateParkingIdByBikeId(invoice.getBike().getId(), card.parkingId);
                await new UserService().updateUser(0, 0);
                await paymentTransaction.savePaymentTransaction();
                invoice.setPaymentTransaction(paymentTransaction);
                await invoice.saveInvoice();
            } catch (error) {
                return new SQLException().getError();
            }
        }
        return response;
    }

    public setInterbankSubsystem(interbankSubsystem : InterbankSubsystem) : PaymentController {
        this.interbankSubsystem = interbankSubsystem;
        return this;
    }
}

export { PaymentController };