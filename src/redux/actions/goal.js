import axios from "axios";

const apiEndpoint =
  "https://0b8a5fe4-5e3d-441c-b46f-bbaf321d6431-00-1lvt3jttw7xix.pike.replit.dev/api/goals";

export const fetchGoalsData = () => async (dispatch) => {
  try {
    const response = await axios.get(apiEndpoint);
    const data = response.data.goals;
    dispatch({ type: "FETCH_GOALS", payload: data });
  } catch (error) {
    console.error("Error while fetching goals data", error);
  }
};

export const addGoal = (goalDetails) => async (dispatch) => {
  try {
    const response = await axios.post(apiEndpoint, goalDetails);
    dispatch({
      type: "ADD_GOAL",
      payload: response.data.newGoal,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const deleteGoal = (goalId) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `https://fitness-tracker-api.zabihhaqqani1.repl.co/api/goals/${goalId}`
    );
    dispatch({
      type: "DELETE_GOAL",
      payload: response.data.deletedGoal._id,
    });
  } catch (error) {
    console.error("Error fetching deleted goals data:", error);
  }
};
