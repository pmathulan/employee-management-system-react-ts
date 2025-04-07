import * as React from "react";
import styles from "../styles/Form.module.css"; // Component styles

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

// Renders a group of radio buttons with a common label and error display
const FormRadioGroup: React.FC<RadioGroupProps> = ({
  label,
  name,
  options,
  register,
  error,
}) => (
  <div className={styles.formGroup}>
    {/* Group label */}
    <label className={styles.label} htmlFor={name}>
      {" "}
      {/* Link the label with the name of the radio group */}
      {label}
    </label>
    {/* Container for radio buttons */}
    <div className={styles.radioGroup}>
      {/* Map over options to create individual radio buttons */}
      {options.map(({ value, label: optionLabel }) => (
        <label
          key={value}
          className={styles.radioLabel}
          htmlFor={`${name}-${value}`}
        >
          {" "}
          {/* Added the `htmlFor` to associate it with the radio input */}
          <input
            type="radio"
            id={`${name}-${value}`} // Unique ID for each radio button
            name={name} // Same name to group the radio buttons
            value={value}
            {...register(name)} // Register the group with the form library
          />
          {optionLabel}
        </label>
      ))}
    </div>
    {/* Display error if present */}
    {error && <span className={styles.error}>{error}</span>}
  </div>
);

export default FormRadioGroup;
