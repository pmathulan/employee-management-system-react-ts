// src/pages/AddEmployeePage.tsx

import { v4 as uuidv4 } from 'uuid'; // Importing uuid for unique ID generation
import { useDispatch } from 'react-redux'; // Hook to dispatch actions to Redux store
import { useNavigate } from 'react-router-dom'; // Hook to navigate between routes
import EmployeeForm from '../components/EmployeeForm'; // Import EmployeeForm component
import { setEmployees } from '../employeeSlice'; // Import Redux action to update employee list
import { getEmployees } from '../employeeApi'; // API utility to get current employee data
import { EmployeeFormValues } from '../types/EmployeeFormValues'; // Type for form values

// Component to handle adding a new employee
const AddEmployeePage = () => {
  const dispatch = useDispatch(); // Initialize dispatch to send actions to the store
  const navigate = useNavigate(); // Initialize navigate for redirecting

  // Handle form submission
  const handleAdd = (data: EmployeeFormValues) => {
    // Generate unique ID for the new employee
    const newEmployee = { ...data, id: uuidv4() };

    // Fetch the current list of employees
    const currentEmployees = getEmployees();
    
    // Update the employees list with the new employee
    const updatedEmployees = [...currentEmployees, newEmployee];

    // Save the updated employee list to localStorage
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));

    // Dispatch the updated list to the global state (Redux store)
    dispatch(setEmployees(updatedEmployees));

    // Redirect to the home page or employee list
    navigate('/');
  };

  return (
    <div>
      <h2>Add New Employee</h2>
      {/* Render the EmployeeForm component and pass the handleAdd as the onSubmit handler */}
      <EmployeeForm initialValues={{}} onSubmit={handleAdd} />
    </div>
  );
};

export default AddEmployeePage;
