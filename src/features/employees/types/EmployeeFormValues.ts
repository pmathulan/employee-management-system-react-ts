import { Employee } from "./Employee";

// Define the structure of Employee form values excluding 'id'.
export type EmployeeFormValues = Omit<Employee, 'id'>;
