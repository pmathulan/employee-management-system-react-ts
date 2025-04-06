// src/App.tsx
import './App.css';  // Import CSS file
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3' // Adapter for date handling
import AppRouter from './routes/Router';  // Your router component

function App() {
  return (
    // Wrap AppRouter with LocalizationProvider to provide date context
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <AppRouter />  {/* router component to handle routing */}
    </LocalizationProvider>
  );
}

export default App;
