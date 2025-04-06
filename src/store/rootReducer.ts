// Combines all feature reducers into a rootReducer

import { combineReducers } from '@reduxjs/toolkit';
import employeeReducer from '../features/employees/employeeSlice';

const rootReducer = combineReducers({
    employee: employeeReducer
});

export default rootReducer;
