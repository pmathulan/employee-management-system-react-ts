import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import EmployeeListPage from "../../features/employees/pages/EmployeeListPage";
import { store } from "../../store/store";
import { setEmployees } from "../../features/employees/employeeSlice";

// Mock data (can be defined outside or inside describe)
const mockEmployees = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "1234567890",
    gender: "Male",
    dob: "1990-01-01",
    joinedDate: "2020-01-01",
  },
];

describe("EmployeeList", () => {
  // No longer need beforeEach setting localStorage if initializing store directly

  it("renders employee list", async () => {
    // Dispatch action to ensure store has data BEFORE component uses it
    store.dispatch(setEmployees(mockEmployees));

    render(
      <Provider store={store}>
        <Router>
          <EmployeeListPage />
        </Router>
      </Provider>
    );

    // screen.debug(); // <-- Add this temporarily to see the DOM after render + dispatch

    // Now findByText should work because the store has data
    const firstName = await screen.findByText("John"); // Use findByText for async nature
    expect(firstName).toBeInTheDocument();
    expect(screen.getByText("Doe")).toBeInTheDocument(); // getByText might work now if render is sync after dispatch
    // Also check for the delete button for this user
    expect(
      await screen.findByRole("button", { name: /delete/i })
    ).toBeInTheDocument();
  });

  it("handles employee delete", async () => {
    store.dispatch(setEmployees(mockEmployees));

    render(
      <Provider store={store}>
        <Router>
          <EmployeeListPage />
        </Router>
      </Provider>
    );

    const deleteButton = await screen.findByRole("button", { name: /delete/i });
    expect(deleteButton).toBeInTheDocument(); // Ensure it rendered

    fireEvent.click(deleteButton);

    // Confirm the delete dialog and click on the "Delete" button within the dialog
    const confirmDeleteButton = await screen.findByRole("button", {
      name: /delete/i,
    });
    expect(confirmDeleteButton).toBeInTheDocument();

    fireEvent.click(confirmDeleteButton);

    // Wait for the employee to be removed from the DOM
    await waitFor(() => {
      expect(screen.queryByText("John")).not.toBeInTheDocument();
    });
  });
});
