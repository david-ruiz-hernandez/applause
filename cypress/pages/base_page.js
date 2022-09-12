/// <reference types="cypress" />

class BasePage {
    url = 'https://www.douglas.de/de';

    goToDouglasDotDe() {
        return cy.visit(this.url)
    }

    acceptAllCookiesButton() {
        return cy.get('.modal-overlay__display button').contains('Alle erlauben');
    }

    categoryButton(categoryName) {
        return cy.get('.navigation-main').find('.slick-list').find('a').contains(categoryName.toUpperCase());
    }

    goToCategory(categoryName) {
        return this.categoryButton(categoryName)
            .should("be.visible")
            .click();
    }

    acceptCookies() {
        return this.acceptAllCookiesButton()
            .should("be.visible")
            .click();
    }
}

module.exports = BasePage;