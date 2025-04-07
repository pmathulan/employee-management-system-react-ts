import { useForm, UseFormReset } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import FormDateField from "../../../components/FormDateField";
import FormField from "../../../components/FormField";
import FormRadioGroup from "../../../components/FormRadioGroup";

import { employeeSchema } from "../validation/employeeSchema";
import { EmployeeFormValues } from "../types/Employee";
import { useUnsavedChangesPrompt } from "../../../hooks/useUnsavedChangesPrompt";
import styles from "../../../styles/Form.module.css";
import { ToastContainer, toast } from "react-toastify";

import {
  EMPLOYEE_ADD_SUCCESS,
  EMPLOYEE_UPDATE_SUCCESS,
} from "../../../constants/messages";
import { useHandleFormSubmit } from "../hooks/useHandleFormSubmit";

// Props for the EmployeeForm component.
interface Props {
  /** Initial values to pre-populate the form, typically used for editing. */
  initialValues: Partial<EmployeeFormValues>;
  onSubmit: (
    data: EmployeeFormValues,
    // onSubmit receives validated form data AND the reset function from useForm
    reset: UseFormReset<EmployeeFormValues> // Use imported type for reset function
  ) => Promise<void> | void;
  /** Flag indicating if the form is in 'edit' mode (defaults to false). Affects button text. */
  isEdit?: boolean;
}

const EmployeeForm = ({ initialValues, onSubmit, isEdit = false }: Props) => {
  // Initialize the form with validation schema
  const {
    register, // Function to register inputs with RHF
    handleSubmit, // Wrapper for form submission, handles validation trigger
    reset, // Function to programmatically reset form state
    formState: { errors, isDirty, isSubmitting }, // Form state: errors for validation, isDirty for unsaved changes
  } = useForm<EmployeeFormValues>({
    defaultValues: initialValues, // with potentially provided initialValues (for editing).
    resolver: yupResolver(employeeSchema), // Use yup for validation
    mode: "onBlur", // Validate fields when they lose focus for earlier feedback
  });

  // --- Unsaved Changes Prompt ---
  // Activate the prompt if the form has been modified (isDirty)
  useUnsavedChangesPrompt(isDirty);

  // --- Form Submission Handler ---
  /**Internal handler that calls the onSubmit prop passed from the parent.
   * This function is called by RHF *only after* validation passes.
   * to the `onSubmit` prop provided by the parent component.
   * @param {EmployeeFormValues} data - The validated form data.
   */
  const handleFormSubmit = useHandleFormSubmit(onSubmit, reset, isEdit);

  // --- Render Logic ---
  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className={styles.form}
      noValidate
      role="form"
    >
      {/* Render reusable form field components */}
      <FormField
        label="First Name"
        name="firstName"
        type="text"
        register={register}
        error={errors.firstName?.message}
        autoComplete="given-name"
      />
      <FormField
        label="Last Name"
        name="lastName"
        type="text"
        register={register}
        error={errors.lastName?.message}
        autoComplete="family-name"
      />
      <FormField
        label="Email"
        name="email"
        type="email"
        register={register}
        error={errors.email?.message}
        autoComplete="email"
      />
      <FormField
        label="Phone"
        name="phone"
        type="tel"
        register={register}
        error={errors.phone?.message}
        autoComplete="tel"
      />
      {/* Assumes FormRadioGroup handles registration and options mapping */}
      <FormRadioGroup
        label="Gender"
        name="gender"
        register={register}
        error={errors.gender?.message}
        options={[
          { label: "Male", value: "Male" },
          { label: "Female", value: "Female" },
          { label: "Other", value: "Other" },
        ]}
      />
      {/* Assumes FormDateField handles date input registration and validation */}
      <FormDateField
        label="Date of Birth"
        name="dateOfBirth"
        register={register}
        error={errors.dateOfBirth?.message}
      />

      <FormDateField
        label="Joined Date"
        name="joinedDate"
        register={register}
        error={errors.joinedDate?.message}
      />

      <button
        type="submit"
        className={styles.button}
        disabled={isSubmitting} // Disable button while RHF indicates submission is in progress
      >
        {/* Show different text based on mode, indicate loading state */}
        {isSubmitting
          ? "Submitting..."
          : isEdit
          ? "Update Employee"
          : "Add Employee"}
      </button>
    </form>
  );
};

export default EmployeeForm;
