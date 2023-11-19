import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// ------------------------------------------------1
const Height= () => {
  const totalSteps = 21; 
  const [currentStep, setCurrentStep] = useState(2);

  const [name, setName] = useState('');
  const [isNameSelected, setIsNameSelected] = useState(false);
  const [heightFeet, setHeightFeet] = useState('');
  const [inches, setinches] = useState('');
  const [heightCentimeters, setHeightCentimeters] = useState('');
  const [isHeightSelected, setIsHeightSelected] = useState(false);
  const [isCentimeters, setIsCentimeters] = useState(false);

  useEffect(() => {
    setIsNameSelected(name !== '');
  }, [name]);

  useEffect(() => {
    setIsHeightSelected(heightFeet !== ''& inches !== '' || heightCentimeters !== '' );
  }, [heightFeet,inches, heightCentimeters]);

  const handleBlur = () => {
    if (inches > 12) {
      setinches('11.9');
      alert("you can acseed from 12")
    }
  };
  const handleNext = () => {
    // Handle the next step logic here
  };

  const handleUnitChange = () => {
    setIsCentimeters(!isCentimeters);
  };

  return (
    <div>
      <div className='bg-green-500 p-8 text-center text-3xl text-white font-bold'>Height</div>
      <div className=" mt-2 ml-96 mr-96 rounded-xl p-16 drop-shadow-2xl border-2">
        <div className="bg-gray-400 h-2 rounded-xl">
          <div
            className="bg-green-400 h-full rounded-xl"
            style={{ width: `${((currentStep - 1) / totalSteps) * 100}%` }}
          ></div>
        </div>
        <div>
          <h1 className=" text-center font-bold text-2xl mt-4">How tall are you?</h1>
          <div className="">
          <h3 className=' mt-2 mb-5 text-center'> You can provide your height in Feet & inches or Centimeters ,
          Whichever you find more convenient </h3>
            {!isCentimeters ? (
              <div className='mt-10 flex justify-center'>
                <input
                  required
                  style={{ width: "70px", height: "30px", marginRight: '10px' }}
                  type="number"
                  className="mr-2 border-2 p-2"
                  value={heightFeet}
                  onChange={(e) => setHeightFeet(e.target.value)}
                  placeholder="Feet"
                />
                
                <span className='text-lg'>feet</span>

                <input
                  required
                  style={{ width: "70px", height: "30px", marginRight: '10px' }}
                  type="number"
                  className="mr-2 border-2  ml-3 p-1"
                  value={inches}
                  onChange={(e) => setinches(e.target.value)}
                  onBlur={handleBlur}
                  placeholder="inches"
                />
                
                <span className='text-lg'>inches</span>
              </div>
              
            ) : (
              <div  className='mt-3 flex justify-center '>
                <input
                  required
                  style={{ width: "100px", height: "30px", marginRight: '10px' }}
                  type="number"
                  className="mr-2 border-2"
                  value={heightCentimeters}
                  onChange={(e) => setHeightCentimeters(e.target.value)}
                  placeholder="Centimeters"
                />
                <span className='text-lg'>cm</span>
              </div>
            )}
            <button
              className="text-blue-500 ml-24 underline cursor-pointer mt-5 "
              onClick={handleUnitChange}
            >
              {isCentimeters ? 'Change units to feet' : 'Change units to centimeters'}
            </button>
          </div>
        </div>
        <br />
        <div className="flex justify-around mt-10 ml-5 mr-5">
          <Link
            className="bg-blue-500  text-white text-xl pl-7 pr-7 pt-1 pb-1 rounded-sm"
            to={"/Gender"}
          >
            Back
          </Link>
          {isHeightSelected ? (
            <Link
              className="bg-blue-500  text-white text-xl pl-7 pr-7 pt-1 pb-1 rounded-sm"
              to={"/HeightWeight"} // Replace with the next screen's path
              onClick={handleNext}
            >
              Next
            </Link>
          ) : (
            <span className="bg-blue-500  text-white text-xl pl-7 pr-7 pt-1 pb-1 rounded-sm opacity-50 cursor-not-allowed">
              Next
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Height;
