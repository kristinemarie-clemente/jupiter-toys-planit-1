class HomePage {
    elements = {
        navBarLogo: () => cy.get('.brand'),
        homepageHeading: () => cy.get('h1').contains('Jupiter Toys'),
        contactNavButton: () => cy.get('#nav-contact'),
        shopNavButton: () => cy.get('#nav-shop'),
        cartNavButton: () => cy.get('#nav-cart'),
        cartCountText: () => cy.get('.cart-count.ng-binding')
    }

    validateHomeLandingPage() {
        this.elements.navBarLogo().should('be.visible')
        this.elements.homepageHeading().should('be.visible')
    }

    navigateTo(page: string) {
        let navButton
        switch (page) {
            case 'Contact':
                navButton = this.elements.contactNavButton()
                break
            case 'Shop':
                navButton = this.elements.shopNavButton()
                break
            case 'Cart':
                navButton = this.elements.cartNavButton()
                break
            default:
                throw new Error("Invalid case.")
        }
        navButton.click()
    }
}
const homePO = new HomePage()
export default homePO
