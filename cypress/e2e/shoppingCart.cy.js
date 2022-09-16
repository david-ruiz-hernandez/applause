/// <reference types="cypress" />

import BasePage from '../pages/base_page'
import ParfumPage from '../pages/parfum_page'
import ProductDetailsPage from '../pages/productDetails_page'
import ShoppingCartPage from '../pages/shoppingCart_page'

let testCases = require('./features/shoppingCart.addProduct.scenarios.json');

describe('Shopping Cart', () => {
    beforeEach(() => {
        //Set screensize for the tests
        cy.viewport(1920, 1080);

        let basePage = new BasePage();
        
        basePage.goToDouglasDotDe();
        basePage.acceptCookies();

        basePage.goToCategory('Parfum');
    })

    testCases.scenarios.forEach(scenario => { 
        it(`could ${scenario.title}`, () => {
            let parfumPage = new ParfumPage();
            let productDetailsPage = new ProductDetailsPage();
            let shoppingCartPage = new ShoppingCartPage();

            scenario.filters.forEach(filter => {
                filter.options.forEach(option => {
                    parfumPage.filterBy(filter.category, filter.canFilterOptions, option);
                })
            })
            parfumPage.openProductDetails(scenario.productName);
            productDetailsPage.addToShoppingCart();

            shoppingCartPage.validateProductIsInTheCart(scenario.productName);
        })
    })
})