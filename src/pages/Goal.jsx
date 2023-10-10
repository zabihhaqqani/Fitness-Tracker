import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteGoal, fetchGoalsData } from "../redux/actions/goal";
import moment from "moment/moment";
import GoalForm from "../components/Forms/GoalForm";

const Goal = () => {
  const {goals} = useSelector((state) => state.goals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGoalsData());
  }, [dispatch]);

  return (
    <div>
      <GoalForm />

      <div>
        {goals?.length > 0 ? (
          <div className="card-container">
            {goals?.map((goal) => {
              return (
                <div key={goal?._id} className="card">
                  <p>
                    <strong>Name: </strong>
                    {goal?.goalName}
                  </p>
                  <p>
                    <strong>Goal Description: </strong>
                    {goal?.goalDescription}
                  </p>

                  <p>
                    <strong>Target Date: </strong>
                    {moment(goal?.targetDate).format("ll")}
                  </p>
                  <p>
                    <strong>Target Calories Value: </strong>
                    {goal?.targetCaloriesValue}
                  </p>
                  <p>
                    <strong>Status: </strong>
                    {goal?.status}
                  </p>
                  <button onClick={() => dispatch(deleteGoal(goal?._id))}>
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <h3>No Goals!</h3>
        )}
      </div>
    </div>
  );
};

export default Goal;
