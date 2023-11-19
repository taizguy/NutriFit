import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ExerciseType = () => {
  const [exerciseType, setExerciseType] = useState(''); // Default to empty
// =-------------------------------------8
  const totalSteps = 21;
  const [currentStep, setCurrentStep] = useState(8);

  const handleNext = () => {
    // onNext({ exerciseType });
  };

  // Check if the exerciseType is filled
  const isExerciseTypeSelected = exerciseType !== '';

  return (
    <div>
      <div className='bg-green-500 p-8 text-center text-2xl text-white font-bold'>Exercise Type</div>

      <div className="border-2  mt-10 ml-96 mr-96 rounded-xl p-16 drop-shadow-xl ">
        <div className="bg-gray-400 h-2 rounded-xl">
          <div
            className="bg-green-400 h-full rounded-xl"
            style={{ width: `${((currentStep - 1) / totalSteps) * 100}%` }}
          ></div>
        </div>

        <div>
          <h1 className="mt-2 text-center font-bold text-2xl mb-5">Exercises You Prefer</h1>

          <p className='text-center mb-8'>Could you please specify the type of exercises you typically perform?</p>
          <div className="text-lg ml-5 mb-5 border-2 rounded-lg p-1 hover:bg-green-400">
            <label>
              <input
                required
                style={{ width: '20px', height: '20px', marginRight: '8px' }}
                type="radio"
                value="aerobic"
                checked={exerciseType === 'aerobic'}
                onChange={() => setExerciseType('aerobic')}
              />
              Aerobic (swimming, cycling)
            </label>
          </div>

          <div className="text-lg ml-5 mb-5 border-2 rounded-lg p-1 hover:bg-green-400 ">
            <label>
              <input
                required
                style={{ width: '20px', height: '20px', marginRight: '8px' }}
                type="radio"
                value="muscle"
                checked={exerciseType === 'muscle'}
                onChange={() => setExerciseType('muscle')}
              />
              Muscle Strengthening
            </label>
          </div>

          <div className="text-lg ml-5 mb-5 border-2 rounded-lg p-1 hover:bg-green-400 ">
            <label>
              <input
                required
                style={{ width: '20px', height: '20px', marginRight: '8px' }}
                type="radio"
                value="bone"
                checked={exerciseType === 'bone'}
                onChange={() => setExerciseType('bone')}
              />
              Bone Strengthening
            </label>
          </div>
        </div>

        <div className="flex justify-around mt-10 ml-5 mr-5">
          <Link className="bg-green-400 text-white text-xl pl-7 pr-7 pt-1 pb-1" to={"/eat-before-workout"}>Back</Link>
          {isExerciseTypeSelected ? (
            <Link className="bg-green-400 text-white text-xl pl-7 pr-7 pt-1 pb-1" to={"/workout-frequency"} onClick={handleNext}>Next</Link>
          ) : (
            <span className="bg-green-400 text-white text-xl pl-7 pr-7 pt-1 pb-1 opacity-50 cursor-not-allowed">Next</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExerciseType;
