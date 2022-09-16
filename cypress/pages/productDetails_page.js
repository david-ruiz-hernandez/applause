/// <reference types="cypress" />
import BasePage from './base_page'

class ProductDetailsPage extends BasePage {
    constructor() {
        super();
    }
    
    addToShoppingCart() {
        cy.get('.product-cta .button__primary').contains('Zum Warenkorb hinzufügen')
            .click();
        
        cy.get('.add-cart-modal__buttons .button__primary').contains('Warenkorb & Kasse')
            .click();
    }
}

module.exports = ProductDetailsPage;