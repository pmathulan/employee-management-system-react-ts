// src/hooks/useDeleteEmployeeDialog.ts

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteEmployee } from '../employeeSlice';

const useDeleteEmployeeDialog = () => {
    const dispatch = useDispatch();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState<string | null>(null);
    const [employeeName, setEmployeeName] = useState('');

    const handleDeleteOpen = (id: string, name: string) => {
        setSelectedEmployeeId(id);
        setEmployeeName(name);
        setIsDialogOpen(true);
    };

    const handleDeleteConfirm = () => {
        if (selectedEmployeeId) {
            dispatch(deleteEmployee(selectedEmployeeId));
            setIsDialogOpen(false);
        }
    };

    const handleDeleteClose = () => {
        setIsDialogOpen(false);
    };

    return {
        isDialogOpen,
        employeeName,
        handleDeleteOpen,
        handleDeleteConfirm,
        handleDeleteClose,
    };
};

export default useDeleteEmployeeDialog;
