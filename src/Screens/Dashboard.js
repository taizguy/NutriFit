import React, { useState } from 'react';
import Exercise from './Profiling/2/Ex-yes/Exercise';
import FacebookIcon from "@mui/icons-material/Facebook";
import MonitorWeightIcon from "@mui/icons-material/MonitorWeight";
import { green, red } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import Typewriter from "typewriter-effect";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PersonIcon from "@mui/icons-material/Person";

const Dashboard = () => {
  const [totalCalories, setTotalCalories] = useState(2400);
  const [caloriesTaken, setCaloriesTaken] = useState(500)
  const [caloriesBurned, setCaloriesBurned] = useState(50)
  const handleAddExercise = () => {
    console.log('Adding exercise...');
  };

  const handleAddFood = () => {
    // For demonstration, increment total calories by 100 for each food added
    setTotalCalories((prevTotalCalories) => prevTotalCalories + 100);
  };
  

  // Calculate progress based on total calories (example: 2000 calories as goal)
  const progress = (caloriesTaken / totalCalories) * 100;

  return (
    <>
      <div>
        <nav class="bg-green-300 p-5">
          <div class="max-w-7xl mx-auto flex flex-row justify-between  items-center space-x-4">
            <Link to={"/"} class="text-black text-3xl font-bold ">
              <LocalDiningIcon fontSize="20px" /> NutriFit
            </Link>{" "}
            <div className="space-x-4 ml-4 ">
              <Link
                to={"/Features"}
                class="text-black text-xl p-1 ml-10 rounded-xl"
              >
                Diets
              </Link>
              <Link to={"/"} class="text-black text-xl  p-1 rounded-xl">
                Exercises
              </Link>
              <Link to={"/Blogs"} class="text-black text-xl  p-1 rounded-xl">
                Blogs
              </Link>
              <Link to={"/AboutUs"} class="text-black text-xl  p-1 rounded-xl">
                About Us
              </Link>
            </div>
            <div class="space-x-4">
             
              <Link
                to={"/UserSignUp"}
                class="text-black text-xl  p-1 rounded-xl"
              >
                <AccountBoxIcon /> Sign Out
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <div className="max-w-3xl mx-auto p-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-semibold">Your Daily Summary</h1>
        </header>
        <section className="flex items-center justify-between mb-8 mt-20">
          <div className="w-1/4 bg-gray-200 p-4 rounded">
            <p className="text-center">Upload Your Photo</p>
          </div>
          <div className="flex-grow mx-4">
            <p className="mb-2">Total Calories:</p>
            <p className="text-2xl font-semibold">{totalCalories}</p>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handleAddExercise}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Add Exercise
            </button>
            <button
              onClick={handleAddFood}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Food
            </button>
          </div>
        </section>
        <div className='flex justify-between'>
          <h4>Calories Goal: <strong> { totalCalories } </strong> </h4> |
          <h4>Calories from Food: <strong> {caloriesTaken} </strong> </h4> 
          -
          <h4>Calories Burned: <strong> {caloriesBurned} </strong> </h4>
          =
          <h4>Net Calories: <strong> { caloriesTaken - caloriesBurned} </strong> </h4>
        </div>
        
        <section className="text-center flex justify-between mt-16">
          <p className="mb-2">
            Gained Weight: 0 Kg <MonitorWeightIcon style={{ fontSize: 50 }} />
          </p>

          <div className="w-3/4 bg-gray-200 h-8 rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-green-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </section>
      </div>
    </>
  );
};



export default Dashboard;