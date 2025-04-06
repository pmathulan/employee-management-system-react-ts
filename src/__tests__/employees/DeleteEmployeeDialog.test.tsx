import { render, fireEvent, waitFor } from "@testing-library/react";
import EmployeeForm from "../../features/employees/components/EmployeeForm";
import { EmployeeFormValues } from "../../features/employees/types/Employee";
import "@testing-library/jest-dom";

describe("EmployeeForm", () => {
  const onSubmitMock = jest.fn();

  it("should render the form correctly", () => {
    const { getByLabelText } = render(
      <EmployeeForm
        initialValues={{ firstName: "", lastName: "", email: "", phone: "" }}
        onSubmit={onSubmitMock}
      />
    );

    expect(getByLabelText("First Name")).toBeInTheDocument();
    expect(getByLabelText("Last Name")).toBeInTheDocument();
  });

  it("should display validation errors when fields are invalid", async () => {
    const { getByLabelText, getByText } = render(
      <EmployeeForm
        initialValues={{ firstName: "", lastName: "", email: "", phone: "" }}
        onSubmit={onSubmitMock}
      />
    );

    fireEvent.click(getByText("Add Employee"));

    await waitFor(() => {
      expect(getByText("First name is required")).toBeInTheDocument();
      expect(getByText("Last name is required")).toBeInTheDocument();
    });
  });

  it("should submit the form correctly with valid data", async () => {
    const validData: EmployeeFormValues = {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "+6512345678",
      gender: "Male",
      dateOfBirth: "1990-01-01",
      joinedDate: "2021-01-01",
    };

    const { getByLabelText, getByText } = render(
      <EmployeeForm initialValues={validData} onSubmit={onSubmitMock} />
    );

    fireEvent.click(getByText("Add Employee"));

    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledWith(validData);
    });
  });
});
