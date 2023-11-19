import React from 'react'
import Popular from "../Component/popular"
import Veggie from "../Component/veggie"
import Search from '../Component/Search'
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import Typewriter from "typewriter-effect";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";


const FeaturesScreen = ()=> {
  return (
    <>
    <div>
          <div>
            <nav className="bg-green-300 p-5">
              <div className="max-w-7xl mx-auto flex flex-row justify-between  items-center space-x-4">
                <Link to={"/"} class="text-black text-3xl font-bold ">
                  <LocalDiningIcon fontSize="20px" /> NutriFit
                </Link>{" "}
                <div className="space-x-4 ml-4 ">
                  <Link
                    to={"/Features"}
                    className="text-black text-xl  p-1 ml-10 rounded-xl"
                  >
                    Diets
                  </Link>
                  <Link
                    to={"/"}
                    className="text-black text-xl  p-1 rounded-xl"
                  >
                    Exercises
                  </Link>
                  <Link
                    to={"/Blogs"}
                    className="text-black text-xl  p-1 rounded-xl"
                  >
                    Blogs
                  </Link>
                  <Link
                    to={"/AboutUs"}
                    className="text-black text-xl  p-1 rounded-xl"
                  >
                    About Us
                  </Link>
                </div>
                <div className="space-x-4">
                  <Link
                    to={"/Login"}
                    className="text-black text-xl  p-1 rounded-xl"
                  >
                    <PersonIcon /> Login
                  </Link>
                  <Link
                    to={"/UserSignUp"}
                    className="text-black text-xl p-1 rounded-xl"
                  >
                    <AccountBoxIcon /> SignUp
                  </Link>
                </div>
              </div>
            </nav>
          </div>
          <div className="bg-cover bg-green-100 flex flex-row justify-around p-8">
            <div className="mt-48">
              {" "}
              <h1 className="text-5xl font-bold">
                <Typewriter
                  options={{
                    strings: [
                      "Check Our <br/> Recipes!",

                    ],
                    autoStart: true,
                    loop: true,
                    delay: 200,
                  }}
                />
              </h1>
              <br />
              <p className=" text-xl ">
              Part of the secret of a success in life<br /> is to eat what you like and <br />let the food fight it out inside.
              </p>
            </div>

            <div className="mt-10">
              <img
                className="rounded-lg drop-shadow-md"
                height={500}
                width={550}
                src={require("../Data/reciipe-removebg-preview.png")}
              />
            </div>
          </div>
        </div>
    
    <Search />
    <Popular />
    <Veggie />
    </>
  )
}

export default FeaturesScreen
