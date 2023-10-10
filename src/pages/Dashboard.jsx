import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../components/Card/Card.css";
import { fetchFoodsData } from "../redux/actions/food";
import { fetchGoalsData } from "../redux/actions/goal";
import { fetchExercisesData } from "../redux/actions/exercise";

export const Dashboard = () => {
  const dispatch = useDispatch();

  const { exercises } = useSelector((state) => state.exercises);
  const { foodItems } = useSelector((state) => state.foodItems);
  const { goals } = useSelector((state) => state.goals);

  const totalCaloriesBurned = exercises?.reduce(
    (total, curr) => total + curr.caloriesBurned,
    0
  );

  const totalCaloriesConsumed = foodItems?.reduce(
    (total, curr) => total + curr.calories,
    0
  );

  const totalCaloriesGoal = goals?.reduce(
    (total, curr) => total + curr.targetCaloriesValue,
    0
  );

  useEffect(() => {
    dispatch(fetchExercisesData());
    dispatch(fetchFoodsData());
    dispatch(fetchGoalsData());
  }, []);

  return (
    <div className="dashboard">
      <div className="card-container">
        <div className="card">
          <p>
            <strong>Total Calories Burned: </strong> {totalCaloriesBurned}
          </p>
        </div>
        <div className="card">
          <p>
            <strong>Total Calories Consumed: </strong>
            {totalCaloriesConsumed}
          </p>
        </div>
        <div className="card">
          <p>
            <strong>Total Calories Goal: </strong>
            {totalCaloriesGoal}
          </p>
        </div>
        <div className="card">
          <p>
            <strong>Remaining Calories to Goal: </strong>{" "}
            {totalCaloriesGoal - totalCaloriesConsumed}
          </p>
        </div>
      </div>
    </div>
  );
};
