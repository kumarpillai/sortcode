Feature: In order to check if sortcode/account are valid
  As a user, I should be able validate sort code /account

Scenario Outline: In order to check if sortcode/account are valid
When I enter "<sort_code>"
And I enter "<account_number>" in account field
Then validator returns "<corresponding_response>"
Examples:
|sort_code|account_number|corresponding_response|
|200415   |38290008      |validator returns account details for valid sort code and account number        |
|121212   |38290008      |validator returns error message for invalid sort code     |

  Scenario Outline: In order to check if sortcode are invalid
    When I enter "<sort_code>"
    And I enter "<account_number>" in account field
    Then validator returns "<corresponding_response>"
    Examples:
      |sort_code|account_number|corresponding_response|
      |200415   |12345677      |validator returns error message for invalid account number|