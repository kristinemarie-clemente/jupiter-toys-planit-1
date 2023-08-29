const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import cartPO from "../../page_objects/CartPage"

Then('the user validates the order subtotal', () => {
    cartPO.validateSubTotal()
})