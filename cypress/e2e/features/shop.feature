Feature: Shop Page

  # Assessment Test Case 3
  Scenario: Add items to Cart
    Given the user opens the Jupiter Toys Page
    When the user navigates to the "Shop" page
    And the user adds the following items to their Cart:
      | item           | quantity |
      | Stuffed Frog   | 2        |
      | Fluffy Bunny   | 5        |
      | Valentine Bear | 3        |
    When the user navigates to the "Cart" page
    Then the user validates the order subtotal
