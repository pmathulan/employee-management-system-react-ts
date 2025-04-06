Feature: Delete an employee

  Scenario: User deletes an employee from the list
    Given I am on the employee list page
    When I click the delete button for "John Doe"
    And I confirm the deletion
    Then "John Doe" should no longer appear in the employee list
    And I should see a success message "Employee deleted successfully"
    And the employee count should be decremented by 1