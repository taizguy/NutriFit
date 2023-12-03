import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import PersonIcon from '@mui/icons-material/Person';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useUserAuth } from "../context/UserAuthContext";
import { Form, Alert } from "react-bootstrap";







const Login = () => {
  const { logIn } = useUserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/Dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  



  return (
    <div>
      <div className="flex justify-center  w-full mt-10">

        <div class="w-full max-w-lg">
           {error && <Alert variant="danger">{error}</Alert>}
          <form class=" shadow-md rounded px-8 pt-6 pb-8 bg-green-400 bg-origin-border p-4">
            <h1 className="text-4xl font-extrabold text-black mt-5   text-center mb-5">Login</h1>
            <div class="mb-4 mt-8">
              <label class="block text-black text-lg font-bold mb-2" for="email">
                Email
              </label>

              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline opacity-50" id="name" required autoComplete="off" type="name" placeholder="email" onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div class="mb-4 mt-10">
              <label class="block text-black text-lg font-bold mb-2" for="password">
                Password
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline opacity-50" required autoComplete="off" id="password" type="password" placeholder="******" onChange={(e) => { setPassword(e.target.value) }} />
            </div>

            <div class="flex justify-center mt-10">
              <button class="bg-black  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit} >
                Login
              </button>
            </div>

            <div>
              <br />
              <br />
              <hr />
              <hr />
              <br />
              <div className='flex justify-between text-white'>

                <Link to={"/UserSignUp"}><PersonIcon /> Register as User</Link>

                <Link to={"/NutritionistSignUp"}><AddBusinessIcon /> Register as Nutritionist</Link></div>
            </div>
            <br />
            <hr />
            <hr />
            <br />


            <div className='flex justify-between text-black text-3xl'>
              <FacebookIcon style={{ fontSize: 50 }} />
              <WhatsAppIcon style={{ fontSize: 50 }} />
              <InstagramIcon style={{ fontSize: 50 }} />
            </div>

            


          </form>

        </div>
      </div>
    </div>
  );
}

export default Login;
