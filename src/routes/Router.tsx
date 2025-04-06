// React Router setup using React Router v6+

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import EmployeeListPage from '../features/employees/pages/EmployeeListPage';
import AddEmployeePage from '../features/employees/pages/AddEmployeePage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route to employee list */}
        <Route path="/" element={<EmployeeListPage />} />
        <Route path="/employee/add" element={<AddEmployeePage />} />
        {/* <Route path="/employee/edit/:id" element={<EditEmployee />} /> */}

        {/* Fallback to homepage if route not found */}
        {/* TODO: implement not found page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
