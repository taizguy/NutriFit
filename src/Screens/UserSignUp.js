import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { Form, Alert } from "react-bootstrap";



const UserSignUP = () => {
  const { signUp } = useUserAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(name, email, contact, password);
      alert("User Added");
      navigate("/Name");
    } catch (err) {
      setError(err.message);
    }
  };

  

  return (
    <div>

      <div className="flex justify-center w-full mt-3">
        <div class="w-full max-w-lg">
      
          <form
            class=" shadow-md rounded px-8 pt-6 pb-8 p-4 bg-green-400"
            
          >
            <h1 className="text-4xl text-black mt-5 text-center mb-5">
              User Registration
            </h1>
            <div class="mb-4 ">
              <label class="block text-black text-lg font-bold mb-2" for="name">
                Name
              </label>

              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline opacity-50"
                id="name"
                type="name"
                required
                autoComplete="off"
                placeholder="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div class="mb-4">
              <label class="block text-black text-lg font-bold mb-2" for="email">
                Email
              </label>

              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline opacity-50"
                id="email"
                type="email"
                required
                autoComplete="off"
                placeholder="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div class="mb-4">
              <label class="block text-black text-lg font-bold mb-2" for="contact">
                Contact
              </label>

              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline opacity-50"
                id="contact"
                type="number"
                placeholder="Contact"
                onChange={(e) => {
                  setContact(e.target.value);
                }}
              />
            </div>

            <div class="mb-4">
              <label
                class="block text-black text-lg font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline opacity-50"
                id="password"
                type="password"
                placeholder="******"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div class="flex justify-center mt-10">
              <button
                class="bg-black  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
