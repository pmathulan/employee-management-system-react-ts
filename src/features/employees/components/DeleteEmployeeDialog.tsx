// src/components/DeleteEmployeeDialog.tsx

import * as React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

interface DeleteEmployeeDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  employeeName: string; // Employee name for better UX
}

const DeleteEmployeeDialog: React.FC<DeleteEmployeeDialogProps> = ({
  open,
  onClose,
  onConfirm,
  employeeName,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete Employee</DialogTitle>
      <DialogContent>
        <p>
          Are you sure you want to delete the employee{" "}
          <strong>{employeeName}</strong>?
        </p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="primary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteEmployeeDialog;
