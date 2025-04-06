import React from "react";
import "../styles/DeleteEmployeeDialog.module.css"; // Import the custom CSS

// Props type for DeleteEmployeeDialog component
interface DeleteEmployeeDialogProps {
  open: boolean; // Whether the dialog should be displayed
  onClose: () => void; // Function to call when user closes dialog
  onConfirm: () => void; // Function to call when user confirms deletion
  employeeName: string; // Employee name to display in message
}

const DeleteEmployeeDialog: React.FC<DeleteEmployeeDialogProps> = ({
  open,
  onClose,
  onConfirm,
  employeeName,
}) => {
  // If not open, don't render anything
  if (!open) return null;

  return (
    <div className="dialog-backdrop">
      <div className="dialog">
        <h2 className="dialog-title">Delete Employee</h2>
        <div className="dialog-content">
          <p>
            Are you sure you want to delete the employee{" "}
            <strong>{employeeName}</strong>?
          </p>
        </div>
        <div className="dialog-actions">
          <button className="btn cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="btn delete-btn" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteEmployeeDialog;
