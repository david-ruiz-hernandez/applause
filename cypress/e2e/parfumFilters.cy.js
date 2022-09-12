/// <reference types="cypress" />

import BasePage from '../pages/base_page'
import ParfumPage from '../pages/parfum_page'

let filtering_testCases = require('./features/parfum.filtering.scenarios.json');
let categoryFiltering_testCases = require('./features/parfum.categoryFiltering.scenarios.json');

describe('Parfum page', () => {
    beforeEach(() => {
        //Set screensize for the tests
        cy.viewport(1920, 1080);

        let basePage = new BasePage();
        
        basePage.goToDouglasDotDe();
        basePage.acceptCookies();

        basePage.goToCategory('Parfum');
    })
  
    filtering_testCases.scenarios.forEach(scenario => {       
        it(`can be filtered - ${scenario.title}`, () => {
            let parfumPage = new ParfumPage();
    
            scenario.filters.forEach(filter => {
                filter.options.forEach(option => {
                    parfumPage.filterBy(filter.category, filter.canFilterOptions, option);
                })
            })

            parfumPage.validateResultCount(scenario.resultsCount);
        })
    });

    categoryFiltering_testCases.scenarios.forEach(scenario => {       
        it(`update filter's counts accordingly - ${scenario.title}`, () => {
            let parfumPage = new ParfumPage();
    
            scenario.filters.forEach(filter => {
                filter.options.forEach(option => {
                    parfumPage.filterBy(filter.category, filter.canFilterOptions, option);
                })
            })

            scenario.expectedFilters.forEach(filter => {
                filter.options.forEach(option => {
                    parfumPage.validateCategoryOptionCount(filter.category, filter.canFilterOptions, option.name, option.count);
                })
            })
        })
    });
    
})