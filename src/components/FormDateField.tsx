import * as React from "react";
import styles from "../styles/Form.module.css"; // Import CSS Modules for component-specific styling

interface FormDateFieldProps {
  /**
   * @prop {string} label - The text to display in the label associated with the date input.
   */
  label: string;
  /**
   * @prop {string} name - The name attribute for the input field. Also used as the id and passed to the register function. Crucial for form handling.
   */
  name: string;
  /**
   * @prop {string} [error] - An optional error message to display below the input field
   * if validation fails.
   */
  error?: string;
  /**
   * @prop {any} register - The register function provided by a form library (e.g., React Hook Form).
   * It's used to connect this input field to the form's state and validation. Note: Typing as 'any' is general;
   */
  register: any;
}

const FormDateField: React.FC<FormDateFieldProps> = ({
  label,
  name,
  error,
  register,
}) => (
  // Main container for the form group (label, input, error)
  <div className={styles.formGroup}>
    {/* Label for the date input, linked via htmlFor to the input's id */}
    <label htmlFor={name} className={styles.label}>
      {label}
    </label>
    {/* The actual date input element */}
    <input
      type="date" // Specifies the input type for native browser date picker UI
      id={name} // ID links the label for accessibility
      {...register(name)} // Spreads props from the form library's register function
      // This handles value, onChange, onBlur, ref, etc.
      className={styles.dateInput} // Apply styles from the CSS module
    />
    {/* Conditionally render the error message if the 'error' prop is provided */}
    {error && <span className={styles.error}>{error}</span>}
  </div>
);
export default FormDateField;
