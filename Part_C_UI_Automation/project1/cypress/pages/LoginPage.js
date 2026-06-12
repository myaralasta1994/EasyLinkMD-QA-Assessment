class LoginPage {

    visit() {
        cy.visit('/');
    }

    login(username, password) {
        cy.get('[data-test="username"]').clear().type(username);
        cy.get('[data-test="password"]').clear().type(password);
        cy.get('[data-test="login-button"]').click();
    }

    getErrorMessage() {
        return cy.get('[data-test="error"]');
    }
}

export default new LoginPage();