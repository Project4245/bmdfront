import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Base from "./components/Base";
import Services from "./pages/Services";
import Otp from "./pages/Otp";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="otp" element={<Otp />} />
        <Route path="signup" element={<Signup />} />
        <Route path="services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
