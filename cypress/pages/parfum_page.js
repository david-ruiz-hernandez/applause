/// <reference types="cypress" />
import BasePage from './base_page'

class ParfumPage extends BasePage {
    filterBy(category, filterByInputText, option) {
        cy.get('.facet-list .facet__title').contains(category)
            .should('be.visible')
            .click();

        if (filterByInputText) {
            cy.get('.facet-list .facet__title').contains(category).siblings('.facet__menu')
                .first().find('input')
                .clear()
                .type(option);
        }

        cy.get('.facet-list .facet__title').contains(category).siblings('.facet__menu')
            .first().find('.facet-option__checkbox--rating-stars div').contains(option)
            .click();
    }

    validateResultCount(expectedCount) {
        cy.get('.product-overview h1').parent().should('contain.text', `(${expectedCount})`);
    }

    validateCategoryOptionCount(category, filterByInputText, option, expectedCount) {
        cy.get('.facet-list .facet__title').contains(category)
            .should('be.visible')
            .click();

        if (filterByInputText) {
            cy.get('.facet-list .facet__title').contains(category).siblings('.facet__menu')
                .first().find('input')
                .clear()
                .type(option);
        }

        cy.get('.facet-list .facet__title').contains(category).siblings('.facet__menu')
            .first().find('.facet-option__checkbox--rating-stars div').contains(option)
            .should('contain.text', `(${expectedCount})`)

        cy.get('.facet-list .facet__title').contains(category)
            .should('be.visible')
            .click();
    }
}

module.exports = ParfumPage;