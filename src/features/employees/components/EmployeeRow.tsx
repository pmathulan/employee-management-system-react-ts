import { Employee } from '../types/Employee';
import styles from '../styles/EmployeeRow.module.css';

interface Props {
  employee: Employee;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const EmployeeRow = ({ employee, onEdit, onDelete }: Props) => {
  return (
    <tr>
      {/* Display all employee attributes */}
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.email}</td>
      <td>{employee.phone}</td>
      <td>{employee.gender}</td>
      <td>{employee.dob}</td>
      <td>{employee.joinedDate}</td>

      {/* Action buttons */}
      <td>
        <button className={styles.editBtn} onClick={() => onEdit(employee.id)}>
          Edit
        </button>
        <button className={styles.deleteBtn} onClick={() => onDelete(employee.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default EmployeeRow;
