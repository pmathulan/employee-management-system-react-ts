// employeeApi.ts

import { Employee } from './types/Employee';

// Fetch all employees (could eventually make this an API call)
export const getEmployees = (): Employee[] => {
    const data = localStorage.getItem('employees');
    return data ? JSON.parse(data) : [];
};
