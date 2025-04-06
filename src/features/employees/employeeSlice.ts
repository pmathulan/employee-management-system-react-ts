
import { createSlice } from '@reduxjs/toolkit';
import { getEmployees } from './employeeApi';
import { Employee } from './types/Employee';

interface EmployeeState {
    list: Employee[];
}

const initialState: EmployeeState = {
    list: getEmployees() // Load from localStorage initially
};

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        setEmployees(state, action) {
            // Set the employee list from payload
            state.list = action.payload;
        },
        deleteEmployee(state, action) {
            // Remove an employee by ID
            state.list = state.list.filter(emp => emp.id !== action.payload);
            // Persist updated list to localStorage
            localStorage.setItem('employees', JSON.stringify(state.list));
        }
    }
});

export const { setEmployees, deleteEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
