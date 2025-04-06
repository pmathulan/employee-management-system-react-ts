import * as yup from 'yup';

// Define the schema for validation using Yup
export const employeeSchema = yup.object().shape({
    firstName: yup
        .string()
        .min(6, 'First name must be at least 6 characters')
        .max(10, 'First name cannot exceed 10 characters')
        .required('First name is required'),

    lastName: yup
        .string()
        .min(6, 'Last name must be at least 6 characters')
        .max(10, 'Last name cannot exceed 10 characters')
        .required('Last name is required'),

    email: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),

    phone: yup
        .string()
        .matches(/^(?:\+65)?[89]\d{7}$/, 'Phone number must be a valid Singapore phone number')
        .required('Phone number is required'),

    gender: yup
        .string()
        .oneOf(['Male', 'Female', 'Other'], 'Gender is required')
        .required('Gender is required'),

    dateOfBirth: yup
        .string()
        .required('Date of birth is required')
        .test('is-valid-date', 'Date of birth must be a valid past date', (value) => {
            const dob = new Date(value!);
            return dob instanceof Date && !isNaN(dob.valueOf()) && dob < new Date();
        }),

    joinedDate: yup
        .string()
        .required('Joined date is required')
        .test('is-after-dob', 'Joined date must be after Date of Birth', function (joined) {
            const { dateOfBirth } = this.parent;
            return new Date(joined) > new Date(dateOfBirth);
        }),
});
