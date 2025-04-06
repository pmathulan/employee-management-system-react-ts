import { Employee } from '../types/Employee';
import EmployeeRow from './EmployeeRow';
import styles from '../styles/EmployeeTable.module.css';

interface Props {
  employees: Employee[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const EmployeeTable = ({ employees, onEdit, onDelete }: Props) => {
  return (
    <table className={styles.table}>
      {/* Table headers */}
      <thead>
        <tr>
          <th>First Name</th><th>Last Name</th><th>Email</th><th>Phone</th>
          <th>Gender</th><th>DOB</th><th>Joined</th><th>Actions</th>
        </tr>
      </thead>

      {/* Table body: map through employees and render row */}
      <tbody>
        {employees.map(emp => (
          <EmployeeRow
            key={emp.id}
            employee={emp}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
