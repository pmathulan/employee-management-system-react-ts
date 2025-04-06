// src/components/EmployeeTable.tsx

import { Employee } from "../types/Employee";
import EmployeeRow from "./EmployeeRow";
import styles from "../styles/EmployeeTable.module.css";

interface Props {
  employees: Employee[];
  onEdit: (id: string) => void;
  onDelete: (id: string, name: string) => void; // Update to accept both id and name
}

const EmployeeTable = ({ employees, onEdit, onDelete }: Props) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>Joined</th>
          <th>Actions</th>
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
            } // Pass id and name to onDelete
          />
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
