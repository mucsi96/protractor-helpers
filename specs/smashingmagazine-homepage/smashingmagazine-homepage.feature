Feature: When I got to Smashing Magazine homepage and I click on books link.
  The URL should end with 'books'

  Scenario: Books link on desktop
    Given that I am on desktop
    And that I have gone to the Smashing Magazine page
    When I click the 'Books' button
    Then the URL should end with "/books/"

  Scenario: Books link on mobile
    Given that I am on mobile
    And that I have gone to the Smashing Magazine page
    When I click the sandwitch button
    And I click the 'Books' button
    Then the URL should end with "/books/"