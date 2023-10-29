import './App.css';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Welcome from './components/Welcome';
import Login from './components/Login';
import ToDocter from './components/ToDocter';
import TakePrescriptions from './components/TakePrescriptions';
import Pharmacy from './components/Pharmacy'
import PatientRegistrationForm from './components/PatientRegistrationForm';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/todocter" element={<ToDocter />}></Route>
          <Route path="/prescribe" element={<TakePrescriptions />}></Route>
          <Route path="/pharmacy" element={<Pharmacy />}></Route>
          <Route path="/register" element={<PatientRegistrationForm />}></Route>
        </Routes>
      </BrowserRouter>

      <Outlet />
    </>
  );
}

export default App;
