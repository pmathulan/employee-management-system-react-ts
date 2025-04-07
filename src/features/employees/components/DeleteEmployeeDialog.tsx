import * as React from "react";
import { useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { EMPLOYEE_DELETE_PROMPT } from "../../../constants/messages";

// Props for confirmation modal
interface DeleteEmployeeDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  employeeName: string;
}

const DeleteEmployeeDialog: React.FC<DeleteEmployeeDialogProps> = ({
  open,
  onClose,
  onConfirm,
  employeeName,
}) => {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete Employee</DialogTitle>
      <DialogContent>
        <p>
          {EMPLOYEE_DELETE_PROMPT}
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
