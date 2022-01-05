import { PaymentTransaction } from '../../entity.payment/PaymentTransaction';
interface PaymentServiceInterface {

    savePaymentTransaction(paymentTransaction : PaymentTransaction);

}

export { PaymentServiceInterface }