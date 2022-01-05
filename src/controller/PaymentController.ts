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
        const response = await this.interbankSubsystem.pay(creditCard, invoice.getTotalPrice(), "pay rent bike");
        if(response.errorCode === "00") {
            const paymentTransaction : PaymentTransaction = new PaymentTransaction(response.transaction.command, 
                                                                                    response.transaction.transactionContent, 
                                                                                    response.transaction.createdAt,
                                                                                    response.transaction.transactionId)
                                                                                    .setPaymentServiceInterface(new PaymentService());
            try {
                await paymentTransaction.savePaymentTransaction();
                invoice.setPaymentTransaction(paymentTransaction);
                invoice.getBike().updateIsRentedBikeById(invoice.getBike().getId(), 1);
                new UserService().updateUser(invoice.getBike().getId(), paymentTransaction.getTransactionId());
                await invoice.saveInvoice();
            } catch (error) {
                console.log(error);
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