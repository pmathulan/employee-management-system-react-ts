import { toast } from "react-toastify";
import {
  EMPLOYEE_ADD_SUCCESS,
  EMPLOYEE_UPDATE_SUCCESS,
  ERROR_MESSAGE,
} from "../../../constants/messages";
import { EmployeeFormValues } from "../types/EmployeeFormValues";

// Custom hook to handle form submission with toast notification and error handling.
export const useHandleFormSubmit = (
  onSubmit: (data: EmployeeFormValues, reset: () => void) => Promise<void> | void,
  reset: () => void,
  isEdit: boolean
) => {
  return async (data: EmployeeFormValues) => {
    try {
      const result = onSubmit(data, reset);
      if (result instanceof Promise) {
        await result;
      }

      // Show success toast
      toast.success(isEdit ? EMPLOYEE_UPDATE_SUCCESS : EMPLOYEE_ADD_SUCCESS);
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error(ERROR_MESSAGE);
    }
  };
};
