import React, { useEffect, useState } from "react";
import ExerciseForm from "../components/Forms/ExerciseForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchExercisesData } from "../redux/actions/exercise";
import { deleteExercise } from "../redux/actions/exercise";

const Exercises = () => {
  const { exercises } = useSelector((state) => state.exercises);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExercisesData());
  }, [dispatch]);

  return (
    <div>
      <ExerciseForm />
      <div>
        {exercises?.length > 0 ? (
          <div className="card-container">
            {exercises?.map((data) => {
              return (
                <div key={data?._id} className="card">
                  <p>
                    <strong>Name: </strong>
                    {data?.exerciseName}
                  </p>
                  <p>
                    <strong>Time: {data?.duration} mins</strong>
                  </p>
                  <p>
                    {" "}
                    <strong>Calories Burned: {data?.caloriesBurned}</strong>
                  </p>
                  <button onClick={() => dispatch(deleteExercise(data._id))}>
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <h3>No Exercises!</h3>
        )}
      </div>
    </div>
  );
};

export default Exercises;
