import { render, screen } from "@testing-library/react";
import { useForm } from "react-hook-form";
import FormRadioGroup from "../../components/FormRadioGroup";
import "@testing-library/jest-dom";

// A simple helper component to test the FormRadioGroup
const TestForm = () => {
  const { register } = useForm();
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ];
  return (
    <FormRadioGroup
      label="Test Radio Group"
      name="testRadio"
      options={options}
      register={register}
    />
  );
};

describe("FormRadioGroup", () => {
  it("renders correctly with radio options", () => {
    render(<TestForm />);
    expect(screen.getByLabelText(/Test Radio Group/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Option 1/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Option 2/i)).toBeInTheDocument();
  });

  it("shows error message if error prop is provided", () => {
    render(
      <FormRadioGroup
        label="Test Radio Group"
        name="testRadio"
        options={[]}
        register={jest.fn()}
        error="Please select an option"
      />
    );
    expect(screen.getByText(/Please select an option/i)).toBeInTheDocument();
  });
});
