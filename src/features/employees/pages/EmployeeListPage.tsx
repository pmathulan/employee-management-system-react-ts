// src/pages/EmployeeListPage.tsx

import { useSelector } from "react-redux";
import EmployeeTable from "../components/EmployeeTable";
import { useNavigate } from "react-router";
import { RootState } from "../../../store/store";
import useDeleteEmployeeDialog from "../../../hooks/useDeleteEmployeeDialog";
import DeleteEmployeeDialog from "../components/DeleteEmployeeDialog";

const EmployeeListPage = () => {
  const employees = useSelector((state: RootState) => state.employee.list);
  const navigate = useNavigate();

  // Using the custom hook for delete dialog management
  const {
    isDialogOpen,
    employeeName,
    handleDeleteOpen,
    handleDeleteConfirm,
    handleDeleteClose,
  } = useDeleteEmployeeDialog();

  const handleEdit = (id: string) => {
    navigate(`/employee/edit/${id}`);
  };

  return (
    <div>
      <h2>Employee List</h2>
      <button onClick={() => navigate("/employee/add")}>Add Employee</button>
      {/* Render EmployeeTable and pass the necessary props for edit and delete actions */}
      <EmployeeTable
        employees={employees}
        onEdit={handleEdit}
        onDelete={handleDeleteOpen}
      />

      {/* Delete confirmation dialog */}
      <DeleteEmployeeDialog
        open={isDialogOpen}
        onClose={handleDeleteClose}
        onConfirm={handleDeleteConfirm}
        employeeName={employeeName}
      />
    </div>
  );
};

export default EmployeeListPage;
