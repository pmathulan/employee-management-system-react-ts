import { Employee } from "./types/Employee";

// Fetch all employees from localStorage
export const getEmployees = (): Employee[] => {
    const data = localStorage.getItem('employees');
    return data ? JSON.parse(data) : [];
};
