
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import {  toast } from "../Component/toastr/toaster.tsx";
import Cookies from "js-cookie";

const UserSignUP = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });

    // Clear validation error for the current field
    setValidationErrors({
      ...validationErrors,
      [e.target.id]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    // Validate required fields
    const requiredFields = ["name", "email", "phone", "password"];
    let isValid = true;
  
    const newValidationErrors = {};
  
    requiredFields.forEach((field) => {
      if (!user[field]) {
        newValidationErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
        isValid = false;
      }
    });
  
    if (!isValid) {
      setValidationErrors(newValidationErrors);
      return;
    }
  
    try {
      const response = await axios.post("https://nutrifit-lyl7.onrender.com/api/auth/signup", user);
      if (response.data.status === 200) {
      toast.success(response.data.statusMessage);
      Cookies.set("userInfo", JSON.stringify(response.data.data));
      setTimeout(() => {
        navigate("/Dashboard");
      }, 3000);
      } else if(response.data.status === 422){
        // Unsuccessful registration
        toast.warning(response.data.statusMessage);
      }
      else {
        toast.error(response.data.statusMessage);
      }
    } catch (err) {
      setError(err.message);
    }
  };
  

  return (

    <div>
    
    <ToastContainer/>  <div className="flex justify-center w-full mt-3">
        <div className="w-full max-w-lg">
          <form className=" shadow-md rounded px-8 pt-6 pb-8 p-4 bg-green-400">
            <h1 className="text-4xl text-black mt-5 text-center mb-5">
              User Registration
            </h1>
            <div className="mb-4">
              <label className="block text-black text-lg font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline opacity-50"
                id="name"
                type="text"
                required
                autoComplete="off"
                placeholder="Name"
                value={user.name}
                onChange={handleChange}
              />
              {validationErrors.name && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-black text-lg font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline opacity-50"
                id="email"
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
                value={user.email}
                onChange={handleChange}
              />
              {validationErrors.email && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-black text-lg font-bold mb-2" htmlFor="phone">
                Contact
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline opacity-50"
                id="phone"
                type="number"
                placeholder="Contact"
                value={user.phone}
                onChange={handleChange}
              />
              {validationErrors.phone && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.phone}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-black text-lg font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline opacity-50"
                id="password"
                type="password"
                placeholder="******"
                value={user.password}
                onChange={handleChange}
              />
              {validationErrors.password && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.password}</p>
              )}
            </div>
            <div className="flex justify-center mt-10">
              <button
                className="bg-black  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSubmit}
              >
                Register
              </button>
            </div>
            <br />
            <hr />
            <hr />
            <br />
            <div className="flex justify-between text-black text-3xl">
              <FacebookIcon style={{ fontSize: 50 }} />
              <WhatsAppIcon style={{ fontSize: 50 }} />
              <InstagramIcon style={{ fontSize: 50 }} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserSignUP;
