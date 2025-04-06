import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { employeeSchema } from "../validation/employeeSchema"; // Yup schema for validation rules
import { EmployeeFormValues } from "../types/Employee"; // TypeScript type defining the form data structure
import "../styles/EmployeeForm.css"; // Component-specific styles

/**
 * @interface Props
 * Defines the properties expected by the EmployeeForm component.
 *
 * @param {Partial<EmployeeFormValues>} initialValues - Optional initial data to pre-populate the form fields.
 * 'Partial' means all properties of EmployeeFormValues are optional.
 * Useful for editing existing employee data.
 * @param {(data: EmployeeFormValues) => void} onSubmit - Callback function executed when the form is submitted
 * successfully after passing validation. Receives the validated form data.
 * @param {boolean} [isEdit=false] - Optional flag to indicate if the form is being used for editing an existing employee.
 * Defaults to false (meaning it's for adding a new employee).
 * Used to change the submit button text.
 */
interface Props {
  initialValues: Partial<EmployeeFormValues>;
  onSubmit: (data: EmployeeFormValues) => void;
  isEdit?: boolean;
}

/**
 * EmployeeForm Component
 *
 * A reusable form component for creating or editing employee data.
 * It utilizes `react-hook-form` for efficient state management and validation,
 * and `yup` (via `@hookform/resolvers/yup`) for defining and applying validation rules.
 *
 * @param {Props} props - The properties passed to the component.
 */
const EmployeeForm = ({ initialValues, onSubmit, isEdit = false }: Props) => {
  // Initialize react-hook-form.
  const {
    control, // Object to register controlled components (like inputs) with react-hook-form.
    handleSubmit, // Wrapper function for the form's onSubmit handler. It triggers validation before calling our onSubmit prop.
    formState: { errors }, // Object containing validation errors for each field.
  } = useForm<EmployeeFormValues>({
    // Set default values for the form fields. Uses initialValues prop if provided.
    defaultValues: initialValues,
    // Integrate Yup validation schema with react-hook-form.
    resolver: yupResolver(employeeSchema),
    // Optionally set mode: 'onChange' | 'onBlur' | 'onSubmit' (default) | 'onTouched' | 'all'
    // to change when validation triggers. Default 'onSubmit' is usually fine.
    // mode: 'onChange',
  });

  // The main form structure.
  // `handleSubmit(onSubmit)` ensures that our `onSubmit` function (passed via props)
  // is only called if the form validation (defined in `employeeSchema`) passes.
  // `noValidate` attribute disables default browser validation, allowing react-hook-form/yup to handle it.
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* --- First Name Field --- */}
      <div className="form-group">
        {/* Standard label associated with the input field via htmlFor */}
        <label htmlFor="firstName">First Name</label>
        {/* Controller component integrates the input with react-hook-form */}
        <Controller
          name="firstName" // Must match a key in EmployeeFormValues and employeeSchema
          control={control} // Pass the control object from useForm
          // render prop defines the actual input element and connects it
          render={({ field }) => (
            <input
              id="firstName" // Corresponds to label's htmlFor
              type="text"
              {...field} // Spreads necessary props (onChange, onBlur, value, ref) from react-hook-form into the input
              className={`input ${errors.firstName ? "error" : ""}`} // Dynamically adds 'error' class if validation fails for this field
              autoComplete="given-name" // Helps browsers auto-fill
              placeholder="Enter first name" // User-friendly placeholder text
            />
          )}
        />
        {/* Conditionally render error message if validation fails for this field */}
        {errors.firstName && (
          <span className="error-message">{errors.firstName.message}</span>
        )}
      </div>

      {/* --- Last Name Field --- */}
      {/* Structure follows the same pattern as First Name */}
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <input
              id="lastName"
              type="text"
              {...field}
              className={`input ${errors.lastName ? "error" : ""}`}
              autoComplete="family-name"
              placeholder="Enter last name"
            />
          )}
        />
        {errors.lastName && (
          <span className="error-message">{errors.lastName.message}</span>
        )}
      </div>

      {/* --- Email Field --- */}
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input
              id="email"
              type="email" // Input type 'email' provides basic browser validation and keyboard hints on mobile
              {...field}
              className={`input ${errors.email ? "error" : ""}`}
              autoComplete="email"
              placeholder="Enter email address"
            />
          )}
        />
        {errors.email && (
          <span className="error-message">{errors.email.message}</span>
        )}
      </div>

      {/* --- Phone Field --- */}
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <input
              id="phone"
              type="tel" // Input type 'tel' provides keyboard hints on mobile
              {...field}
              className={`input ${errors.phone ? "error" : ""}`}
              autoComplete="tel"
              placeholder="Enter phone number"
            />
          )}
        />
        {errors.phone && (
          <span className="error-message">{errors.phone.message}</span>
        )}
      </div>

      {/* --- Gender Field (Radio Buttons) --- */}
      <div className="form-group">
        <label>Gender</label>{" "}
        {/* No htmlFor needed as it applies to the group */}
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            // Grouping radio buttons for layout and clarity
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  value="Male" // The value sent on form submission if this is selected
                  // Check this radio if the field's current value matches
                  checked={field.value === "Male"}
                  // Use field.onChange provided by Controller to update react-hook-form state
                  onChange={field.onChange}
                  // Note: For radio groups, `field` object (value, onChange) applies to the group.
                  // We manually set the 'value' and check 'checked' status for each radio.
                />{" "}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  value="Female"
                  checked={field.value === "Female"}
                  onChange={field.onChange}
                />{" "}
                Female
              </label>
              {/* Add other gender options if needed following the same pattern */}
            </div>
          )}
        />
        {/* Display validation error for the gender field */}
        {errors.gender && (
          <span className="error-message">{errors.gender.message}</span>
        )}
      </div>

      {/* --- Date of Birth Field --- */}
      <div className="form-group">
        <label htmlFor="dob">Date of Birth</label>
        <Controller
          name="dateOfBirth"
          control={control}
          render={({ field }) => (
            <input
              id="dob"
              type="date" // Input type 'date' provides a native date picker UI
              {...field}
              // Important: Ensure the value format matches what the 'date' input expects (YYYY-MM-DD)
              // If your initialValues or state uses a different format (e.g., Date object, timestamp),
              // you might need to format it here before passing to the input and parse it on change/submit.
              // React Hook Form often handles basic Date object <-> string conversion.
              className={`input ${errors.dateOfBirth ? "error" : ""}`}
            />
          )}
        />
        {errors.dateOfBirth && (
          <span className="error-message">{errors.dateOfBirth.message}</span>
        )}
      </div>

      {/* --- Joined Date Field --- */}
      <div className="form-group">
        <label htmlFor="joinedDate">Joined Date</label>
        <Controller
          name="joinedDate"
          control={control}
          render={({ field }) => (
            <input
              id="joinedDate"
              type="date"
              {...field}
              className={`input ${errors.joinedDate ? "error" : ""}`}
            />
          )}
        />
        {errors.joinedDate && (
          <span className="error-message">{errors.joinedDate.message}</span>
        )}
      </div>

      {/* --- Submit Button --- */}
      <div className="form-group">
        <button type="submit" className="button primary">
          {/* Dynamically change button text based on whether we are editing or adding */}
          {isEdit ? "Update Employee" : "Add Employee"}
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;
