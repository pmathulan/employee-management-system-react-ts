import { useNavigate } from "react-router";
import { Employee } from "../types/Employee";
import EmployeeRow from "./EmployeeRow";
import { toast } from "react-toastify";
import { ERROR_MESSAGE } from "../../../constants/messages";

interface Props {
  employees: Employee[];
  onEdit: (id: string) => void;
  onDelete: (id: string, name: string) => void;
}

const EmployeeTable = ({ employees, onEdit, onDelete }: Props) => {
  const navigate = useNavigate();
  const handleDelete = (id: string, name: string) => {
    // Perform delete logic here (e.g., API call)
    try {
      // Assuming onDelete is making an API call or some logic
      onDelete(id, name);

      // Show success message on successful deletion
      toast.success(`${name} has been deleted successfully!`);
    } catch (error) {
      console.error("Delete Error:", error);
      toast.error(ERROR_MESSAGE);
    }
  };

  return (
    <>
      <div className="container">
        <div className="card mt-5">
          <div className="card-header">
            <div className="d-flex align-items-center">
              <div className="p-2 flex-grow-1">
                <h5 className="text-bold">Employee Table</h5>
              </div>
              <div className="p-2">
                {" "}
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/employee/add")}
                >
                  Add Employee
                </button>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr className="border-bottom-primary">
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Gender</th>
                  <th scope="col">DOB</th>
                  <th scope="col">Joined</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp) => (
                  <EmployeeRow
                    key={emp.id}
                    employee={emp}
                    onEdit={onEdit}
                    onDelete={() =>
                      onDelete(emp.id, `${emp.firstName} ${emp.lastName}`)
                    }
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeTable;
