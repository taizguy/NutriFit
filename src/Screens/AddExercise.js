import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
// Import ExerciseModal here (adjust the path based on your project structure)
import ExerciseModal from './ExerciseModal';

Modal.setAppElement('#root'); // Set the root element for accessibility

function ExerciseComponent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [exerciseResults, setExerciseResults] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  console.log(modalVisible, selectedExercise, "_____");

  const handleSearchExercise = async () => {
    try {
      const apiKey = '1f97f206d2msh1deed2067dece0fp1081a8jsn9c0b72d4a2c0'; // Replace with your RapidAPI key
      const exerciseResponse = await axios.get(
        `https://exercisedb.p.rapidapi.com/exercises/name/${searchQuery}`,
        {
          headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
          },
        }
      );

      setExerciseResults(exerciseResponse.data);
      setSearchPerformed(true);
    } catch (error) {
      console.error('Error fetching exercise details:', error);
      setExerciseResults([]);
      setSearchPerformed(true);
    }
  };

  const openModal = (exercise) => {
    console.log('Opening modal for exercise:', exercise);
    setSelectedExercise(exercise);
    setModalVisible(true);
  };

  const closeModal = () => {
    console.log('Closing modal');
    setModalVisible(false);
  };

  const renderExerciseResults = () => {
    if (exerciseResults.length === 0) {
      return <p className="text-center text-gray-500">No matching exercises found.</p>;
    }

    return (
      <div>
        <h2 className="text-2xl font-semibold mb-4">Matching exercises:</h2>
        {exerciseResults.map((exercise) => (
          <div key={exercise.id} className="mb-8 p-6 border rounded shadow-lg bg-white">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Name: {exercise.name}</h3>
            <p className="text-gray-600 mb-2"><strong>Target:</strong> {exercise.target}</p>
            <img src={exercise.gifUrl} alt={exercise.name} className="rounded-lg" />
            <button
              onClick={() => openModal(exercise)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Select
            </button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gray-100">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-blue-600">Exercise Database</h1>
      </header>
      <div className="mb-4">
        <label className="block mb-2 text-lg">Search our exercise database by name:</label>
        <div className="flex space-x-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            onClick={handleSearchExercise}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      </div>
      {searchPerformed && (
        exerciseResults.length > 0 ? (
          renderExerciseResults()
        ) : <p className="text-center text-gray-500">No matching exercises found.</p>
      )}
      {modalVisible && selectedExercise && (
        <ExerciseModal
          exercise={selectedExercise}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default ExerciseComponent;
