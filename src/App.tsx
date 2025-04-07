import { ToastContainer } from "react-toastify";
import AppRouter from "./routes/Router"; // Router component

function App() {
  return (
    <>
      <AppRouter /> {/*router component to handle routing*/}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
