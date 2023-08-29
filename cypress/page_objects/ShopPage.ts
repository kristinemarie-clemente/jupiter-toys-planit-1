class ShopPage {
    elements = {

    }

    addItemsToCart(item: string, quantity: number) {
        Array.from({ length: quantity }).forEach(() => {
            cy.contains('.product-title', item)
                .parent('div')
                .find('a.btn-success')
                .click()
        })
    }
}
const shopPO = new ShopPage()
export default shopPO
