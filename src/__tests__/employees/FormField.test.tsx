import { render, screen } from "@testing-library/react";
import { useForm } from "react-hook-form";
import FormField from "../../components/FormField";
import "@testing-library/jest-dom";

// A simple helper component to test the FormField
const TestForm = () => {
  const { register } = useForm();
  return (
    <FormField
      label="Test Field"
      name="testField"
      type="text"
      register={register}
    />
  );
};

describe("FormField", () => {
  it("renders correctly with label and input", () => {
    render(<TestForm />);
    expect(screen.getByLabelText(/Test Field/i)).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveAttribute("type", "text");
  });

  it("shows error message if error prop is provided", () => {
    render(
      <FormField
        label="Test Field"
        name="testField"
        type="text"
        register={jest.fn()}
        error="This field is required"
      />
    );
    expect(screen.getByText(/This field is required/i)).toBeInTheDocument();
  });
});
