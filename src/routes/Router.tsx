// React Router setup using React Router v6+

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import EmployeeListPage from '../features/employees/pages/EmployeeListPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route to employee list */}
        <Route path="/" element={<EmployeeListPage />} />
        {/* <Route path="/employee/add" element={<AddEmployee />} />
        <Route path="/employee/edit/:id" element={<EditEmployee />} /> */}

        {/* Fallback to homepage if route not found */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
