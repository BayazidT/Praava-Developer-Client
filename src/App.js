import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import User from './pages/single/User';
import Users from './pages/single/Users';
import API from './pages/api/API';
import CreateAPI from './pages/create/CreateAPI';


function App() {
  return (
    <>
       <Router>
    <Routes>
    <Route  path="/" element={<Home/>} />
    <Route  path="/users" element={<Users/>} />
    <Route  path="/apis" element={<API/>} />
    <Route  path="/createapi" element={<CreateAPI/>} />
    <Route  path="/user/:id" element={<User/>} />
    <Route  path="/register" element={<Register/>} />
    <Route  path="/login" element={<Login/>} />
    </Routes>
  </Router>
    </>
  );
}

export default App;
