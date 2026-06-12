import LoginPage from '../pages/LoginPage';
import users from '../fixtures/users.json';
import InventoryPage from '../pages/InventoryPage';
import 'cypress-mochawesome-reporter/register';

describe('Login Tests', () => {

    beforeEach(() => {
        LoginPage.visit();
    });

    it('Normal Login', () => {
        LoginPage.login(
            users.standardUser.username,
            users.standardUser.password

        );

        cy.url().should('include', 'inventory');
        cy.get('.title').should('be.visible').and('have.text', 'Products');
    });

    it('Wrong crid Login', () => {

        LoginPage.login(
            'wejfewogwegnoi',
            'wjegpihwepihweipg'
        );

        LoginPage.getErrorMessage()
            .should('contain', 'Username and password do not match');
        cy.url().should('eq', 'https://www.saucedemo.com/');

    });

    it('Locked Login', () => {

        LoginPage.login(
            'locked_out_user',
            'secret_sauce'
        );

        LoginPage.getErrorMessage()
            .should('contain', 'locked out');
        cy.url().should('eq', 'https://www.saucedemo.com/');

    });

    const expectedImagesMap = {
        'Sauce Labs Backpack': 'sauce-backpack',
        'Sauce Labs Bike Light': 'bike-light',
        'Sauce Labs Bolt T-Shirt': 'bolt-shirt',
        'Sauce Labs Fleece Jacket': 'sauce-pullover',
        'Sauce Labs Onesie': 'red-onesie',
        'Test.allTheThings() T-Shirt (Red)': 'red-tatt'
    };

    it('Images are correct problem_user', () => {
        LoginPage.login(users.problemUser.username, users.problemUser.password);

        InventoryPage.getInventoryItems().each(($item) => {

            const productName = InventoryPage.getItemName($item);
            const imgSrc = InventoryPage.getItemImageSrc($item);

            const expectedFragment = expectedImagesMap[productName];

            expect(imgSrc, `Image source for "${productName}" is incorrect`)
                .to.include(expectedFragment);
        });
    });

    it('Long time for login Performance Glitch', () => {
        const startTime = Date.now();
        LoginPage.login(users.glitchUser.username, users.glitchUser.password);
        cy.url({ timeout: 10000 }).should('include', 'inventory').then(() => {
            const endTime = Date.now();
            const duration = endTime - startTime;
            cy.log(`Login process took: ${duration} ms`);
            expect(duration, `Login is severely delayed. It took ${duration}ms`)
                .to.be.greaterThan(3000);
        });
    });

    afterEach(function () {
        if (this.currentTest.state === 'failed') {
            cy.screenshot(`failure-${this.currentTest.title}`);
        }
    });
});
