import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addGoal } from "../../redux/actions/goal";

const GoalForm = () => {
  const dispatch = useDispatch();

  const [goalDetails, setGoalDetails] = useState({
    goalName: "",
    goalDescription: "",
    targetDate: "",
    targetCaloriesValue: "",
    status: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setGoalDetails((prev) => ({
      ...prev,
      [name]: name === "targetCaloriesValue" ? parseFloat(value) : value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    await dispatch(addGoal(goalDetails));

    setGoalDetails({
      goalName: "",
      goalDescription: "",
      targetDate: "",
      targetCaloriesValue: "",
      status: "",
    });
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <h3>Goals</h3>

        <label htmlFor="goalName">Goal:</label>
        <input
          type="text"
          placeholder="Enter goal Name"
          id="goalName"
          name="goalName"
          onChange={inputHandler}
          required
          value={goalDetails.goalName}
        />
        <label htmlFor="goalDescription">Description:</label>
        <input
          name="goalDescription"
          id="goalDescription"
          placeholder="Enter Goal Description"
          required
          onChange={inputHandler}
          value={goalDetails.goalDescription}
        ></input>

        <label htmlFor="targetDate">Target Date:</label>
        <input
          type="date"
          name="targetDate"
          id="targetDate"
          required
          onChange={inputHandler}
          value={goalDetails.targetDate}
        />

        <label htmlFor="status">Status</label>
        <select
          value={goalDetails.status}
          name="status"
          id="status"
          onChange={inputHandler}
        >
          <option value="" disabled>
            Select a Field
          </option>
          <option value="Abandoned">Abandoned</option>
          <option value="Achieved">Achieved</option>
          <option value="In Progress">In Progress</option>
        </select>

        <label htmlFor="targetCaloriesValue">Target Calories Value:</label>
        <input
          type="number"
          placeholder="Enter Target Calories Value"
          id="targetCaloriesValue"
          name="targetCaloriesValue"
          onChange={inputHandler}
          required
          value={goalDetails.targetCaloriesValue}
        />

        <button className="btn" type="submit">
          Add Goal
        </button>
      </form>
    </div>
  );
};

export default GoalForm;
