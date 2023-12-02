import React, {useState, useEffect} from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

import Cardd from "../Component/Cardd";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import Typewriter from "typewriter-effect";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { height } from "@mui/system";
import styled from "@emotion/styled";
import Exercises from "./Exercises";
const API_KEY = "f0d80579f3204d7297bc576470ecbc62";
const url = "https://newsapi.org/v2/everything?q=";

const Welcome = () => {
  
const [exerciseArticles, setExerciseArticles] = useState([]);
  useEffect(() => {
    fetchNews("Exercise", 3); // Fetch 3 exercise articles
  }, []);
  async function fetchNews(query, count) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    const selectedArticles = data.articles.slice(0, count);
    setExerciseArticles(selectedArticles);
  }

  return (
    <div>
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

              <Link to={"/Exercises"} class="text-black text-xl p-1 rounded-xl">
                Exercises
              </Link>
              <Link to={"/Blogs"} class="text-black text-xl p-1 rounded-xl">
                Blogs
              </Link>
              <Link to={"/AboutUs"} class="text-black text-xl p-1 rounded-xl">
                About Us
              </Link>
            </div>
            <div class="space-x-4">
              <Link to={"/Login"} class="text-black text-xl p-1 rounded-xl">
                <PersonIcon /> Login
              </Link>
              <Link
                to={"/UserSignUp"}
                class="text-black text-xl p-1 rounded-xl"
              >
                <AccountBoxIcon /> SignUp
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <div class=" bg-cover h-screen bg-green-100 flex flex-row justify-around p-8">
        <div className="mt-52">
          {" "}
          <h1 className="text-5xl font-bold">
            <Typewriter
              options={{
                strings: [
                  "Be Healthy <br/> for life!",
                  "Be Healthy <br/> for life!",
                ],
                autoStart: true,
                loop: true,
                delay: 200,
              }}
            />
          </h1>
          <br />
          <p className="font-semibold text-xl ">
            Your weight loss, diet, and <br /> nutrition assistant
          </p>
        </div>

        <div className="mt-10">
          <img
            className="rounded-lg drop-shadow-md"
            height={500}
            width={550}
            src={require("../Data/Home-removebg-preview.png")}
          />
        </div>
      </div>
      {/* <hr className='mt-1' style={{ background: 'black', height: '3px', }} /> */}
      {/* -------------------------------------------Block------------------------------------------------- */}
      <PageWrapper>
        <div className=" mt-14 mb-14">
          <h1 className="text-center text-3xl font-bold">
            {" "}
            What Would You Get{" "}
          </h1>
        </div>
        <div className="mt-8 pt-2 pb-2">
          <div className="flex flex-row space-x-52 mt-32 ml-20 mr-20 mb-20">
            <img
              className="rounded-lg"
              src={require("../Data/first.png")}
              height={"400px"}
              width={"400px"}
            />
            <div className="text-2xl mt-16">
              {" "}
              <strong>Personlized Meal plan</strong> <br />{" "}
              <p>
                Сontains ingredients, step-by-step preparation, extra recipes to
                swap and nutritional value
              </p>
            </div>
          </div>
        </div>
        <div className="pb-1">
          <div className=" flex flex-row space-x-52 mt-15 ml-20 mr-20 mb-20 p-10">
            <h1 className="text-2xl mt-16">
              <strong>Fat-burning workouts</strong> <br />{" "}
              <p>
                Tell us about yourself so that we can create a personalized meal
                plan tailored to your needs, preferences, and goals.
              </p>
            </h1>
            <img
              className="rounded-lg"
              src={require("../Data/second.png")}
              height={"400px"}
              width={"400px"}
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        {/* -------------------------------------------Block------------------------------------------------- */}
        <div className=" pt-2 pb-2">
          <div className="flex flex-row space-x-52 ml-20 mr-20 mb-20">
            <img
              className="rounded-lg"
              src={require("../Data/third.png")}
              height={"400px"}
              width={"400px"}
            />
            <h1 className="text-2xl mt-8">
              <strong>Professional support</strong> <br />
              <br />{" "}
              <p>
                Don’t hesitate to ask your question. We are here to help you
                solve any kind of difficulty 24/7.{" "}
              </p>
            </h1>
          </div>
        </div>
        <div className="pb-1">
          <div className=" flex flex-row space-x-52 mt-10 ml-20 mr-20 mb-20">
            <h1 className="text-2xl mt-16">
              <strong>Healthy lifestyle basics</strong> <br />
              <br />{" "}
              <p>
                Educate yourself on how to develop a healthier lifestyle. Know
                more about eating, sleep, stress etc{" "}
              </p>
            </h1>
            <img
              className="rounded-lg mt-10"
              src={require("../Data/fourth.png")}
              height={"400px"}
              width={"400px"}
            />
          </div>
        </div>
      </PageWrapper>
      <br />
      {/* -------------------------------------------Recipie------------------------------------------------- */}
      <hr />
      <hr />
      <hr />
      <br />
      <br />
      <PageWrapper>
        <h1 className="text-3xl font-bold ml-20">Recipies</h1>
        
          <Link
            className="flex justify-end mt-20 text-sky-600 font-bold  mr-5"
            to={"/Features"}
          >
            {" "}
            All Recipie <ArrowForwardIcon />
          </Link>
        
      </PageWrapper>
      <br />
      <br />
      {/* -------------------------------------------Exersise------------------------------------------------- */}
      <PageWrapper>
        <h1 className="text-3xl font-bold ml-20">Exercises</h1>
        
            {/* <Exercises exerciseArticles={exerciseArticles} /> */}
            
          <Link
            className="flex justify-end mt-20 text-sky-600 font-bold  mr-5 "
            to={"/Exercise"}
          >
            All Exercise <ArrowForwardIcon />
          </Link>
        
      </PageWrapper>
      {/* -------------------------------------------Blogs------------------------------------------------- */}
      <PageWrapper>
        <h1 className="text-3xl font-bold ml-20 mt-32">
          Learn more about healthy lifestyle and nutrition
        </h1>

       
          <Link
            className="flex justify-end mt-20 text-sky-600 font-bold  mr-5 "
            to={"/Blogs"}
          >
            All Blogs <ArrowForwardIcon />
          </Link>
      </PageWrapper>
      <hr />
      <hr />
      <hr />
      <br />
      <br /> <br />
      <div className="bg-green-400 p-20 mt-28 mb-28 ml-40 mr-40 rounded-2xl">
        <h1 className="text-center font-bold text-xl">
          {" "}
          NutriFit inspires with fun & result!
          <br />
          Get your personal meal plan, daily motivation and
          <br />
          learning program
          <br />
          Start your journey now
        </h1>
      </div>
    </div>
  );
};





export default Welcome;

const PageWrapper = styled.div`
  margin: 0% 10%;
`

const title = "Recepie";
const description =
  "Creating a delightful recipe involves a harmonious blend of flavors, textures, and techniques.";
const imageUrl =
  "https://cdn.loveandlemons.com/wp-content/uploads/2020/12/plant-based-recipes.jpg";

const title2 = "Exersise";
const description2 =
  "Creating a delightful recipe involves a harmonious blend of flavors, textures, and techniques";
const imageUrl4 = "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80"
const imageUrl2 =
  "https:/images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXhlcmNpc2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80";
const imageUrl5 = "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
const imageUrl6 = "https://plus.unsplash.com/premium_photo-1664297947327-6e03f98b4eb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
const imageUrl3 = "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"