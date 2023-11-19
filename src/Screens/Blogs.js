import React, { Component } from 'react'
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import Cardd from "../Component/Cardd";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import Typewriter from "typewriter-effect";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { height } from "@mui/system";
import styled from "@emotion/styled";
import { SimpleDropdown } from 'react-js-dropdavn'
import 'react-js-dropdavn/dist/index.css'


const data = [
  { label: 'Health & Nutrition', value: 1 },
  { label: 'Immunity', value: 2 },
  { label: 'Sports', value: 3 },
  { label: 'Kids Nutrition', value: 4 },
  { label: 'Weight Management', value: 4 },
  { label: 'Hair Care', value: 4 },
  { label: 'Skin Care', value: 4 },
  { label: 'Men Health', value: 4 },
]

const Blogs = () => {
  return (
    <div>
      
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
                  <Link
                    to={"/"}
                    class="text-black text-xl  p-1 rounded-xl"
                  >
                    Exercises
                  </Link>
                  <Link
                    to={"/Blogs"}
                    class="text-black text-xl  p-1 rounded-xl"
                  >
                    Blogs
                  </Link>
                  <Link
                    to={"/AboutUs"}
                    class="text-black text-xl p-1 rounded-xl"
                  >
                    About Us
                  </Link>
                </div>
                <div class="space-x-4">
                  <Link
                    to={"/Login"}
                    class="text-black text-xl  p-1 rounded-xl"
                  >
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
          <div class="bg-cover bg-green-100 flex flex-row justify-around p-8">
            <div className="mt-48">
              {" "}
              <h1 className="text-5xl font-bold">
                <Typewriter
                  options={{
                    strings: [
                      "Read <br/> Blogs!",

                    ],
                    autoStart: true,
                    loop: true,
                    delay: 200,
                  }}
                />
              </h1>
              <br />
              <p className="font-semibold text-xl ">
                Read blogs covering health topics <br /> from nutritions to exercises.<br />Keep yourself updated.
              </p>
            </div>

            <div className="mt-10">
              <img
                className="rounded-lg drop-shadow-md"
                height={500}
                width={550}
                src={require("../Data/blogMain.png")}
              />
            </div>
          </div>
        </div>
      


        <div className='m-10'>
        <SimpleDropdown
          options={data}
          clearable
          searchable
          configs={
            { position: { y: 'bottom', x: 'center' } }
          }
        />
        </div>
      

      <PageWrapper>
      <div className="m-10 pt-4 rounded-lg drop-shadow-2xl">
      {/* <h1 className="text-3xl font-bold ml-20 mt-52">
        Learn more about healthy lifestyle and nutrition
      </h1> */}
        <div className="flex flex-wrap">

          <Cardd
            title={'Blog 1'}
            description={description}
            imageUrl={require('../Data/blog1.jpg')}
          />
          <Cardd
            title={'Blog 2'}
            description={description2}
            imageUrl={require('../Data/blog2.jpg')}
          />
          <Cardd
            title={'Blog 3'}
            description={description2}
            imageUrl={require('../Data/blog3.jpg')}
          />
          <Cardd
            title={'Blog 3'}
            description={description2}
            imageUrl={require('../Data/blog3.jpg')}
          />
          <Cardd
            title={'Blog 3'}
            description={description2}
            imageUrl={require('../Data/blog3.jpg')}
          />
          <Cardd
            title={'Blog 3'}
            description={description2}
            imageUrl={require('../Data/blog3.jpg')}
          />
          <Cardd
            title={'Blog 3'}
            description={description2}
            imageUrl={require('../Data/blog3.jpg')}
          />
          <Cardd
            title={'Blog 3'}
            description={description2}
            imageUrl={require('../Data/blog3.jpg')}
          />
          <Cardd
            title={'Blog 3'}
            description={description2}
            imageUrl={require('../Data/blog3.jpg')}
          />


          <br />
        </div>
      </div>
      </PageWrapper>
      </div>

      )
      }







      export default Blogs

      const PageWrapper = styled.div`
  margin: 0% 8%;
`

      

      const description =
  "Creating a delightful recipe involves a harmonious blend of flavors, textures, and techniques. Each ingredient plays a vital role, contributing to a symphony of taste that awakens the senses";
  const description2 =
  "Creating a delightful recipe involves a harmonious blend of flavors, textures, and techniques. Each ingredient plays a vital role, contributing to a symphony of taste that awakens the senses";