import { useDispatch } from "react-redux"; // Hook to dispatch actions to Redux store
import { useNavigate, useParams } from "react-router"; // Hook to navigate between routes and get route params
import EmployeeForm from "../components/EmployeeForm"; // Import EmployeeForm component
import { getEmployees } from "../employeeApi"; // API utility to get current employee data
import { EmployeeFormValues } from "../types/EmployeeFormValues"; // Type for form values
import { v4 as uuidv4 } from "uuid"; // Importing uuid for unique ID generation
import { setEmployees } from "../employeeSlice";
import Header from "../../../components/header";

// Component to handle adding or editing an employee
const AddEmployeePage = () => {
  const dispatch = useDispatch(); // Initialize dispatch to send actions to the store
  const navigate = useNavigate(); // Initialize navigate for redirecting
  const { id } = useParams(); // Get the employee ID from the URL (for editing purposes)

  // Check if it's an edit page or add page
  const isEdit = Boolean(id);

  // Function to handle adding a new employee
  const handleAdd = (data: EmployeeFormValues) => {
    // Generate unique ID for the new employee
    const newEmployee = { ...data, id: uuidv4() };

    // Fetch the current list of employees
    const currentEmployees = getEmployees();

    // Update the employees list with the new employee
    const updatedEmployees = [...currentEmployees, newEmployee];

    // Save the updated employee list to localStorage
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    // Dispatch the updated list to the global state (Redux store)
    dispatch(setEmployees(updatedEmployees));

    // Redirect to the home page or employee list
    navigate("/");
  };

  // Function to handle editing an existing employee
  const handleEdit = (data: EmployeeFormValues) => {
    // Fetch the current list of employees
    const currentEmployees = getEmployees();

    // Find the employee by ID and update their details
    const updatedEmployees = currentEmployees.map((employee) =>
      employee.id === id ? { ...employee, ...data } : employee
    );

    // Save the updated employee list to localStorage
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    // Dispatch the updated list to the global state (Redux store)
    dispatch(setEmployees(updatedEmployees));

    // Redirect to the home page or employee list
    navigate("/");
  };

  // If it's an edit, fetch the current employee data or default to an empty object
  const initialValues = isEdit
    ? getEmployees().find((employee) => employee.id === id) || {}
    : {};

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">
                  {isEdit ? "Edit Employee" : "Add New Employee"}
                </h2>
              </div>
              <div className="card-body">
                <EmployeeForm
                  initialValues={initialValues as Partial<EmployeeFormValues>}
                  onSubmit={isEdit ? handleEdit : handleAdd}
                  isEdit={isEdit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEmployeePage;
