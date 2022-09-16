/// <reference types="cypress" />
import BasePage from './base_page'

class ShoppingCartPage extends BasePage {
    constructor() {
        super();
    }

    validateProductIsInTheCart(productName) {
        cy.get('.brand-line').contains(productName).should('be.visible');
    }
}

module.exports = ShoppingCartPage;