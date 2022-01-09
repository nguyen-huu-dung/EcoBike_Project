/**
 * @author Nguyen Huu Dung, Dang Tung Lam
 */
import { PaymentTransaction } from "../entity.payment/PaymentTransaction";
import { CreditCard } from "../entity.payment/CreditCard";

interface InterbankInterface {
    /**
     * Phương thức thực hiện thanh toán
     * @param invoice : Hóa đơn
     * @param card : Object chứa thông tin nội dung của trang PaymentScreen
     * @returns : Object chứa thông tin trả về sau khi thanh toán
     */
    pay(card : CreditCard, amount : number, contents : string);

    /**
     * Phương thức thực hiện hoàn trả
     * @param invoice : Hóa đơn
     * @param card : Object chứa thông tin nội dung của trang PaymentScreen
     * @returns : Object chứa thông tin trả về sau khi thanh toán
     */
    refund(card : CreditCard, amount : number, contents : string);
}

export { InterbankInterface };