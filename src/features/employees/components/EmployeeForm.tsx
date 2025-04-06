import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Stack,
} from "@mui/material";
import { employeeSchema } from "../validation/employeeSchema";
import { EmployeeFormValues } from "../types/Employee";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// Interface for the EmployeeForm component props
interface Props {
  initialValues: Partial<EmployeeFormValues>; // Initial values for the form, can be partial EmployeeFormValues
  onSubmit: (data: EmployeeFormValues) => void; // Callback when form is submitted
  isEdit?: boolean; // Flag to indicate whether the form is in edit mode
}

const EmployeeForm = ({ initialValues, onSubmit, isEdit = false }: Props) => {
  // Initialize the form with validation schema
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EmployeeFormValues>({
    defaultValues: initialValues, // Make sure initial values are set correctly
    resolver: yupResolver(employeeSchema), // Use yup for validation
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Stack spacing={2}>
        {/* First Name */}
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <TextField
              label="First Name"
              {...field}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              fullWidth
              inputProps={{
                autoComplete: "given-name", // Autofill support for first name
              }}
            />
          )}
        />

        {/* Last Name */}
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <TextField
              label="Last Name"
              {...field}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
              fullWidth
              inputProps={{
                autoComplete: "family-name", // Autofill support for last name
              }}
            />
          )}
        />

        {/* Email */}
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              label="Email"
              {...field}
              error={!!errors.email}
              helperText={errors.email?.message}
              fullWidth
              inputProps={{
                autoComplete: "email", // Autofill support for email
              }}
            />
          )}
        />

        {/* Phone */}
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <TextField
              label="Phone"
              {...field}
              error={!!errors.phone}
              helperText={errors.phone?.message}
              fullWidth
              inputProps={{
                autoComplete: "tel", // Autofill support for phone number
              }}
            />
          )}
        />

        {/* Gender */}
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <RadioGroup row {...field}>
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="Female"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          )}
        />
        {errors.gender && (
          <span style={{ color: "red" }}>{errors.gender.message}</span>
        )}

        {/* Date of Birth */}
        <Controller
          name="dateOfBirth"
          control={control}
          render={({ field }) => (
            <DatePicker
              label="Date of Birth"
              value={field.value ? new Date(field.value) : null} // Ensure it's a Date object or null
              onChange={(date) => field.onChange(date)} // Pass the Date object directly
              slotProps={{
                textField: {
                  fullWidth: true,
                  error: !!errors.dateOfBirth,
                  helperText: errors.dateOfBirth?.message,
                  inputProps: {
                    autoComplete: "bday", // Autofill support for date of birth
                  },
                },
              }}
            />
          )}
        />

        {/* Joined Date */}
        <Controller
          name="joinedDate"
          control={control}
          render={({ field }) => (
            <DatePicker
              label="Joined Date"
              value={field.value ? new Date(field.value) : null} // Ensure it's a Date object or null
              onChange={(date) => field.onChange(date)} // Pass the Date object directly
              slotProps={{
                textField: {
                  fullWidth: true,
                  error: !!errors.joinedDate,
                  helperText: errors.joinedDate?.message,
                  inputProps: {
                    autoComplete: "bday", // Autofill support for joined date
                  },
                },
              }}
            />
          )}
        />

        {/* Submit */}
        <Button type="submit" variant="contained" color="primary">
          {isEdit ? "Update Employee" : "Add Employee"}
        </Button>
      </Stack>
    </form>
  );
};

export default EmployeeForm;
