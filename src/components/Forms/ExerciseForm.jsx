import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExercise } from "../../redux/actions/exercise";
import "./ExerciseForm.css"

const ExerciseForm = () => {
  const dispatch = useDispatch();
  const [exerciseDetails, setExerciseDetails] = useState({
    exerciseName: "",
    duration: "",
  });

   const inputHandler = (e) => {
     setExerciseDetails((prev) => ({
       ...prev,
       [e.target.name]: e.target.value,
     }));
   };

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(addExercise(exerciseDetails));
    setExerciseDetails({ exerciseName: "", duration: "" });
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <h3>Exercises</h3>

        <label htmlFor="exerciseName">Name:</label>
        <input
          type="text"
          placeholder="Enter Exercise Name"
          id="exerciseName"
          name="exerciseName"
          onChange={inputHandler}
          required
          value={exerciseDetails?.exerciseName}
        />

        <label htmlFor="duration">Duration (mins):</label>
        <input
          type="number"
          placeholder="Enter Duration in mins"
          id="duration"
          name="duration"
          onChange={inputHandler}
          required
          value={exerciseDetails?.duration}
        />

        <button className="btn" type="submit">
          Add Exercise
        </button>
      </form>
    </div>
  );
};

export default ExerciseForm;
