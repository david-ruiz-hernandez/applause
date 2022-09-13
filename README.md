# applause

## Introduction
With this exercise, David Ruiz presents his candidature to the Position of Automation Engineer in Applause. The requirements for the exercise are the following:

1. Navigate to https://www.douglas.de/de
2. Handle the cookie consent.
3. Click on "Parfum"
4. List the products based on filters. Create data-driven tests

Note that these should execute against different browsers and its codebase should follow best practices.

## Folder structure
#### ./github
This folder contains the required files (YML) to execute the developed scenarios using Github Actions so they can be easily integrated with any other pipelines and provide fast and clear feedback to the rest of the team. 

#### Cypress
Contains the scenarios and any code related to them. Cypress is the framework that will be used to perform the testing and the Page-Object architecture is the selected one. 

NOTE: The data for the Data Driven scenarios is contained into `cypress/e2e/features`

##### Why JSON?
JSON is a very structured way to create data. It can be easily shared between Manual QAs and automation engineers. Most manual QAs are frequently exposed to JSON files / structures in their daily jobs when dealing with REST APIs.

## How to execute tests
### Via console:
`yarn test`

### Via UI
Cypress provides an intuitive UI to execute any test suite included in our project. Use `yarn cypress:open` to start said UI, select a browser when asked and finally click on the test suite 'parfumFilter.cy.js' to trigger the tests for this specific exercies. 

