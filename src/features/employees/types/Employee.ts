// Define the structure of an Employee object.
export interface Employee {
    id: string; // Unique identifier for the employee.
    firstName: string; // Employee's first name.
    lastName: string; // Employee's last name.
    email: string; // Employee's email address.
    phone: string; // Employee's phone number.
    gender: 'Male' | 'Female' | 'Other'; // Employee's gender.
    dateOfBirth: string; // Date of birth (ISO format).
    joinedDate: string; // Date when the employee joined (ISO format).
}

// export type EmployeeFormValues = Omit<Employee, 'id'>;

