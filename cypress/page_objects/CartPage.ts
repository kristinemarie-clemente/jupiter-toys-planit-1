class CartPage {
    elements = {
        cartItem: () => cy.get('.cart-item'),
        priceCell: () => 'td:nth-child(2)',
        quantityCell: () => 'td:nth-child(3)',
        subtotalCell: () => 'td:nth-child(4)'

    }

    validateSubTotal() {
        this.elements.cartItem().each((row: any) => {
            const priceCell = row.find(this.elements.priceCell())
            const quantityCell = row.find(this.elements.quantityCell())
            const subtotalCell = row.find(this.elements.subtotalCell())

            const priceValue = parseFloat(priceCell.text().replace('$', ''))
            const quantityValue = parseInt(quantityCell.find('input').val())
            const subtotalValue = parseFloat(subtotalCell.text().replace('$', ''))

            const expectedSubtotal = priceValue * quantityValue

            cy.log("actual: " + subtotalValue)
            cy.log('expected: ', expectedSubtotal)

            expect(expectedSubtotal).to.equal(subtotalValue)
        })
    }

}
const cartPO = new CartPage()
export default cartPO
