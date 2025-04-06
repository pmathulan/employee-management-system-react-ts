// Defines the shape of an Employee object
export interface Employee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    gender: 'Male' | 'Female';
    dob: string;        // Date of birth (ISO string)
    joinedDate: string; // Date joined (ISO string)
}
