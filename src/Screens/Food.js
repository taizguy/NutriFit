import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { toast } from '../Component/toastr/toaster.tsx';
import { ToastContainer } from 'react-toastify';

function Food() {
  let user = Cookies.get("userInfo");

  const userInfo = user ? JSON.parse(user) : null;
  console.log(userInfo,"----")
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [quantity, setQuantity] = useState(100); // Initial quantity value in grams
  console.log(userInfo)

  const handleSearch = async () => {
    try {
      const apiKey = 'azB8eBn0QLn+GM2WXJprPQ==e0QQfFnyEKgJf1HP'; // Replace 'your_api_key' with your actual API key

      const response = await axios.get(`https://api.api-ninjas.com/v1/nutrition?query=${query}`, {
        headers: {
          'X-Api-Key': apiKey,
        },
      });

      const data = response.data;
      setResults(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAddToBreakfast = async (food) => {
    try {
      const userId = userInfo?._id;
      const mealtime = "breakFast";

      const requestBody = {
        userId,
        foodName: food.name.toUpperCase(),
        quantity,
        mealtime,
      };
      // Make a POST request to the specified API endpoint
      const response = await axios.post('http://localhost:5000/api/food/add', requestBody);
      if (response.data.status === 200) {
        toast.success(response.data.statusMessage);
   
        }
      // Handle the response as needed (log or update state)
      console.log('Food added successfully:', response.data);

      // Update the selectedFood state if needed
      setSelectedFood(food);
    } catch (error) {
      console.error('Error adding food:', error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <ToastContainer/>
      <header className="text-center mb-8">
        <h1 className="text-3xl font-semibold">Food Search and Breakfast Planner</h1>
      </header>
      <div className="mb-4">
        <label className="block mb-2 text-lg">Search for food:</label>
        <div className="flex space-x-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="p-2 border rounded w-full"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Search
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
        <ul>
          {results.map((food) => (
            <li key={food.id} className="mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg">{food.name}</p>
                  <p className="text-gray-500">{food.calories} calories</p>
                </div>
                <div className="flex space-x-2 items-center">
                  <label className="text-lg">Quantity:</label>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="p-2 border rounded w-20 text-center"
                  />
                  <span className="ml-2">gm</span>
                  <button
                    onClick={() => handleAddToBreakfast(food)}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                  >
                    Add to Breakfast
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {selectedFood && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Selected Food for Breakfast</h2>
          <p className="text-lg">{selectedFood.name} - {selectedFood.calories} calories</p>
        </div>
      )}
      <div className="mt-8">
        <Link to="/dashboard" className="text-blue-500">Go back to Dashboard</Link>
      </div>
    </div>
  );
}

export default Food;
