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

    public async payment(invoice : Invoice, card) {
        const creditCard = new CreditCard().setCardCode(card.cardCode)
                                            .setCvvCode(card.cvvCode)
                                            .setOwner(card.owner)
                                            .setDateExpired(card.dateExpired);
        creditCard.checkCreditCardFormat();
        const response = await this.interbankSubsystem.pay(creditCard, invoice.getTotalPrice(), "pay");
        if(response.error === false) {
            const paymentTransaction : PaymentTransaction = new PaymentTransaction(response.transaction.command, 
                                                                                    response.transaction.transactionContent, 
                                                                                    response.transaction.createdAt,
                                                                                    response.transaction.transactionId)
                                                                                    .setPaymentServiceInterface(new PaymentService());
            try {
                await paymentTransaction.savePaymentTransaction();
                invoice.setPaymentTransaction(paymentTransaction);
                if(card.type === "rent") {
                    await invoice.getBike().updateIsRentedBikeById(invoice.getBike().getId(), 1);
                    await new UserService().updateUser(invoice.getBike().getId(), paymentTransaction.getTransactionId());
                }
                else if (card.type === "return") {
                    await invoice.getBike().updateIsRentedBikeById(invoice.getBike().getId(), 0);
                    await invoice.getBike().updateParkingIdByBikeId(invoice.getBike().getId(), card.parkingId);
                    await new UserService().updateUser(0, 0);
                }
                await invoice.saveInvoice();
            } catch (error) {
                return new SQLException().getError();
            }
        }
        return response;
    }

    public async refund(invoice : Invoice, card) {
        const creditCard = new CreditCard().setCardCode(card.cardCode)
                                            .setCvvCode(card.cvvCode)
                                            .setOwner(card.owner)
                                            .setDateExpired(card.dateExpired);
        creditCard.checkCreditCardFormat();
        // console.log(invoice.getBike());
        const response = await this.interbankSubsystem.refund(creditCard, invoice.getBike().getDeposit(), "refund");
        return response;
    }

    public setInterbankSubsystem(interbankSubsystem : InterbankSubsystem) : PaymentController {
        this.interbankSubsystem = interbankSubsystem;
        return this;
    }
}

export { PaymentController };