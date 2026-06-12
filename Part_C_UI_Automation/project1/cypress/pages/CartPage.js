class CartPage {

    checkout() {
        cy.get('[data-test="checkout"]').click();
    }
    get cartItems() { return cy.get('.inventory_item_name'); }

    getCartItemNames() {
        return this.cartItems.then(($items) => {
            return Cypress._.map($items, 'innerText');
        });
    }
}

export default new CartPage();