/**
 * @author Nguyen Huu Dung, Dang Tung Lam
 */
import { Invoice } from "../../entity.invoice/Invoice";

interface InvoiceServiceInterface {

    /**
     * Phương thức lưu 1 hóa đơn
     */
    saveInvoice(invoice : Invoice);

}

export { InvoiceServiceInterface };