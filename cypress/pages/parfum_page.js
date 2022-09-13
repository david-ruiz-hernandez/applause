/// <reference types="cypress" />
import BasePage from './base_page'

class ParfumPage extends BasePage {
    findOptionLabel(category, filterByInputText, option) {
        cy.get('.facet-list .facet__title').contains(category)
        .should('be.visible')
        .click();

        if (filterByInputText) {
            cy.get('.facet-list .facet__title').contains(category).siblings('.facet__menu')
                .first().find('input')
                .click()
                .clear();

            cy.get('.facet-list .facet__title').contains(category).siblings('.facet__menu')
                .first().find('input')
                .type(option);
        }

        return cy.get('.facet-list .facet__title').contains(category).siblings('.facet__menu')
            .first().find('.facet-option__checkbox--rating-stars div').contains(option);
        
    }

    filterBy(category, filterByInputText, option) {
        this.findOptionLabel(category, filterByInputText, option)
            .click();
    }

    validateResultCount(expectedCount) {
        cy.get('.product-overview h1').parent().should('contain.text', `(${expectedCount})`);
    }

    validateCategoryOptionCount(category, filterByInputText, option, expectedCount) {
        this.findOptionLabel(category, filterByInputText, option)
            .should('contain.text', `(${expectedCount})`)

        cy.get('.facet-list .facet__title').contains(category)
            .should('be.visible')
            .click();
    }
}

module.exports = ParfumPage;