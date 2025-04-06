// React Router setup using React Router v6+

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import EmployeeListPage from "../features/employees/pages/EmployeeListPage";
import AddEmployeePage from "../features/employees/pages/AddEmployeePage";

const AppRouter = () => {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        {/* Default route to employee list */}
        <Route path="/" element={<EmployeeListPage />} />
        <Route path="/employee/add" element={<AddEmployeePage />} />
        <Route path="/employee/edit/:id" element={<AddEmployeePage />} />

        {/* Fallback to homepage if route not found */}
        {/* TODO: implement not found page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
