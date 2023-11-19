import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// ---------------------------------------3
const HeightWeightScreen = () => {
  const [weight, setWeight] = useState('');
  const [desiredWeight, setDesiredWeight] = useState('');
  const [isWeightInPounds, setIsWeightInPounds] = useState(false);
  const [isDesiredWeightInPounds, setIsDesiredWeightInPounds] = useState(false);

  const totalSteps = 21;
  const [currentStep, setCurrentStep] = useState(2);

  const [areFieldsFilled, setAreFieldsFilled] = useState(false);

  useEffect(() => {
    const fieldsFilled = weight !== '' && desiredWeight !== '';
    setAreFieldsFilled(fieldsFilled);
  }, [weight, desiredWeight]);

  const handleNext = () => {
    // Handle the next step logic here
  };

  const toggleWeightUnits = () => {
    setIsWeightInPounds(!isWeightInPounds);
  };

  const toggleDesiredWeightUnits = () => {
    setIsDesiredWeightInPounds(!isDesiredWeightInPounds);
  };

  return (
    <div>
      <div className='bg-green-500 p-5 text-center text-3xl text-white font-bold'>Weight</div>
      <div className=" mt-5 ml-96 mr-96 rounded-xl p-16 drop-shadow-2xl border-2">
        <div className="bg-gray-400 h-2 rounded-xl">
          <div
            className="bg-green-400 h-full  rounded-xl"
            style={{ width: `${((currentStep - 1) / totalSteps) * 100}%` }}
          ></div>
        </div>
      
 
        <div className='text-center'>
        <br/>
          <label className="text-2xl font-bold">Current Weight</label>
          
          <p className="mt-5" >We kindly request your current weight, you can provide it in kilogram (kg) or Pounds (lb)  </p>
          <br/>
          <input
            required
            type="number"
            className="ml-20 rounded-md mt-2 w-44 p-2 border-2"
            placeholder={isWeightInPounds ? "Pounds" : "Kilograms"}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <button
            className="text-blue-500 ml-2 underline cursor-pointer"
            onClick={toggleWeightUnits}
          >
            {isWeightInPounds ? "Kilograms" : "Pounds"}
          </button>
        </div>
        <div className='mt-10 text-center'>
          <label className="text-xl font-bold">Whats Your Goal Weight</label>
          <p className="mt-5">Don’t worry. This doesn’t affect your daily calorie goal and you can always change it later.</p>


          <br />
          <input
            required
            type="number"
            className="ml-20 rounded-md mt-2 w-44 p-2 border-2"
            placeholder={isWeightInPounds ? "Pounds" : "Kilograms"}
            value={desiredWeight}
            onChange={(e) => setDesiredWeight(e.target.value)}
          />
          <button
            className="bg-green-400 ml-2 underline cursor-pointer"
            onClick={toggleDesiredWeightUnits}
          >
            {isWeightInPounds ? "Kilograms" : "Pounds"}
          </button>
        </div>
        <p className="mt-10 text-center">Your information will enable us to better cater to your needs.</p>
        <br />
        <div className="flex justify-around mt-1 ml-5 mr-5">
          <Link className="bg-green-400 text-white text-xl pl-7 pr-7 pt-1 pb-1 rounded-sm" to={"/Height"}>
            Back
          </Link>
          {areFieldsFilled ? (
            <Link className="bg-green-400 text-white text-xl pl-7 pr-7 pt-1 pb-1 rounded-sm" to={'/WeeklyGoal'} onClick={handleNext}>
              Next
            </Link>
          ) : (
            <span className="bg-green-400 text-white text-xl pl-7 pr-7 pt-1 pb-1 rounded-sm opacity-50 cursor-not-allowed">
              Next
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeightWeightScreen;
