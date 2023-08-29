const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import contactPO from "../../page_objects/ContactPage"

Then('the user validates the mandatory fields', () => {
    contactPO.validateMandatoryFields()
})

Then('the user submits a valid Feedback Form', () => {
    contactPO.populateMandatoryFields()
    contactPO.elements.submitButton().click()
    contactPO.validateSuccessfulFormSubmission()
})
