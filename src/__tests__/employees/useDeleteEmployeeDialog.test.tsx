import { act, renderHook } from "@testing-library/react";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../../features/employees/employeeSlice";
import useDeleteEmployeeDialog from "../../hooks/useDeleteEmployeeDialog";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

jest.mock("../../features/employees/employeeSlice", () => ({
  deleteEmployee: jest.fn(),
}));

describe("useDeleteEmployeeDialog", () => {
  let dispatch: jest.Mock;

  beforeEach(() => {
    dispatch = jest.fn();
    (useDispatch as unknown as jest.Mock).mockReturnValue(dispatch);
  });

  it("should handle opening and closing the dialog", () => {
    const { result } = renderHook(() => useDeleteEmployeeDialog());

    // Initial state
    expect(result.current.isDialogOpen).toBe(false);

    // Open the dialog
    act(() => {
      result.current.handleDeleteOpen("1", "John Doe");
    });

    expect(result.current.isDialogOpen).toBe(true);
    expect(result.current.employeeName).toBe("John Doe");

    // Close the dialog
    act(() => {
      result.current.handleDeleteClose();
    });

    expect(result.current.isDialogOpen).toBe(false);
  });

  it("should dispatch deleteEmployee on confirm", () => {
    const { result } = renderHook(() => useDeleteEmployeeDialog());
    act(() => {
      result.current.handleDeleteOpen("1", "John Doe");
    });

    act(() => {
      result.current.handleDeleteConfirm();
    });

    expect(dispatch).toHaveBeenCalledWith(deleteEmployee("1"));
    expect(result.current.isDialogOpen).toBe(false);
  });
});
