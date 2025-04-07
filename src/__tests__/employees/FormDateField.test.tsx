import { render, screen } from "@testing-library/react";
import { useForm } from "react-hook-form";
import "@testing-library/jest-dom";
import FormDateField from "../../components/FormDateField";

// A simple helper component to test the FormDateField
const TestForm = () => {
  const { register } = useForm();
  return (
    <FormDateField label="Test Date" name="testDate" register={register} />
  );
};

describe("FormDateField", () => {
  it("renders correctly with label and input", () => {
    render(<TestForm />);
    // Use getByLabelText to find the label and associated input
    const input = screen.getByLabelText(/Test Date/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "date"); // Ensure the input type is 'date'
  });

  it("shows error message if error prop is provided", () => {
    render(
      <FormDateField
        label="Test Date"
        name="testDate"
        register={jest.fn()}
        error="This field is required"
      />
    );
    expect(screen.getByText(/This field is required/i)).toBeInTheDocument();
  });
});
