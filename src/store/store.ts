// Configures and exports Redux store

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

export const store = configureStore({
    reducer: rootReducer
});

// Type for useSelector/useDispatch with TS
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
