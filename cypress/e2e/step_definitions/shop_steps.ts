const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import shopPO from "../../page_objects/ShopPage"

When('the user adds the following items to their Cart:', (dataTable: any) => {
  dataTable.hashes().forEach((row: any) => {
    const { item, quantity } = row;
    shopPO.addItemsToCart(item, quantity)
  })
})
