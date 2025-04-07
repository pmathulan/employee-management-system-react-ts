import { Employee } from "../types/Employee";

interface Props {
  employee: Employee;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const EmployeeRow = ({ employee, onEdit, onDelete }: Props) => {
  return (
    <tr>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.email}</td>
      <td>{employee.phone}</td>
      <td>{employee.gender}</td>
      <td>{employee.dateOfBirth}</td>
      <td>{employee.joinedDate}</td>
      <td className="text-center">
        <div className="d-flex flex-column flex-sm-row justify-content-center">
          <button
            className="btn btn-primary mb-2 mb-sm-0 me-sm-2 w-100 w-sm-auto"
            onClick={() => onEdit(employee.id)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger w-100 w-sm-auto"
            onClick={() => onDelete(employee.id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default EmployeeRow;
