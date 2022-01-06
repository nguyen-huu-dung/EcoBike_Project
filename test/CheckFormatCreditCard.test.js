import { CreditCard } from "../src/entity.payment/CreditCard";

const creditCard = new CreditCard();

it('demo', () => {
    expect(creditCard.checkCardCodeFormat("1234dsndks")).toBe("false")
})