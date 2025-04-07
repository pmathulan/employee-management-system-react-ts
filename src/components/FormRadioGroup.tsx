import * as React from "react";

// Defines a single radio button option
interface RadioOption {
  label: string; // Text displayed
  value: string; // Value submitted
}

// Props for the FormRadioGroup component
interface RadioGroupProps {
  label: string; // Group label
  name: string; // Input name (links radios, used by register)
  options: RadioOption[]; // Array of radio options
  register: any; // Form library registration function (e.g., React Hook Form)
  error?: string; // Optional error message
}

// Renders a group of radio buttons in a row with a common label and error display
const FormRadioGroup: React.FC<RadioGroupProps> = ({
  label,
  name,
  options,
  register,
  error,
}) => (
  <div className="form-group">
    <label className="form-label" htmlFor={name}>
      {label}
    </label>
    <div className="d-flex">
      {options.map(({ value, label: optionLabel }) => (
        <div className="form-check form-check-inline me-3" key={value}>
          <input
            type="radio"
            id={`${name}-${value}`}
            name={name}
            value={value}
            className="form-check-input"
            {...register(name)}
          />
          <label className="form-check-label" htmlFor={`${name}-${value}`}>
            {optionLabel}
          </label>
        </div>
      ))}
    </div>
    {error && <div className="text-danger">{error}</div>}
  </div>
);

export default FormRadioGroup;
