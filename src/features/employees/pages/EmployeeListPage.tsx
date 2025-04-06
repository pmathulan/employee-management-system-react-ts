import { useSelector, useDispatch } from 'react-redux';
import EmployeeTable from '../components/EmployeeTable';
import { deleteEmployee } from '../employeeSlice';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../../store/store';

const EmployeeListPage = () => {
  const employees = useSelector((state: RootState) => state.employee.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle edit by navigating to edit form
  const handleEdit = (id: string) => {
    navigate(`/employee/edit/${id}`);
  };

  // Handle delete by dispatching Redux action
  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      dispatch(deleteEmployee(id));
    }
  };

  return (
    <div>
      <h2>Employee List</h2>
      <button onClick={() => navigate('/employee/add')}>Add Employee</button>
      <EmployeeTable
        employees={employees}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default EmployeeListPage;
