import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import users from '../fixtures/users.json';
import cards from '../fixtures/cards.json';



describe('Checkout Flow', () => {

    it('Complete Checkout Successfully', () => {

        LoginPage.visit();

        LoginPage.login(
            users.standardUser.username,
            users.standardUser.password
        );

        cy.url().should('include', 'inventory');
        cy.get('.title').should('be.visible').and('have.text', 'Products');


debugger;
        const itemsToAdd = ['Sauce Labs Bolt T-Shirt', 'Sauce Labs Backpack','Sauce Labs Fleece Jacket'];
        itemsToAdd.forEach((item) => {
            InventoryPage.addItemToCart(item);
        });
        cy.get('.shopping_cart_badge')
            .should('contain', itemsToAdd.length.toString());
        InventoryPage.openCart();
        CartPage.getCartItemNames().then((itemsInCart) => {
            expect(itemsInCart).to.deep.equal(itemsToAdd);
        });




        CartPage.checkout();

        CheckoutPage.fillInformation(
            cards.validCard.firstName,
            cards.validCard.lastName,
            cards.validCard.zip
        );

        CheckoutPage.finishOrder();

        cy.contains('Thank you for your order!')
            .should('be.visible');
        CheckoutPage.getCheckoutTitle().should('contain', 'Checkout: Complete!');
    });
    afterEach(function () {
        if (this.currentTest.state === 'failed') {
            cy.screenshot(`failure-${this.currentTest.title}`);
        }
    });
});