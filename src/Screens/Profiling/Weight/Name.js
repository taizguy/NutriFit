import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Name= () => {
  const totalSteps = 21;
  const [currentStep, setCurrentStep] = useState(1);

  const [name, setName] = useState('');
  const [isNameSelected, setIsNameSelected] = useState(false);

  useEffect(() => {
    setIsNameSelected(name !== '');
  }, [name]);

  const handleNext = () => {
    // Handle the next step logic here
  };

  return (
    <div>
      <div className='bg-green-400 p-8 text-center text-3xl text-white font-bold'>Name</div>
      <div className="mt-6 ml-96 mr-96 rounded-xl p-16 drop-shadow-2xl border-2">
        {/* <div className="bg-gray-400 h-2 rounded-xl">
          <div
            className="bg-blue-500 h-full  rounded-xl"
            style={{ width: `${((currentStep - 1) / totalSteps) * 100}%` }}
          ></div>
        </div> */}
        <div className=''>
          <h1 className="text-center font-bold text-2xl mb-4 ">What's Your Name</h1>
          <p className='text-center mt-2'>We’re glad you’re here.<br/>
Let’s find out a bit about you.
</p>
          <div className="flex justify-center mt-5">
            <input
              required
              style={{ width: "280px", height: "40px" ,padding:"10px"}}
              type="text"
              className=" mt-4 border-green-600 border-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
            />
          </div>
        </div>
        <br />
        <div className="flex justify-around mt-10 ml-5 mr-5">
          <Link
            className="bg-green-400  text-white text-xl pl-7 pr-7 pt-1 pb-1 rounded-sm"
            to={"/name"}
          >
            Back
          </Link>
          {isNameSelected ? (
            <Link
      className="bg-green-400  text-white text-xl pl-7 pr-7 pt-1 pb-1 rounded-sm"
      to={"/NameCall"} // Navigate to Option screen
      state={{ name: name }} // Pass name as state
    >
      Next
    </Link>
          ) : (
            <span className="bg-green-400  text-white text-xl pl-7 pr-7 pt-1 pb-1 rounded-sm opacity-50 cursor-not-allowed">
              Next
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Name;
