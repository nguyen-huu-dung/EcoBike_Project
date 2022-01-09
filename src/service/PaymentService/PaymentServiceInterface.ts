/**
 * @author Nguyen Huu Dung, Dang Tung Lam
 */
import { PaymentTransaction } from '../../entity.payment/PaymentTransaction';
interface PaymentServiceInterface {

    /**
     * Phương thức lưu giao dịch 
     */
    savePaymentTransaction(paymentTransaction : PaymentTransaction);

}

export { PaymentServiceInterface }