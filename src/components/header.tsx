import * as React from "react";
import "../styles/Header.css";
import { useNavigate } from "react-router";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a
          onClick={() => navigate("/")}
          className="logo d-flex align-items-center me-auto"
        >
          <h6 className="sitename">Employee Management</h6>
        </a>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a
                onClick={() => navigate("/employee/add")}
                className="btn-getstarted"
              >
                Add Employee
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
