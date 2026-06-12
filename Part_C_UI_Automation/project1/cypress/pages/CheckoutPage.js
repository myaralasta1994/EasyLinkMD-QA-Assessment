class CheckoutPage {

    fillInformation(firstName, lastName, postalCode) {

        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(postalCode);

        cy.get('[data-test="continue"]').click();
    }

    finishOrder() {
        cy.get('[data-test="finish"]').click();
    }
       getCheckoutTitle() {
        return cy.get('[data-test="title"]')
    }
}

export default new CheckoutPage();