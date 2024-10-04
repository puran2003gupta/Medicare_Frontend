import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors/Doctors";
import DoctorDetails from "./pages/Doctors/DoctorDetails"; 
import MyAccount from "./Dashboard/user-account/MyAccount";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Dashboard from "./Dashboard/doctor-account/Dashboard";
import ProtectedRoute from "../protectedRoute";
import Location from "./components/Location/Location";

function App() {

  return (
    <>
    <Header/>
    <main>
    <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/home" element={<Home/>}/>
         <Route path="/doctors" element={<Doctors/>}/>
         <Route path="/doctors/:id" element={<DoctorDetails/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/register" element={<Signup/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/services" element={<Services/>}/>
         <Route path="/location" element={<Location />}></Route>
         <Route path="/users/profile/me" element={<ProtectedRoute allowedRoles={['patient']}><MyAccount /></ProtectedRoute>} />
         <Route path="/doctors/profile/me" element={<ProtectedRoute allowedRoles={['doctor']}><Dashboard /></ProtectedRoute>} />
     </Routes>
    </main>
  <Footer/>
  </>
  );
};

export default App;
