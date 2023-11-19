// Option.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const NameCall = () => {
  const totalSteps = 21;
  const [currentStep, setCurrentStep] = useState(1);
  const location = useLocation();

  const name = location?.state?.name || ''; 

  // ...

  return (
    <div>
      <div className='bg-green-400 p-8 text-center text-3xl text-white font-bold'>Name</div>
      <div className="mt-6 ml-96 mr-96 rounded-xl p-14 drop-shadow-2xl border-2">
        {/* ... */}
        <div className=''>
          <h1 className="mt-2 text-center font-bold text-3xl mb-2">Welcome, {name}</h1>
          <p className='text-center'> Now you have to select your health goal <br />
          </p>
          <br />
          <div className=''>
      
          <div className="flex flex-col space-y-4">
            <button className="bg-white hover:bg-green-400 text-black text-xl p-3 rounded-sm border-green-700 border-2"><Link to={"/Msg1"}>Gain Weight</Link> </button>
            <button className="bg-white hover:bg-green-400 text-black text-xl p-3 rounded-sm border-green-700 border-2"><Link to={"/Msg1"}>Weight Loss</Link></button>
            <button className="bg-white hover:bg-green-400 text-black text-xl p-3 rounded-sm border-green-700 border-2"><Link to={"/Msg1"}>Maintain Weight </Link></button>
            <button className="bg-white hover:bg-green-400 text-black text-xl p-3 rounded-sm border-green-700 border-2"><Link to={"/Msg2"}>Increase Stamina</Link></button>
          </div>
        </div>

        </div>
        <div className="flex justify-around mt-10 ml-5 mr-5">
          <Link
            className="bg-green-500  text-white text-xl pl-7 pr-7 pt-1 pb-1 rounded-sm"
            to={"/Name"}
          >
            Back
          </Link>
          </div>

        {/* <div className="flex justify-around mt-10 ml-5 mr-5">
          <Link
            className="bg-blue-500  text-white text-xl pl-7 pr-7 pt-1 pb-1 rounded-sm"
            to={"/Name"}>
            Back
          </Link>

          <Link
            className="bg-blue-500  text-white text-xl pl-7 pr-7 pt-1 pb-1 rounded-sm"
            to={"/Option"} >
            Next
          </Link>

        </div> */}


      </div>
    </div>
  );
};

export default NameCall;
