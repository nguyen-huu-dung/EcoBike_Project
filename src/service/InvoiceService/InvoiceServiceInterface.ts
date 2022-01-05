import { Invoice } from "../../entity.invoice/Invoice";

interface InvoiceServiceInterface {

    saveInvoice(invoice : Invoice);

}

export { InvoiceServiceInterface };