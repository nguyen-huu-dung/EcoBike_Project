import { CreditCard } from "../src/entity.payment/CreditCard";

import "jest";


describe("creditcard", () => {
    let creditCard = new CreditCard();
    
    it("should return true when cardcode is kscq1_group14_2021", () => {
        expect(creditCard.checkCardCodeFormat("kscq1_group14_2021").error).toBe(false);
    });

    it("should return true when cardcode is null", () => {
        expect(creditCard.checkCardCodeFormat(null).error).toBe(true);
    });

    it("should return true when owner is Group 14", () => {
        expect(creditCard.checkOwnerCardFormat("Group 14").error).toBe(false);
    });

    it("should return true when owner is null", () => {
        expect(creditCard.checkOwnerCardFormat(null).error).toBe(true);
    });

    it("should return true when cvv is 786", () => {
        expect(creditCard.checkCvvCodeFormat("786").error).toBe(false);
    });

    it("should return true when cvv is null", () => {
        expect(creditCard.checkCvvCodeFormat(null).error).toBe(true);
    });

    it("should return true when date expired is 1125", () => {
        expect(creditCard.checkDateExpiredFormat("1125").error).toBe(false);
    });

    it("should return true when date expired is null", () => {
        expect(creditCard.checkDateExpiredFormat(null).error).toBe(true);
    });

});