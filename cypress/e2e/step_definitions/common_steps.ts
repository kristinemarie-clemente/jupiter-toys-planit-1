const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import homePO from "../../page_objects/HomePage"

Given('the user opens the Jupiter Toys Page', () => {
    cy.visit("/")
    homePO.validateHomeLandingPage()
})

When('the user navigates to the {string} page', (page: string) => {
    homePO.navigateTo(page)
})
