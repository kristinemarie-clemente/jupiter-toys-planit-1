import Chance = require('chance')

class ContactPage {
    elements = {
        headerMessage: () => cy.get('#header-message'),
        forenameTextBox: () => cy.get('#forename'),
        surnameTextBox: () => cy.get('#surname'),
        emailTextBox: () => cy.get('#email'),
        telephoneTextBox: () => cy.get('#telephone'),
        messageTextBox: () => cy.get('#message'),
        submitButton: () => cy.get('a').contains('Submit'),
        headerError: () => cy.get('.alert.alert-error.ng-scope'),
        forenameError: () => cy.get('#forename-err'),
        emailError: () => cy.get('#email-err'),
        messageError: () => cy.get('#message-err'),
        submissionModal: () => cy.get('h1').contains('Sending Feedback'),
        submissionSuccessHeader: () => cy.get('.alert.alert-success')
    }

    populateMandatoryFields() {
        const chance = new Chance();

        this.elements.forenameTextBox().type(chance.first())
        this.elements.emailTextBox().type(chance.email())
        this.elements.messageTextBox().type(chance.sentence())
    }

    validateMandatoryFields() {
        contactPO.elements.submitButton().click()
        this.elements.headerError().should('be.visible')
        this.elements.forenameError().should('be.visible')
        this.elements.emailError().should('be.visible')
        this.elements.messageError().should('be.visible')
        this.populateMandatoryFields()
        this.elements.headerError().should('not.exist')
        this.elements.forenameError().should('not.exist')
        this.elements.emailError().should('not.exist')
        this.elements.messageError().should('not.exist')
    }

    validateSuccessfulFormSubmission() {
        this.elements.submissionModal().should('be.visible')
        this.elements.submissionSuccessHeader().should('be.visible')
    }

}
const contactPO = new ContactPage()
export default contactPO
